import { dirname, join } from "node:path";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import ts from "typescript";

const SITE = "https://bobbinsindia.net";
const DIST = "dist";
const baseHtml = readFileSync(join(DIST, "index.html"), "utf8");
const manifest = JSON.parse(readFileSync(join(DIST, ".vite", "manifest.json"), "utf8"));

const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;",
})[character]);
const safeJson = (value) => JSON.stringify(value).replace(/</g, "\\u003c");
const unwrap = (node) => {
  let current = node;
  while (current && (ts.isAsExpression(current) || ts.isSatisfiesExpression?.(current) || ts.isParenthesizedExpression(current))) current = current.expression;
  return current;
};
const propertyName = (node) => node && (ts.isStringLiteral(node) || ts.isIdentifier(node) || ts.isNumericLiteral(node)) ? node.text : "";
const literal = (node) => {
  const current = unwrap(node);
  if (!current) return "";
  if (ts.isStringLiteral(current) || ts.isNoSubstitutionTemplateLiteral(current) || ts.isNumericLiteral(current)) return current.text;
  return "";
};
const objectProperties = (node) => {
  const current = unwrap(node);
  if (!current || !ts.isObjectLiteralExpression(current)) return new Map();
  return new Map(current.properties.filter(ts.isPropertyAssignment).map((property) => [propertyName(property.name), property.initializer]));
};
const findVariable = (sourceFile, name) => {
  let match;
  const visit = (node) => {
    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.name.text === name) match = node.initializer;
    if (!match) ts.forEachChild(node, visit);
  };
  visit(sourceFile);
  return unwrap(match);
};

function parseProducts() {
  const sourceText = readFileSync("src/data/products.ts", "utf8");
  const sourceFile = ts.createSourceFile("products.ts", sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const imports = new Map();
  for (const statement of sourceFile.statements) {
    if (ts.isImportDeclaration(statement) && statement.importClause?.name && ts.isStringLiteral(statement.moduleSpecifier)) {
      imports.set(statement.importClause.name.text, statement.moduleSpecifier.text.replace("@/", "src/"));
    }
  }
  const array = findVariable(sourceFile, "products");
  if (!array || !ts.isArrayLiteralExpression(array)) throw new Error("Unable to parse product catalog");
  const products = array.elements.filter(ts.isObjectLiteralExpression).map((element) => {
    const props = objectProperties(element);
    const featureNode = unwrap(props.get("features"));
    const imageNode = unwrap(props.get("image"));
    return {
      id: literal(props.get("id")),
      name: literal(props.get("name")),
      description: literal(props.get("description")),
      category: literal(props.get("category")),
      features: featureNode && ts.isArrayLiteralExpression(featureNode) ? featureNode.elements.map(literal).filter(Boolean) : [],
      imageSource: imageNode && ts.isIdentifier(imageNode) ? imports.get(imageNode.text) : undefined,
    };
  });
  const categoryImagesNode = findVariable(sourceFile, "categoryImages");
  const categoryImages = new Map();
  if (categoryImagesNode && ts.isObjectLiteralExpression(categoryImagesNode)) {
    for (const property of categoryImagesNode.properties.filter(ts.isPropertyAssignment)) {
      const imageNode = unwrap(property.initializer);
      if (ts.isIdentifier(imageNode)) categoryImages.set(propertyName(property.name), imports.get(imageNode.text));
    }
  }
  return { products, categoryImages };
}

function parseCategories() {
  const sourceText = readFileSync("src/data/categoryContent.ts", "utf8");
  const sourceFile = ts.createSourceFile("categoryContent.ts", sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const contentNode = findVariable(sourceFile, "categoryContent");
  if (!contentNode || !ts.isObjectLiteralExpression(contentNode)) throw new Error("Unable to parse category content");
  return contentNode.properties.filter(ts.isPropertyAssignment).map((property) => {
    const props = objectProperties(property.initializer);
    const arrayValue = (name) => {
      const node = unwrap(props.get(name));
      return node && ts.isArrayLiteralExpression(node) ? node.elements.map(literal).filter(Boolean) : [];
    };
    return {
      category: propertyName(property.name),
      slug: literal(props.get("slug")),
      title: literal(props.get("title")),
      summary: literal(props.get("summary")),
      applications: arrayValue("applications"),
      selection: arrayValue("selection"),
    };
  });
}

const { products, categoryImages } = parseProducts();
const categories = parseCategories();
const manifestImage = (source) => source && manifest[source]?.file ? `${SITE}/${manifest[source].file}` : `${SITE}/og-default.png`;
const productImage = (product) => manifestImage(product.imageSource || categoryImages.get(product.category));

const fallbackStyle = `<style id="prerender-shell-style">.prerender-shell{max-width:1120px;margin:0 auto;padding:96px 24px 48px;font:16px/1.65 system-ui,sans-serif;color:#18394a}.prerender-shell h1{font-size:clamp(2rem,6vw,3.5rem);line-height:1.1}.prerender-shell h2{margin-top:2rem}.prerender-shell a{color:#087eaa}.prerender-shell ul{padding-left:1.25rem}.prerender-shell .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:16px}.prerender-shell article{padding:18px;border:1px solid #dce5ea;border-radius:8px}.prerender-shell img{max-width:440px;width:100%;height:auto}</style>`;
const stripDynamicMeta = (html) => html
  .replace(/\s*<title>[\s\S]*?<\/title>/i, "")
  .replace(/\s*<meta\s+(?:name|property)="(?:description|robots|og:[^"]+|twitter:[^"]+)"[^>]*>/gi, "")
  .replace(/\s*<link\s+rel="canonical"[^>]*>/gi, "");

function pageHtml({ title, description, path, image = `${SITE}/og-default.png`, type = "website", robots = "index,follow,max-image-preview:large", schemas = [], content }) {
  const canonical = `${SITE}${path === "/" ? "/" : path}`;
  const metadata = `
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="robots" content="${escapeHtml(robots)}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="${type}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${image}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${image}" />
    ${schemas.map((schema) => `<script type="application/ld+json">${safeJson(schema)}</script>`).join("\n    ")}
    ${fallbackStyle}`;
  const routeBaseHtml = path === "/"
    ? baseHtml
    : baseHtml.replace(/\s*<link rel="preload" as="image" href="\/hero-main\.webp"[^>]*>/i, "");
  return stripDynamicMeta(routeBaseHtml)
    .replace("</head>", `${metadata}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${content}</div>`);
}

function writeRoute(path, html) {
  const target = path === "/" ? join(DIST, "index.html") : join(DIST, `${path.replace(/^\//, "")}.html`);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, html);
}

const organization = {
  "@context": "https://schema.org", "@type": "Organization", name: "Bobbins India", legalName: "Sudhir Enterprise",
  url: SITE, logo: `${SITE}/apple-touch-icon.png`, foundingDate: "1995", email: "sales@bobbinsindia.com", telephone: "+912228473744",
  address: { "@type": "PostalAddress", streetAddress: "12 B, Chandivali, Off Saki Vihar Road", addressLocality: "Andheri East", addressRegion: "Maharashtra", postalCode: "400072", addressCountry: "IN" },
};
const breadcrumb = (items) => ({
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: `${SITE}${item.path}` })),
});

