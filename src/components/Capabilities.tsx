import { Boxes, DraftingCompass, Factory, Globe2, ArrowRight } from "lucide-react";

const capabilities = [
  {
    icon: Boxes,
    title: "Portfolio Depth",
    text: "More than 100 standard variants across cable, welding wire, EDM, stitching wire, conductor and specialty winding applications.",
  },
  {
    icon: DraftingCompass,
    title: "Custom Development",
    text: "In-house tool design and mould development for applications that need non-standard geometry, material or performance.",
  },
  {
    icon: Factory,
    title: "Application Matching",
    text: "Product selection guided by flange, barrel, bore, traverse, load and winding requirements—not just a catalog reference.",
  },
  {
    icon: Globe2,
    title: "Export Enquiries",
    text: "Direct support for international buyers seeking product selection, commercial quotations and custom reel discussions.",
  },
];

const quoteSpecs = ["Flange diameter", "Barrel diameter", "Bore size", "Traverse", "Material", "Quantity"];

const Capabilities = () => (
  <section id="capabilities" className="relative overflow-hidden bg-[#081927] py-24 text-white">
    <div className="absolute inset-0 bg-blueprint-grid-dark opacity-70" />
    <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

    <div className="container relative">
      <div className="mb-12 max-w-3xl">
        <div className="mb-5 flex items-center gap-4">
          <div className="h-[2px] w-10 bg-primary" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Manufacturing Capability</span>
        </div>
        <h2 className="font-display text-[clamp(1.45rem,7vw,3rem)] leading-[1.12] tracking-wider">
          ENGINEERED AROUND YOUR<br />
          <span className="text-primary">WINDING PROCESS</span>
        </h2>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60">
          Start with a standard reel or bring us a specific winding requirement. Our catalog and in-house development capability support both paths.
        </p>
      </div>

      <div className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
        {capabilities.map(({ icon: Icon, title, text }, index) => (
          <article key={title} className="group bg-[#0b2030] p-7 transition-colors hover:bg-[#0d293d]">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-primary/30 bg-primary/10">
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <span className="font-mono text-[10px] tracking-[0.18em] text-white/25">0{index + 1}</span>
            </div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-white">{title}</h3>
            <p className="text-sm leading-6 text-white/50">{text}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-6 rounded-lg border border-white/10 bg-white/[0.04] p-6 lg:grid-cols-[1fr_auto] lg:items-center lg:p-8">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">For a faster recommendation</p>
          <h3 className="mt-2 text-lg font-semibold text-white">Send the key dimensions with your enquiry</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {quoteSpecs.map((spec) => (
              <span key={spec} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-white/60">
                {spec}
              </span>
            ))}
          </div>
        </div>
        <a href="#enquiry-form" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-sm bg-primary px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#136fa0]">
          Discuss a Requirement <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
);

export default Capabilities;
