import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logoWordmark from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-main.png')" }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="container relative z-10 pt-24 pb-20">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

          {/* Eyebrow */}
          <div className="animate-fade-up flex items-center gap-4 mb-8">
            <div className="h-[2px] w-10 bg-[#178fbe]" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#178fbe]">
              Mumbai, India · Since 1995
            </span>
            <div className="h-[2px] w-10 bg-[#178fbe]" />
          </div>

          <img
            src={logoWordmark}
            alt="Bobbins India"
            className="animate-fade-up-delay-1 h-14 md:h-[4.5rem] w-auto object-contain mb-8"
            style={{ filter: "brightness(0) saturate(100%) invert(100%)" }}
          />

          <p className="animate-fade-up-delay-2 text-white/75 text-base md:text-lg leading-[1.7] max-w-xl mb-12">
            16 product categories. 100+ variants. Custom moulds developed in-house. The largest range of spools, bobbins and reels under one roof.
          </p>

          <div className="animate-fade-up-delay-3 mb-16">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-black text-[11px] font-semibold tracking-[0.2em] uppercase rounded-sm hover:bg-primary hover:text-white transition-all duration-300 group"
            >
              View Catalog
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Technical stats strip */}
          <div className="animate-fade-up-delay-4 flex items-center gap-6 md:gap-10">
            {[
              { val: "30+", lab: "Years" },
              { val: "100+", lab: "Variants" },
              { val: "ISO", lab: "Certified" },
            ].map(({ val, lab }, i) => (
              <div key={val} className="flex items-center gap-3">
                {i > 0 && <div className="w-px h-8 bg-white/20" />}
                <div className={i > 0 ? "pl-3" : ""}>
                  <div className="font-display text-lg md:text-xl text-primary leading-none">{val}</div>
                  <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/50 mt-1">{lab}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
