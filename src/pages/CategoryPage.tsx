import { useState } from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import CategorySection from "@/components/CategorySection";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductDetail from "@/components/ProductDetail";
import { categoryContent, categoryFromSlug, categoryToSlug } from "@/data/categoryContent";
import { categoryImages, products } from "@/data/products";
import { SITE_URL } from "@/lib/constants";
import { Product } from "@/types/product";

const CategoryPage = () => {
  const { categorySlug = "" } = useParams<{ categorySlug: string }>();
  const category = categoryFromSlug(categorySlug);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (!category) return <Navigate to="/products" replace />;

  const content = categoryContent[category];
  const categoryProducts = products.filter((product) => product.category === category);
  const canonical = `${SITE_URL}/products/category/${categoryToSlug(category)}`;
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${content.title} | Bobbins India`,
    description: content.summary,
    url: canonical,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: categoryProducts.length,
      itemListElement: categoryProducts.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
        url: `${SITE_URL}/products/${product.id}`,
      })),
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
      { "@type": "ListItem", position: 3, name: content.title, item: canonical },
    ],
  };

  return (
    <div id="main-content" className="min-h-screen overflow-x-hidden bg-background">
      <Helmet>
        <title>{content.title} Manufacturer | Bobbins India</title>
        <meta name="description" content={`${content.summary} Compare ${categoryProducts.length} models and request a quotation.`} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${content.title} | Bobbins India`} />
        <meta property="og:description" content={content.summary} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={`${SITE_URL}${categoryImages[category]}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${content.title} | Bobbins India`} />
        <meta name="twitter:description" content={content.summary} />
        <meta name="twitter:image" content={`${SITE_URL}${categoryImages[category]}`} />
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <Header />

      <header className="relative overflow-hidden bg-[#081927] pb-16 pt-28 text-white">
        <div className="absolute inset-0 bg-blueprint-grid-dark opacity-70" />
        <div className="container relative">
          <Link to="/products" className="mb-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-white/70 hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Product catalog
          </Link>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">{categoryProducts.length} available models</p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(2rem,6vw,4rem)] leading-[1.05] tracking-wider">{content.title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">{content.summary}</p>
        </div>
      </header>

      <section className="border-b border-border bg-card py-12">
        <div className="container grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-xl tracking-wider text-foreground">Typical applications</h2>
            <ul className="mt-5 space-y-3">
              {content.applications.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl tracking-wider text-foreground">Selection checklist</h2>
            <ul className="mt-5 space-y-3">
              {content.selection.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <main className="py-16">
        <div className="container">
          <CategorySection
            categoryName={content.title}
            categorySlug={content.slug}
            products={categoryProducts}
            categoryImage={categoryImages[category]}
            onViewDetails={setSelectedProduct}
          />
        </div>
      </main>

      <ProductDetail product={selectedProduct} open={!!selectedProduct} onClose={() => setSelectedProduct(null)} />
      <EnquiryForm />
      <Footer />
    </div>
  );
};

export default CategoryPage;
