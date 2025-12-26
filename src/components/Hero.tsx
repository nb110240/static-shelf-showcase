import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Award, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-primary/5 via-background to-background overflow-hidden">
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <Factory className="h-4 w-4" />
            Trusted Industrial Partner Since 1995
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight">
            Bobbins India
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Premier manufacturer of precision-engineered spools, bobbins, and reels for the cable and wire industry. Delivering quality solutions worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="gap-2"
              onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Product Catalog
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More About Us
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border">
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-full bg-primary/10">
                <Factory className="h-5 w-5 text-primary" />
              </div>
              <span className="font-semibold text-foreground">30+ Years Experience</span>
              <span className="text-sm text-muted-foreground">Industry expertise</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-full bg-primary/10">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <span className="font-semibold text-foreground">ISO Certified</span>
              <span className="text-sm text-muted-foreground">Quality assured</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-full bg-primary/10">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <span className="font-semibold text-foreground">Global Exports</span>
              <span className="text-sm text-muted-foreground">Worldwide delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
