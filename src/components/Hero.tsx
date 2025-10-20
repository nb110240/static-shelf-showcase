import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Premium Tech Catalog
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Discover our curated collection of cutting-edge technology and accessories designed for the modern lifestyle
        </p>
        <Button 
          size="lg" 
          className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 shadow-lg"
        >
          Explore Collection
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