const categoryLinks = categories.map((category) => `<article><h2><a href="/products/category/${category.slug}">${escapeHtml(category.title)}</a></h2><p>${escapeHtml(category.summary)}</p></article>`).join("");
writeRoute("/", pageHtml({
  title: "Bobbins India | Precision Spools & Reels Manufacturer",
  description: "Precision industrial spools, bobbins and reels manufactured in Mumbai since 1995. Browse 100+ variants or request a custom mould and quote.",
  path: "/", schemas: [organization],
  content: `<main class="prerender-shell"><h1>Bobbins India — precision spools and reels</h1><p>Manufacturer of plastic reels, bobbins and spools for wire, cable, welding, textile and industrial applications since 1995.</p><p><a href="/products">Browse all products</a> or email <a href="mailto:sales@bobbinsindia.com">sales@bobbinsindia.com</a>.</p><section class="grid">${categoryLinks}</section></main>`,
}));

const allProductLinks = products.map((product) => `<li><a href="/products/${product.id}">${escapeHtml(product.name)}</a> — ${escapeHtml(product.description)}</li>`).join("");
writeRoute("/products", pageHtml({
  title: "Product Catalog | Bobbins India",
  description: `Browse ${products.length} industrial spools, bobbins and reels across ${categories.length} application families. Compare specifications or request a quote.`,
  path: "/products", schemas: [breadcrumb([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }])],
  content: `<main class="prerender-shell"><h1>Product catalog</h1><p>Compare dimensions and applications across ${products.length} products.</p><section class="grid">${categoryLinks}</section><h2>All product models</h2><ul>${allProductLinks}</ul></main>`,
}));

