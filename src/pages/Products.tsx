import { useState, useMemo, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import CategorySection from "@/components/CategorySection";
import ProductDetail from "@/components/ProductDetail";
import ProductSearch from "@/components/ProductSearch";
import CategoryFilter from "@/components/CategoryFilter";
import ProductFinder from "@/components/ProductFinder";
import { products, categories, categoryImages } from "@/data/products";
import { WHATSAPP_PHONE, SITE_URL } from "@/lib/constants";
import { Product } from "@/types/product";

const Products = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "All";

  const [finderOpen, setFinderOpen] = useState(false);
  const [selectedProduct, setSelectedProduct]     = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory]   = useState<string>(
    categories.includes(initialCategory) ? initialCategory : "All"
  );
  const [searchTerm, setSearchTerm]   = useState<string>("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && categories.includes(cat)) {
      setSelectedCategory(cat);
    } else if (!cat) {
      setSelectedCategory("All");
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      if (!searchTerm) return matchesCategory;
      const searchLower = searchTerm.toLowerCase().trim();
      if (activeFilter) {
        return matchesCategory && product.features.some(f =>
          f.toLowerCase().includes(activeFilter.toLowerCase()) && f.toLowerCase().includes(searchLower)
        );
      }
      return matchesCategory && (
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower) ||
        product.features.some(f => f.toLowerCase().includes(searchLower))
      );
    });
  }, [selectedCategory, searchTerm, activeFilter]);

  const productsByCategory = useMemo(() => {
    const grouped: Record<string, Product[]> = {};
    filteredProducts.forEach((p) => {
      if (!grouped[p.category]) grouped[p.category] = [];
      grouped[p.category].push(p);
    });
    return grouped;
  }, [filteredProducts]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>Product Catalog | Bobbins India</title>
        <link rel="canonical" href={`${SITE_URL}/products`} />
      </Helmet>
      <Header />

      {/* Page hero */}
      <div className="relative pt-32 pb-16 overflow-hidden" style={{ background: "linear-gradient(160deg, #07111a 0%, #0c2438 50%, #0e5a80 100%)" }}>
        {/* Blueprint grid overlay on dark */}
        <div className="absolute inset-0 bg-blueprint-grid-dark" />

        <div className="container relative">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-[2px] w-10 bg-[#178fbe]" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#178fbe]">
              Full Catalogue
            </span>
          </div>
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-none tracking-wider text-white mb-4">
            Product Catalog
          </h1>
          <p className="text-white/40 text-sm max-w-md leading-[1.7]" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
            {products.length} products across {categories.length} categories. Industrial spools, bobbins and reels manufactured to international standards.
          </p>
        </div>

      </div>

      {/* Catalog */}
      <section id="catalog" className="py-16">
        <div className="container">
          {/* Collapsible Product Finder */}
          <div className="mb-8">
            <button
              onClick={() => setFinderOpen(!finderOpen)}
              className="flex items-center gap-2 text-[11px] font-medium tracking-[0.14em] uppercase text-primary hover:text-primary/80 transition-colors py-2"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              <HelpCircle className="h-3.5 w-3.5" />
              Need help finding the right reel?
              {finderOpen ? (
                <ChevronUp className="h-3.5 w-3.5" />
              ) : (
                <ChevronDown className="h-3.5 w-3.5" />
              )}
            </button>
            {finderOpen && (
              <div className="mt-2 -mx-4 sm:-mx-6 lg:-mx-8">
                <ProductFinder />
              </div>
            )}
          </div>

          <ProductSearch
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            products={products}
          />

          {Object.entries(productsByCategory).map(([category, categoryProducts]) => (
            <CategorySection
              key={category}
              categoryName={category}
              products={categoryProducts}
              categoryImage={categoryImages[category] || categoryProducts[0].image}
              onViewDetails={setSelectedProduct}
            />
          ))}

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 max-w-sm mx-auto">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.2em] mb-4">
                No products found
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Try a different search term or browse all categories.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => { setSearchTerm(""); setActiveFilter(null); setSelectedCategory("All"); }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[11px] font-semibold tracking-[0.16em] uppercase rounded-sm bg-foreground text-background hover:bg-primary transition-all duration-300"
                >
                  View All Products
                </button>
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=Hi%2C%20I%27m%20looking%20for%20a%20specific%20product.%20Can%20you%20help%3F`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[11px] font-semibold tracking-[0.16em] uppercase rounded-sm bg-[#25D366] text-white hover:bg-[#1ebe57] transition-all duration-300"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <ProductDetail
        product={selectedProduct}
        open={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <EnquiryForm />
      <Footer />
    </div>
  );
};

export default Products;
