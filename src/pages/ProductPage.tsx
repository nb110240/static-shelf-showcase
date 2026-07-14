import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Check, Mail, ArrowLeft, Package, GitCompareArrows, Ruler, CircleDot, Boxes, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/constants";
import { products } from "@/data/products";
import { Product } from "@/types/product";
import { useCompare } from "@/hooks/useCompare";
import { toast } from "sonner";
import { categoryContent, categoryToSlug } from "@/data/categoryContent";
import { track } from "@vercel/analytics";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCompare, removeFromCompare, isInCompare } = useCompare();

  const product = products.find((p) => p.id === productId);

  useEffect(() => {
    if (!product) {
      navigate("/products", { replace: true });
    }
  }, [product, navigate]);

  if (!product) return null;

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const productUrl = `${SITE_URL}/products/${product.id}`;
  const productImage = product.image.startsWith("http") ? product.image : `${SITE_URL}${product.image}`;
  const categoryInfo = categoryContent[product.category];
  const productFaqs = [
    {
      question: `Which dimensions should I confirm for ${product.name}?`,
      answer: `Confirm the flange diameter, barrel diameter, bore, traverse and overall width shown on this page against your winding or pay-off equipment. Share any shaft, drive or load constraints with the enquiry.`,
    },
    {
      question: `Can I request a quotation for ${product.name}?`,
      answer: `Yes. Include the required quantity, application, material preference and any dimensional changes so the Bobbins India team can review the correct configuration.`,
    },
    {
      question: `How do I check whether ${product.name} suits my application?`,
      answer: `Compare the listed specifications with your equipment and winding package. For application matching, send the wire or cable type, target package weight and operating requirements with your enquiry.`,
    },
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: productImage,
    description: product.description,
    sku: product.id,
    category: product.category,
    url: productUrl,
    mainEntityOfPage: productUrl,
    brand: { "@type": "Brand", name: "Bobbins India" },
    manufacturer: { "@type": "Organization", name: "Bobbins India", url: SITE_URL },
    additionalProperty: product.features.map((feature) => {
      const [name, ...value] = feature.split(":");
      return { "@type": "PropertyValue", name: name.trim(), value: value.join(":").trim() || feature };
    }),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
      { "@type": "ListItem", position: 3, name: product.category, item: `${SITE_URL}/products/category/${categoryToSlug(product.category)}` },
      { "@type": "ListItem", position: 4, name: product.name, item: productUrl },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: productFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const handleEnquire = () => {
    track("quote_intent", { product: product.name, source: "product_page" });
    navigate(`/?enquiry=${encodeURIComponent(product.name)}`);
    setTimeout(() => {
      document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  const handleSampleRequest = () => {
    track("sample_intent", { product: product.name, source: "product_page" });
    navigate(`/?enquiry=${encodeURIComponent(`Sample Request: ${product.name}`)}`);
    setTimeout(() => {
      document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  return (
    <div id="main-content" className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>{product.name} Specifications | Bobbins India</title>
        <meta name="description" content={`${product.description} View specifications and request a quote from Bobbins India.`} />
        <link rel="canonical" href={productUrl} />
        <meta property="og:type" content="product" />
        <meta property="og:title" content={`${product.name} | Bobbins India`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:url" content={productUrl} />
        <meta property="og:image" content={productImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${product.name} | Bobbins India`} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={productImage} />
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Header />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4">
        <div className="container">
          <div className="flex items-center gap-2 text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            <Link
              to="/products"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="h-3 w-3" />
              Products
            </Link>
            <span className="text-muted-foreground/40">/</span>
            <Link
              to={`/products/category/${categoryToSlug(product.category)}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {product.category}
            </Link>
            <span className="text-muted-foreground/40">/</span>
            <span className="text-foreground/60 truncate max-w-[180px]">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product detail */}
      <section className="pb-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
            {/* Left: Image */}
            <div className="aspect-square bg-[#f3f5f7] rounded-lg overflow-hidden border border-border/50">
              <img
                src={product.image}
                alt={`${product.name} — ${product.category}`}
                className="w-full h-full object-contain p-6"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement?.classList.add('bg-muted');
                }}
              />
            </div>

            {/* Right: Info */}
            <div className="flex flex-col justify-center">
              {/* Category eyebrow */}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-6" style={{ background: "#178fbe" }} />
                <span
                  className="text-[11px] tracking-[0.3em] uppercase"
                  style={{ color: "#178fbe", fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  {product.category}
                </span>
              </div>

              {/* Product name */}
              <h1
                className="mb-4"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  lineHeight: 1.1,
                  color: "#0d3548",
                  letterSpacing: "0.03em",
                  fontFamily: "'Syne', system-ui, sans-serif",
                  fontWeight: 800,
                }}
              >
                {product.name}
              </h1>

              {/* Description */}
              <p
                className="text-sm leading-relaxed text-muted-foreground mb-6 max-w-md"
                style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
              >
                {product.description}
              </p>

              {/* Features / Specs */}
              <div className="mb-8">
                <h3
                  className="text-[11px] tracking-[0.2em] uppercase mb-3"
                  style={{ color: "rgba(0,80,120,0.72)", fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  Specifications
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check
                        className="h-3.5 w-3.5 mt-0.5 shrink-0"
                        style={{ color: "#178fbe" }}
                      />
                      <span
                        className="text-sm text-foreground/75"
                        style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6 rounded-lg border border-primary/15 bg-primary/[0.04] p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">For an accurate quotation</p>
                <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                  {[
                    { icon: Ruler, label: "Dimensions" },
                    { icon: CircleDot, label: "Application" },
                    { icon: Boxes, label: "Quantity" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="rounded-md border border-border/70 bg-card p-2.5">
                      <Icon className="mx-auto mb-1.5 h-4 w-4 text-primary" aria-hidden="true" />
                      <span className="text-[11px] text-muted-foreground">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 w-full sm:w-auto">
                <button
                  onClick={handleEnquire}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[11px] font-semibold tracking-[0.16em] uppercase rounded-sm bg-[#178fbe] text-white hover:bg-[#136fa0] transition-all duration-300 w-full cursor-pointer"
                >
                  <Mail className="h-4 w-4" />
                  Request a Quote
                </button>
                <button
                  onClick={handleSampleRequest}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[11px] font-semibold tracking-[0.16em] uppercase rounded-sm border border-primary/20 text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 w-full cursor-pointer"
                >
                  <Package className="h-4 w-4" />
                  Ask About a Sample
                </button>
                <button
                  onClick={() => {
                    if (isInCompare(product.id)) {
                      removeFromCompare(product.id);
                    } else {
                      const added = addToCompare(product.id);
                      if (!added) {
                        toast("Maximum 3 products for comparison", {
                          description: "Remove a product before adding another.",
                        });
                      }
                    }
                  }}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[11px] font-semibold tracking-[0.16em] uppercase rounded-sm transition-all duration-300 w-full ${
                    isInCompare(product.id)
                      ? "border-2 border-[#178fbe] text-[#178fbe] bg-[#178fbe]/5"
                      : "border border-border text-muted-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {isInCompare(product.id) ? (
                    <><Check className="h-4 w-4" /> Added to Compare</>
                  ) : (
                    <><GitCompareArrows className="h-4 w-4" /> Add to Compare</>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {categoryInfo && (
        <section className="border-t border-border/50 bg-card py-14">
          <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Application guidance</p>
              <h2 className="mt-3 font-display text-2xl tracking-wider text-foreground">Selecting {product.name}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">{categoryInfo.summary}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {categoryInfo.applications.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/75">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <h2 className="font-display text-xl tracking-wider text-foreground">Before requesting a quote</h2>
              <ul className="mt-5 space-y-3">
                {categoryInfo.selection.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-border/50 py-14">
        <div className="container max-w-4xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Buyer questions</p>
          <h2 className="mt-3 font-display text-2xl tracking-wider text-foreground">Frequently asked questions</h2>
          <div className="mt-7 divide-y divide-border rounded-lg border border-border bg-card">
            {productFaqs.map((faq) => (
              <article key={faq.question} className="p-6">
                <h3 className="text-base font-semibold text-foreground">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 border-t border-border/50">
          <div className="container">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-6" style={{ background: "#178fbe" }} />
              <span
                className="text-[11px] tracking-[0.3em] uppercase"
                style={{ color: "#178fbe", fontFamily: "'IBM Plex Mono', monospace" }}
              >
                More in {product.category}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.id}
                  to={`/products/${rp.id}`}
                  className="rounded-lg border border-border bg-card hover:border-primary/25 hover:shadow-md transition-all duration-300 overflow-hidden group"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#f3f5f7]">
                    <img
                      src={rp.image}
                      alt={rp.name}
                      loading="lazy"
                      className="w-full h-full object-contain object-center p-2 group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement?.classList.add('bg-muted');
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-foreground/85 text-sm mb-1 truncate">
                      {rp.name}
                    </h4>
                    <p className="text-muted-foreground text-xs line-clamp-1">
                      {rp.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ProductPage;