for (const category of categories) {
  const categoryProducts = products.filter((product) => product.category === category.category);
  const path = `/products/category/${category.slug}`;
  const list = categoryProducts.map((product) => `<article><h2><a href="/products/${product.id}">${escapeHtml(product.name)}</a></h2><p>${escapeHtml(product.description)}</p></article>`).join("");
  const schema = { "@context": "https://schema.org", "@type": "CollectionPage", name: category.title, description: category.summary, url: `${SITE}${path}`, mainEntity: { "@type": "ItemList", numberOfItems: categoryProducts.length, itemListElement: categoryProducts.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: product.name, url: `${SITE}/products/${product.id}` })) } };
  writeRoute(path, pageHtml({
    title: `${category.title} Manufacturer | Bobbins India`, description: `${category.summary} Compare ${categoryProducts.length} models and request a quotation.`, path,
    image: manifestImage(categoryImages.get(category.category)), schemas: [schema, breadcrumb([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: category.title, path }])],
    content: `<main class="prerender-shell"><p><a href="/products">Product catalog</a></p><h1>${escapeHtml(category.title)}</h1><p>${escapeHtml(category.summary)}</p><h2>Typical applications</h2><ul>${category.applications.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul><h2>Selection checklist</h2><ul>${category.selection.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul><section class="grid">${list}</section></main>`,
  }));
}

for (const product of products) {
  const category = categories.find((entry) => entry.category === product.category);
  const path = `/products/${product.id}`;
  const image = productImage(product);
  const faqs = [
    { question: `Which dimensions should I confirm for ${product.name}?`, answer: "Confirm flange diameter, barrel diameter, bore, traverse and overall width against the winding or pay-off equipment." },
    { question: `Can I request a quotation for ${product.name}?`, answer: "Yes. Include quantity, application, material preference and any dimensional changes with the enquiry." },
    { question: `How do I check whether ${product.name} suits my application?`, answer: "Compare the listed specifications with the equipment and send the wire or cable type, package weight and operating requirements for application matching." },
  ];
  const productSchema = { "@context": "https://schema.org", "@type": "Product", name: product.name, image, description: product.description, sku: product.id, category: product.category, url: `${SITE}${path}`, mainEntityOfPage: `${SITE}${path}`, brand: { "@type": "Brand", name: "Bobbins India" }, manufacturer: { "@type": "Organization", name: "Bobbins India", url: SITE }, additionalProperty: product.features.map((feature) => { const [name, ...value] = feature.split(":"); return { "@type": "PropertyValue", name: name.trim(), value: value.join(":").trim() || feature }; }) };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
  const crumbs = [{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, ...(category ? [{ name: category.title, path: `/products/category/${category.slug}` }] : []), { name: product.name, path }];
  writeRoute(path, pageHtml({
    title: `${product.name} Specifications | Bobbins India`, description: `${product.description} View dimensions and request a quote from Bobbins India.`, path, image, type: "product", schemas: [productSchema, breadcrumb(crumbs), faqSchema],
    content: `<main class="prerender-shell"><p><a href="/products/category/${category?.slug || ""}">${escapeHtml(category?.title || product.category)}</a></p><h1>${escapeHtml(product.name)}</h1><img src="${image}" alt="${escapeHtml(`${product.name} — ${product.category}`)}" width="640" height="480" /><p>${escapeHtml(product.description)}</p><h2>Specifications</h2><ul>${product.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join("")}</ul><h2>Application guidance</h2><p>${escapeHtml(category?.summary || "Share the application and dimensions for product matching.")}</p><h2>Buyer questions</h2>${faqs.map((faq) => `<article><h3>${escapeHtml(faq.question)}</h3><p>${escapeHtml(faq.answer)}</p></article>`).join("")}<p><a href="/?enquiry=${encodeURIComponent(product.name)}">Request a quotation</a></p></main>`,
  }));
}

writeRoute("/privacy", pageHtml({
  title: "Privacy Notice | Bobbins India", description: "How Bobbins India handles information submitted through its website and product enquiry forms.", path: "/privacy",
  content: `<main class="prerender-shell"><h1>Privacy Notice</h1><p>Information submitted through the website is used to review product requirements, respond to questions and prepare quotations. For privacy questions, email <a href="mailto:sales@bobbinsindia.com">sales@bobbinsindia.com</a>.</p></main>`,
}));
writeRoute("/compare", pageHtml({ title: "Compare Products | Bobbins India", description: "Compare selected Bobbins India products.", path: "/compare", robots: "noindex,nofollow", content: `<main class="prerender-shell"><h1>Compare products</h1><p><a href="/products">Choose products from the catalog</a>.</p></main>` }));
writeFileSync(join(DIST, "404.html"), pageHtml({ title: "Page Not Found | Bobbins India", description: "The requested page could not be found.", path: "/404", robots: "noindex,nofollow", content: `<main class="prerender-shell"><h1>Page not found</h1><p>The page may have moved. <a href="/products">Browse the product catalog</a> or <a href="/">return home</a>.</p></main>` }));

console.log(`Prerendered ${products.length + categories.length + 5} HTML routes.`);
