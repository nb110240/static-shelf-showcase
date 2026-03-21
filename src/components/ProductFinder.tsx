import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, RotateCcw, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/constants";
import { products } from "@/data/products";
import { Product } from "@/types/product";

const STEP_1_OPTIONS = [
  "Cable/Wire",
  "Welding Wire",
  "EDM Wire",
  "Stitching Wire",
  "Monofilament",
  "Copper Conductor",
  "Other",
] as const;

const STEP_2_OPTIONS = [
  "Small (up to 200mm)",
  "Medium (200-500mm)",
  "Large (500-1000mm)",
  "Extra Large (1000mm+)",
  "Not sure",
] as const;

const STEP_3_OPTIONS = [
  "PP (Polypropylene)",
  "ABS",
  "HDPE",
  "PS (Polystyrene)",
  "Any / Not sure",
] as const;

type Step1 = (typeof STEP_1_OPTIONS)[number];
type Step2 = (typeof STEP_2_OPTIONS)[number];
type Step3 = (typeof STEP_3_OPTIONS)[number];

// Maps step 1 answers to product categories
const applicationCategoryMap: Record<string, string[]> = {
  "Cable/Wire": ["Cable Delivery", "Super Tough", "Cylindrical Reels", "Tapered Bobbins", "Jumbo Reels", "Composite Reels", "ISI Reels"],
  "Welding Wire": ["Welding Wire"],
  "EDM Wire": ["EDM Wire"],
  "Stitching Wire": ["Stitching Wire"],
  "Monofilament": ["Monofilament"],
  "Copper Conductor": ["Copper Conductor"],
  "Other": ["Biconical", "Steel & Tinsel", "Aluminum Wire", "Misc Reels"],
};

