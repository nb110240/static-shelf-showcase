import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Award, Globe } from "lucide-react";
import heroProducts from "@/assets/hero-products.png";

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-blue-900" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm">
              <Factory className="h-4 w-4" />
              Trusted Industrial Partner Since 1995
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
              Bobbins India
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-xl mb-8 leading-relaxed">
              Premier manufacturer of precision-engineered spools, bobbins, and reels for the cable and wire industry. Delivering quality solutions worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="gap-2 bg-white text-slate-900 hover:bg-white/90"
                onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Product Catalog
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                className="gap-2 bg-white text-slate-900 hover:bg-white/90"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More About Us
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
              <div className="flex flex-col items-center gap-1">
                <Factory className="h-5 w-5 text-blue-300" />
                <span className="font-semibold text-white text-sm">30+ Years</span>
                <span className="text-xs text-white/60">Experience</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Award className="h-5 w-5 text-blue-300" />
                <span className="font-semibold text-white text-sm">ISO Certified</span>
                <span className="text-xs text-white/60">Quality</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Globe className="h-5 w-5 text-blue-300" />
                <span className="font-semibold text-white text-sm">Global</span>
                <span className="text-xs text-white/60">Exports</span>
              </div>
            </div>
          </div>
          
          {/* Right image */}
          <div className="relative flex justify-center lg:justify-end">
            <img 
              src={heroProducts} 
              alt="Bobbins India - Various industrial spools and bobbins" 
              className="max-w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
        
        {/* Tagline */}
        <div className="text-center mt-12 pt-8 border-t border-white/10">
          <p className="text-xl md:text-2xl text-blue-300 font-medium italic">
            "We believe in Quality rather than Quantity"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
