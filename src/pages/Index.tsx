import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CategorySection from "@/components/CategorySection";
import ProductDetail from "@/components/ProductDetail";
import ProductSearch from "@/components/ProductSearch";
import CategoryFilter from "@/components/CategoryFilter";
import { products, categories, categoryImages } from "@/data/products";
import { Product } from "@/types/product";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      
      const searchLower = searchTerm.toLowerCase().trim();
      
      // If no search term, show all products in category
      if (searchTerm === "") {
        return matchesCategory;
      }
      
      // If a specific filter is active, search only in features matching that field
      if (activeFilter) {
        const matchesFilteredSearch = product.features.some(feature => {
          const featureLower = feature.toLowerCase();
          return featureLower.includes(activeFilter.toLowerCase()) && 
                 featureLower.includes(searchLower);
        });
        return matchesCategory && matchesFilteredSearch;
      }
      
      // Otherwise, search in name, description, category, and all features
      const matchesSearch = 
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower) ||
        product.features.some(feature => feature.toLowerCase().includes(searchLower));
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm, activeFilter]);

  // Group filtered products by category
  const productsByCategory = useMemo(() => {
    const grouped: Record<string, Product[]> = {};
    filteredProducts.forEach((product) => {
      if (!grouped[product.category]) {
        grouped[product.category] = [];
      }
      grouped[product.category].push(product);
    });
    return grouped;
  }, [filteredProducts]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      
      <section id="catalog" className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground uppercase tracking-tight">
            Our Product Range
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Comprehensive range of industrial spools, bobbins and reels for cable, wire and fiber applications. All products manufactured to international standards.
          </p>
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
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </section>
      
      <ProductDetail
        product={selectedProduct}
        open={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default Index;