function extractFlangeMm(features: string[]): number | null {
  // Prefer features explicitly labeled "Flange:" or "Flange diameter:"
  const flangeFeature =
    features.find((f) => /^flange\s*(diameter)?\s*:/i.test(f.trim())) ||
    features.find((f) => f.toLowerCase().includes("flange"));
  if (!flangeFeature) return null;
  // Prefer value after colon if present
  const afterColon = flangeFeature.includes(":") ? flangeFeature.split(":")[1] : flangeFeature;
  // Try to extract a number followed by mm
  const match = afterColon.match(/(\d+(?:\.\d+)?)\s*mm/i);
  if (match) return parseFloat(match[1]);
  // Try to extract a number followed by " (inches) and convert
  const inchMatch = afterColon.match(/(\d+(?:\.\d+)?)\s*(?:inch|")/i);
  if (inchMatch) return parseFloat(inchMatch[1]) * 25.4;
  return null;
}

function matchesSize(features: string[], sizeOption: Step2): boolean {
  if (sizeOption === "Not sure") return true;
  const flange = extractFlangeMm(features);
  if (!flange) return true; // include if we can't determine
  switch (sizeOption) {
    case "Small (up to 200mm)":
      return flange <= 200;
    case "Medium (200-500mm)":
      return flange > 200 && flange <= 500;
    case "Large (500-1000mm)":
      return flange > 500 && flange <= 1000;
    case "Extra Large (1000mm+)":
      return flange > 1000;
    default:
      return true;
  }
}

function matchesMaterial(product: Product, materialOption: Step3): boolean {
  if (materialOption === "Any / Not sure") return true;
  const searchText = product.description + " " + product.features.join(" ");
  // Use word-boundary regex to avoid false positives (e.g. "pp" matching "shipped")
  const wordMatch = (term: string) => new RegExp(`\\b${term}\\b`, "i").test(searchText);
  switch (materialOption) {
    case "PP (Polypropylene)":
      return wordMatch("PP") || wordMatch("polypropylene");
    case "ABS":
      return wordMatch("ABS");
    case "HDPE":
      return wordMatch("HDPE");
    case "PS (Polystyrene)":
      return wordMatch("PS") || wordMatch("polystyrene");
    default:
      return true;
  }
}

function extractSpec(features: string[], key: string): string | null {
  const f = features.find((f) => f.toLowerCase().includes(key.toLowerCase()));
  if (!f) return null;
  const parts = f.split(":");
  return parts.length > 1 ? parts[1].trim() : null;
}

const ProductFinder = () => {
  // step: 1 = picking application, 2 = picking size, 3 = picking material, 4 = showing results
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [answer1, setAnswer1] = useState<Step1 | null>(null);
  const [answer2, setAnswer2] = useState<Step2 | null>(null);
  const [answer3, setAnswer3] = useState<Step3 | null>(null);

  const reset = () => {
    setStep(1);
    setAnswer1(null);
    setAnswer2(null);
    setAnswer3(null);
  };

  const handleStep1 = (option: Step1) => {
    setAnswer1(option);
    setStep(2);
  };

  const handleStep2 = (option: Step2) => {
    setAnswer2(option);
    setStep(3);
  };

  const handleStep3 = (option: Step3) => {
    setAnswer3(option);
    setStep(4);
  };

  // Compute results
  const results: Product[] = (() => {
    if (step < 4 || !answer1 || !answer2 || !answer3) return [];
    const cats = applicationCategoryMap[answer1] || [];
    return products
      .filter((p) => cats.includes(p.category))
      .filter((p) => matchesSize(p.features, answer2))
      .filter((p) => matchesMaterial(p, answer3))
      .slice(0, 5);
  })();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-60" />

      <div className="container relative">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[2px] w-8" style={{ background: "#178fbe" }} />
          <span
            className="text-[10px] tracking-[0.3em] uppercase"
            style={{ color: "#178fbe", fontFamily: "'IBM Plex Mono', monospace" }}
          >
            Find Your Reel
          </span>
        </div>

        {/* Heading */}
        <h2
          className="mb-10"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            lineHeight: 1.1,
            color: "#0d3548",
            letterSpacing: "0.06em",
            fontFamily: "'Syne', system-ui, sans-serif",
            fontWeight: 800,
          }}
        >
          PRODUCT FINDER
        </h2>

        {/* Progress indicator */}
        {step < 4 && (
          <p
            className="text-[11px] tracking-[0.15em] uppercase mb-6"
            style={{ color: "rgba(0,80,120,0.5)", fontFamily: "'IBM Plex Mono', monospace" }}
          >
            Step {step} of 3
          </p>
        )}

        {/* Step 1 */}
        {step === 1 && (
          <div>
            <h3
              className="text-lg font-semibold mb-5"
              style={{ color: "#0d3548", fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              What are you winding?
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-3xl">
              {STEP_1_OPTIONS.map((option) => (
                <button
                  key={option}
                  onClick={() => handleStep1(option)}
                  className={`relative flex items-center justify-center gap-2 px-4 py-3.5 text-[11px] font-medium tracking-[0.12em] uppercase rounded-sm border transition-all duration-200 ${
                    answer1 === option
                      ? "border-[#178fbe] bg-[#178fbe]/5 text-[#178fbe]"
                      : "border-border hover:border-[#178fbe]/40 text-foreground/70 hover:text-[#178fbe]"
                  }`}
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  {answer1 === option && <Check className="h-3.5 w-3.5 shrink-0" />}
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div>
            <h3
              className="text-lg font-semibold mb-5"
              style={{ color: "#0d3548", fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              What flange size do you need?
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-3xl">
              {STEP_2_OPTIONS.map((option) => (
                <button
                  key={option}
                  onClick={() => handleStep2(option)}
                  className={`relative flex items-center justify-center gap-2 px-4 py-3.5 text-[11px] font-medium tracking-[0.12em] uppercase rounded-sm border transition-all duration-200 ${
                    answer2 === option
                      ? "border-[#178fbe] bg-[#178fbe]/5 text-[#178fbe]"
                      : "border-border hover:border-[#178fbe]/40 text-foreground/70 hover:text-[#178fbe]"
                  }`}
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  {answer2 === option && <Check className="h-3.5 w-3.5 shrink-0" />}
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div>
            <h3
              className="text-lg font-semibold mb-5"
              style={{ color: "#0d3548", fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              What material?
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-3xl">
              {STEP_3_OPTIONS.map((option) => (
                <button
                  key={option}
                  onClick={() => handleStep3(option)}
                  className={`relative flex items-center justify-center gap-2 px-4 py-3.5 text-[11px] font-medium tracking-[0.12em] uppercase rounded-sm border transition-all duration-200 ${
                    answer3 === option
                      ? "border-[#178fbe] bg-[#178fbe]/5 text-[#178fbe]"
                      : "border-border hover:border-[#178fbe]/40 text-foreground/70 hover:text-[#178fbe]"
                  }`}
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  {answer3 === option && <Check className="h-3.5 w-3.5 shrink-0" />}
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {step === 4 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <p
                className="text-[11px] tracking-[0.15em] uppercase"
                style={{ color: "rgba(0,80,120,0.5)", fontFamily: "'IBM Plex Mono', monospace" }}
              >
                {results.length > 0
                  ? `${results.length} match${results.length !== 1 ? "es" : ""} found`
                  : "No exact match"}
              </p>
              <button
                onClick={reset}
                className="flex items-center gap-1.5 text-[10px] font-medium text-primary hover:text-primary/80 transition-colors tracking-wider uppercase"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                <RotateCcw className="h-3 w-3" />
                Start Over
              </button>
            </div>

            {results.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {results.map((product) => {
                  const flange = extractSpec(product.features, "flange");
                  const barrel = extractSpec(product.features, "barrel");

                  return (
                    <Link
                      key={product.id}
                      to={`/products/${product.id}`}
                      className="rounded-lg border border-border bg-card hover:border-primary/25 hover:shadow-md transition-all duration-300 overflow-hidden group"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-[#f3f5f7]">
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          className="w-full h-full object-contain object-center p-2 group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-3">
                        <span
                          className="text-[9px] tracking-[0.2em] uppercase block mb-1"
                          style={{ color: "#178fbe", fontFamily: "'IBM Plex Mono', monospace" }}
                        >
                          {product.category}
                        </span>
                        <h4 className="font-semibold text-foreground/85 text-sm mb-1 truncate">
                          {product.name}
                        </h4>
                        {(flange || barrel) && (
                          <div className="flex gap-3 mt-2">
                            {flange && (
                              <div>
                                <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider">
                                  Flange
                                </span>
                                <p className="font-mono text-xs text-foreground/80">{flange}</p>
                              </div>
                            )}
                            {barrel && (
                              <div>
                                <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider">
                                  Barrel
                                </span>
                                <p className="font-mono text-xs text-foreground/80">{barrel}</p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12 max-w-sm mx-auto">
                <p
                  className="text-sm text-muted-foreground mb-6"
                  style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                >
                  No exact match — browse all products or WhatsApp us for help.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    to="/products"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[11px] font-semibold tracking-[0.16em] uppercase rounded-sm bg-foreground text-background hover:bg-primary transition-all duration-300"
                  >
                    Browse All Products
                  </Link>
                  <a
                    href={whatsappUrl("Hi, I need help finding the right reel. Can you help?")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[11px] font-semibold tracking-[0.16em] uppercase rounded-sm bg-[#25D366] text-white hover:bg-[#1ebe57] transition-all duration-300"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductFinder;
