import { CheckCircle2 } from "lucide-react";
import productCollage from "@/assets/home-studio.webp";

const highlights = [
  "Largest range of spools under one roof",
  "In-house tool design & mould shop for rapid custom development",
  "Minimal lead times with maintained inventory",
  "Exports to clients across India and worldwide",
];

const About = () => {
  return (
    <section id="about" className="relative py-28">
      <div className="absolute inset-0 bg-blueprint-grid" />

      <div className="container relative">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-5">
          <div className="h-[2px] w-10 bg-[#178fbe]" />
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#178fbe]">
            Who We Are
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-[clamp(1.4rem,3vw,2.2rem)] leading-[1.2] tracking-wider text-foreground mb-8">
              PIONEER IN<br />
              <span className="text-primary">SPOOL MANUFACTURING</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-[1.8] mb-5">
              Bobbinsindia is a pioneer company in the field of spool manufacturing. Our spools are trusted by cable and wire manufacturers globally. We maintain the largest range under one roof to minimise lead times and maximise reliability.
            </p>
            <p className="text-muted-foreground text-sm leading-[1.8] mb-10">
              We operate our own tool design and mould shop — enabling rapid development of custom reels tailored to your exact specifications. This in-house capability is what sets us apart from every other spool manufacturer.
            </p>

            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground/75">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Product range image */}
          <div className="relative rounded-lg overflow-hidden border border-border bg-white">
            <img
              src={productCollage}
              alt="Bobbins India product range — spools, bobbins and reels"
              loading="lazy"
              className="w-full h-full object-contain p-8 min-h-[360px]"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent pt-12 pb-5 px-6 text-center">
              <span className="font-display text-2xl text-foreground tracking-wider">30+</span>
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em] ml-2">Years of Expertise</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
