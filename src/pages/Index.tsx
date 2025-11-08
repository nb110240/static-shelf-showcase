import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductCard from "@/components/ProductCard";
import ProductDetail from "@/components/ProductDetail";
import { products } from "@/data/products";
import { Product } from "@/types/product";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={setSelectedProduct}
            />
          ))}
        </div>
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
