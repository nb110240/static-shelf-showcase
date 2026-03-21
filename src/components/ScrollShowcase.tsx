import { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import imgSuperTough    from "@/assets/super-tough-1.jpg";
import imgJumbo         from "@/assets/jumbo-reels-studio.jpg";
import imgCableDelivery from "@/assets/cable-delivery-reels.webp";
import imgIsi           from "@/assets/isi-reels-studio.jpg";
import imgDin           from "@/assets/cylindrical-reels-studio.jpg";
import imgComposite     from "@/assets/composite/pf-tc-400.jpg";
import imgTapered       from "@/assets/tapered-bobbins-studio.jpg";
import imgAluminum      from "@/assets/aluminum-wire-new.jpg";
import imgBiconical     from "@/assets/biconical-new.jpg";
import imgMonofilament  from "@/assets/monofilament-new.jpg";
import imgMisc          from "@/assets/misc-reels-studio.jpg";
import imgSteel         from "@/assets/steel-tinsel-studio.jpg";
import imgWelding       from "@/assets/welding-wire-studio.jpg";
import imgEdm           from "@/assets/edm-wire-studio.jpg";
import imgStitching     from "@/assets/stitching-wire-studio.jpg";
import imgCopper        from "@/assets/copper-conductor-studio.jpg";

// One representative frame per product category — order matches PHASES
const FRAME_SRCS = [
  imgSuperTough,
  imgJumbo,
  imgCableDelivery,
  imgIsi,
  imgDin,
  imgComposite,
  imgTapered,
  imgAluminum,
  imgBiconical,
  imgMonofilament,
  imgMisc,
  imgSteel,
  imgWelding,
  imgEdm,
  imgStitching,
  imgCopper,
];
const TOTAL = FRAME_SRCS.length; // 16

// 16 phases with equal 1/16 scroll segments
// phase i active when progress ∈ [i/16, (i+1)/16)
const PHASES = [
  { title: "Super Tough\nReels",      sub: "High-strength flanged plastic reels for demanding cable applications.",              category: "Super Tough"     },
  { title: "Jumbo\nReels",            sub: "Large-capacity industrial reels up to 1600 mm flange diameter.",                    category: "Jumbo Reels"     },
  { title: "Cable Delivery\nReels",   sub: "Sturdy steel and plastic reels engineered for cable & wire delivery.",              category: "Cable Delivery"  },
  { title: "ISI\nReels",              sub: "Reels manufactured to Indian Standards Institution specifications.",                category: "ISI Reels"       },
  { title: "Cylindrical Reels\nBobbins",      sub: "Full Cylindrical Reels range — flanged bobbins for winding applications.",                 category: "Cylindrical Reels"       },
  { title: "Composite\nReels",        sub: "Durable composite construction — lightweight, corrosion-resistant, long life.",     category: "Composite Reels" },
  { title: "Tapered\nBobbins",        sub: "DIN 46383 / IEC 264-3 compliant taper reels in PP, ABS and PS.",                  category: "Tapered Bobbins" },
  { title: "Aluminum\nWire Reels",    sub: "Precision aluminium reels for EDM wire, fine wire and specialty applications.",     category: "Aluminum Wire"   },
  { title: "Biconical\nBobbins",      sub: "Biconical winding bobbins for precision cross-wound packages.",                    category: "Biconical"       },
  { title: "Monofilament\nReels",     sub: "Purpose-built reels for monofilament and fine-wire winding.",                      category: "Monofilament"    },
  { title: "Misc\nReels",             sub: "Specialty and miscellaneous reel formats manufactured to custom specifications.",   category: "Misc Reels"      },
  { title: "Steel &\nTinsel Wire",    sub: "Reels and bobbins designed for steel wire and tinsel winding.",                    category: "Steel & Tinsel"  },
  { title: "Welding\nWire Reels",     sub: "Robust plastic reels engineered for MIG welding wire storage and dispensing.",     category: "Welding Wire"    },
  { title: "EDM\nWire Reels",         sub: "High-precision reels for electrical discharge machining wire.",                    category: "EDM Wire"        },
  { title: "Stitching\nWire Reels",   sub: "Compact bobbins and reels for stitching and binding wire applications.",           category: "Stitching Wire"  },
  { title: "Copper Conductor\nReels", sub: "Heavy-duty reels for bare and insulated copper conductor winding.",                category: "Copper Conductor"},
];

function drawCover(ctx: CanvasRenderingContext2D, img: HTMLImageElement, w: number, h: number) {
  const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
  const sw = img.naturalWidth * scale;
  const sh = img.naturalHeight * scale;
  ctx.drawImage(img, (w - sw) / 2, (h - sh) / 2, sw, sh);
}

function CornerTick({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const horiz = pos.endsWith("l")   ? { left: 0 }   : { right: 0 };
  const vert  = pos.startsWith("t") ? { top: 0 }    : { bottom: 0 };
  return (
    <div
      className="absolute w-5 h-5"
      style={{
        ...horiz, ...vert,
        borderTop:    pos.startsWith("t") ? "2px solid #178fbe" : "none",
        borderBottom: pos.startsWith("b") ? "2px solid #178fbe" : "none",
        borderLeft:   pos.endsWith("l")   ? "2px solid #178fbe" : "none",
        borderRight:  pos.endsWith("r")   ? "2px solid #178fbe" : "none",
      }}
    />
  );
}

function MobileCategoryGrid() {
  return (
    <div className="md:hidden py-12 px-4" style={{ background: "#f0f4f8" }}>
      {/* Eyebrow */}
      <div className="flex items-center gap-4 mb-6 px-2">
        <div className="h-[2px] w-8" style={{ background: "#178fbe" }} />
        <span
          className="text-[10px] tracking-[0.3em] uppercase"
          style={{ color: "#178fbe", fontFamily: "'IBM Plex Mono', monospace" }}
        >
          Product Showcase
        </span>
      </div>
      <h2
        className="px-2 mb-8"
        style={{
          fontSize: "1.75rem",
          lineHeight: 1.1,
          color: "#0d3548",
          letterSpacing: "0.04em",
          fontFamily: "'Syne', system-ui, sans-serif",
          fontWeight: 800,
          textTransform: "uppercase",
        }}
      >
        Browse by Category
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {PHASES.map((phase, i) => (
          <Link
            key={phase.category}
            to={`/products?category=${encodeURIComponent(phase.category)}`}
            className="relative rounded-lg border border-black/[0.06] overflow-hidden group"
          >
            <div className="aspect-[4/3] bg-[#e8ecf0]">
              <img
                src={FRAME_SRCS[i]}
                alt={phase.category}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Text overlay at bottom */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-10 pb-3 px-3">
              <span
                className="block text-[9px] tracking-[0.2em] uppercase mb-0.5"
                style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#178fbe" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="block text-sm text-white leading-tight"
                style={{ fontFamily: "'Syne', system-ui, sans-serif", fontWeight: 700 }}
              >
                {phase.category}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function ScrollShowcase() {
  const containerRef   = useRef<HTMLDivElement>(null);
  const canvasRef      = useRef<HTMLCanvasElement>(null);
  const framesRef      = useRef<HTMLImageElement[]>([]);
  const progressRef    = useRef(0);
  const drawnRef       = useRef(-1);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const scrollHintRef  = useRef<HTMLDivElement>(null);
  const counterRef     = useRef<HTMLSpanElement>(null);

  const [loaded, setLoaded]           = useState(false);
  const [loadPct, setLoadPct]         = useState(0);
  const [activePhase, setActivePhase] = useState<number>(0);
  const [isDesktop, setIsDesktop]     = useState(window.matchMedia("(min-width: 768px)").matches);

  const navigate = useNavigate();

  // ── Track desktop media query ──────────────────────────────────────────
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // ── Preload ──────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!isDesktop) return;
    let done = 0;
    framesRef.current = FRAME_SRCS.map((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        done++;
        setLoadPct(Math.round((done / TOTAL) * 100));
        if (done === TOTAL) setLoaded(true);
      };
      img.onerror = () => {
        done++;
        setLoadPct(Math.round((done / TOTAL) * 100));
        if (done === TOTAL) setLoaded(true);
      };
      return img;
    });
  }, [isDesktop]);

  // ── Scroll + rAF ─────────────────────────────────────────────────────────
  useEffect(() => {
    if (!isDesktop || !loaded) return;
    const canvas = canvasRef.current!;
    const ctx    = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      drawnRef.current = -1;
    };
    resize();
    window.addEventListener("resize", resize);

    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect     = el.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
      progressRef.current = progress;

      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress * 100}%`;
      }
      if (scrollHintRef.current) {
        scrollHintRef.current.style.opacity = progress < 0.02 ? "1" : "0";
      }

      // Phase index: divide [0,1] into TOTAL equal segments
      const phase = Math.min(Math.floor(progress * TOTAL), TOTAL - 1);
      setActivePhase(phase);

      if (counterRef.current) {
        counterRef.current.textContent = String(phase + 1).padStart(2, "0");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    let raf: number;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const progress = progressRef.current;
      if (Math.abs(progress - drawnRef.current) < 0.001) return;
      drawnRef.current = progress;

      const w = canvas.width;
      const h = canvas.height;
      const scaled = progress * (TOTAL - 1);
      const idxA   = Math.min(Math.floor(scaled), TOTAL - 1);
      const idxB   = Math.min(idxA + 1, TOTAL - 1);
      const blend  = scaled - idxA;

      ctx.clearRect(0, 0, w, h);
      ctx.globalAlpha = 1;
      drawCover(ctx, framesRef.current[idxA], w, h);
      if (blend > 0 && idxB !== idxA) {
        ctx.globalAlpha = blend;
        drawCover(ctx, framesRef.current[idxB], w, h);
      }
      ctx.globalAlpha = 1;

      canvas.style.transform = `rotate(${-4 + progress * 8}deg) scale(1.06)`;
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
    };
  }, [isDesktop, loaded]);

  const scrollToPhase = (i: number) => {
    const el = containerRef.current;
    if (!el) return;
    // centre of phase i
    const center = (i + 0.5) / TOTAL;
    window.scrollTo({ top: el.offsetTop + center * (el.scrollHeight - window.innerHeight), behavior: "smooth" });
  };

  const goToProducts = (category: string) => {
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

  return (
    <>
    <MobileCategoryGrid />
    <div ref={containerRef} style={{ height: "700vh" }} className="relative hidden md:block">

      {/* ── Sticky viewport ──────────────────────────────────────── */}
      <div className="sticky top-0 h-screen overflow-hidden" style={{ background: "#f0f4f8" }}>

        {/* Top progress bar */}
        <div className="absolute top-0 left-0 right-0 h-px z-30" style={{ background: "rgba(0,80,120,0.12)" }}>
          <div ref={progressBarRef} style={{ width: "0%", height: "100%", background: "#178fbe" }} />
        </div>

        {/* Loading overlay */}
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-40" style={{ background: "#f0f4f8" }}>
            <div className="w-48 h-px overflow-hidden mb-4" style={{ background: "rgba(0,80,120,0.12)" }}>
              <div className="h-full transition-all duration-300" style={{ width: `${loadPct}%`, background: "#178fbe" }} />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "rgba(0,80,120,0.45)", fontFamily: "'IBM Plex Mono', 'Outfit', monospace" }}>
              {loadPct}%
            </p>
          </div>
        )}

        {loaded && (
          <div className="absolute inset-0 flex flex-col md:flex-row items-center px-6 md:px-16 lg:px-24 z-10">

            {/* ── Left: editorial text ────────────────────────── */}
            <div className="relative flex flex-col justify-center w-full md:w-2/5 lg:w-[38%] pt-20 md:pt-0 pr-0 md:pr-12 shrink-0 z-20">

              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-8" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                <div className="h-[2px] w-8" style={{ background: "#178fbe" }} />
                <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "#178fbe" }}>
                  Product Showcase
                </span>
              </div>

              {/* Counter */}
              <div className="flex items-baseline gap-2 mb-6" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                <span
                  ref={counterRef}
                  className="leading-none"
                  style={{ fontSize: "clamp(2.5rem, 8vw, 7.5rem)", fontWeight: 300, color: "#178fbe", letterSpacing: "-0.02em", fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  01
                </span>
                <span className="text-xl" style={{ color: "rgba(0,80,120,0.35)", fontWeight: 300 }}>
                  / {String(TOTAL).padStart(2, "0")}
                </span>
              </div>

              {/* Phase text */}
              <div className="relative" style={{ height: "clamp(8rem, 14vw, 11rem)" }}>
                {PHASES.map((phase, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 transition-all duration-500"
                    style={{
                      opacity:       activePhase === i ? 1 : 0,
                      transform:     activePhase === i ? "translateY(0)" : "translateY(14px)",
                      pointerEvents: activePhase === i ? "auto" : "none",
                    }}
                  >
                    <h2
                      className="whitespace-pre-line mb-4"
                      style={{ fontSize: "clamp(1.6rem, 4vw, 3rem)", lineHeight: 1.05, color: "#0d3548", letterSpacing: "0.04em", fontFamily: "'Syne', system-ui, sans-serif", fontWeight: 800, textTransform: "uppercase" }}
                    >
                      {phase.title}
                    </h2>
                    <p className="text-sm leading-relaxed mb-5 max-w-xs" style={{ color: "rgba(0,80,120,0.55)", fontWeight: 400, fontFamily: "'Outfit', system-ui, sans-serif" }}>
                      {phase.sub}
                    </p>
                    <button
                      onClick={() => goToProducts(phase.category)}
                      className="inline-flex items-center gap-2 py-3 text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-70"
                      style={{ color: "#178fbe", fontFamily: "'IBM Plex Mono', monospace" }}
                    >
                      View Collection
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                        <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              {/* Vertical bar — left edge */}
              <div
                className="hidden md:block absolute left-[-2.5rem] lg:left-[-4rem] top-[10%] bottom-[10%] w-px"
                style={{ background: "rgba(0,80,120,0.12)" }}
              >
                <div id="vert-bar-fill" style={{ background: "#178fbe", height: "0%", width: "100%" }} />
              </div>
            </div>

            {/* ── Right: canvas ───────────────────────────────── */}
            <div className="relative flex-1 flex items-center justify-center md:justify-end mt-4 md:mt-0">
              <div
                className="relative"
                style={{ width: "clamp(180px, 45vmin, 520px)", height: "clamp(180px, 45vmin, 520px)" }}
              >
                <CornerTick pos="tl" />
                <CornerTick pos="tr" />
                <CornerTick pos="bl" />
                <CornerTick pos="br" />

                <div
                  className="absolute -top-6 right-0 text-[9px] tracking-[0.2em] uppercase"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", color: "rgba(0,80,120,0.35)" }}
                >
                  {String(activePhase + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
                </div>

                <div
                  className="absolute -bottom-6 left-0 text-[9px] tracking-[0.2em] uppercase transition-all duration-500"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", color: "rgba(23,143,190,0.6)" }}
                >
                  {PHASES[activePhase].category}
                </div>

                <canvas
                  ref={canvasRef}
                  className="absolute inset-3"
                  style={{
                    width: "calc(100% - 1.5rem)",
                    height: "calc(100% - 1.5rem)",
                    maskImage: "radial-gradient(ellipse 80% 78% at 50% 50%, black 42%, transparent 78%)",
                    WebkitMaskImage: "radial-gradient(ellipse 80% 78% at 50% 50%, black 42%, transparent 78%)",
                  }}
                />

                <div
                  className="absolute inset-3 pointer-events-none"
                  style={{ boxShadow: "inset 0 0 40px 12px #f0f4f8" }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Dot navigation */}
        {loaded && (
          <div className="absolute right-5 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2">
            {PHASES.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to ${PHASES[i].title.replace("\n", " ")}`}
                onClick={() => scrollToPhase(i)}
                style={{ width: "18px", height: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <div
                  className="rounded-full transition-all duration-300"
                  style={{
                    width:      activePhase === i ? "7px" : "3px",
                    height:     activePhase === i ? "7px" : "3px",
                    background: activePhase === i ? "#178fbe" : "rgba(0,80,120,0.2)",
                  }}
                />
              </button>
            ))}
          </div>
        )}

        {/* Scroll hint */}
        {loaded && (
          <div
            ref={scrollHintRef}
            className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 transition-opacity duration-300"
            style={{ opacity: 1 }}
          >
            <span className="text-[9px] tracking-[0.35em] uppercase" style={{ fontFamily: "'IBM Plex Mono', monospace", color: "rgba(0,80,120,0.4)" }}>
              scroll
            </span>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="animate-bounce">
              <path d="M1 1l4 4 4-4" stroke="rgba(0,80,120,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
      </div>

      {loaded && <VertBarSync progressRef={progressRef} />}
    </div>
    </>
  );
}

function VertBarSync({ progressRef }: { progressRef: { current: number } }) {
  useEffect(() => {
    let raf: number;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const el = document.getElementById("vert-bar-fill");
      if (el) el.style.height = `${progressRef.current * 100}%`;
    };
    tick();
    return () => cancelAnimationFrame(raf);
  }, [progressRef]);
  return null;
}
