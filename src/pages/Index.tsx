import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductCard from "@/components/ProductCard";
import ProductDetail from "@/components/ProductDetail";
import ProductSearch from "@/components/ProductSearch";
import CategoryFilter from "@/components/CategoryFilter";
import { products, categories } from "@/data/products";
import { Product } from "@/types/product";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

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

        <ProductSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={setSelectedProduct}
            />
          ))}
        </div>

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
