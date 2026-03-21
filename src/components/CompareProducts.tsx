import { useCompare } from "@/hooks/useCompare";
import { products } from "@/data/products";
import { Product } from "@/types/product";
import { whatsappUrl } from "@/lib/constants";
import { X, Plus, MessageCircle, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";

/** Parse "Key: Value" from a feature string, splitting on the first colon. */
function parseFeature(f: string): { key: string; value: string } | null {
  const idx = f.indexOf(":");
  if (idx === -1) return null;
  const key = f.slice(0, idx).trim();
  const value = f.slice(idx + 1).trim();
  if (!key || !value) return null;
  return { key, value };
}

/** Build a map of spec key -> value for a product. */
function buildSpecMap(product: Product): Record<string, string> {
  const map: Record<string, string> = {};
  for (const f of product.features) {
    const parsed = parseFeature(f);
    if (parsed) map[parsed.key] = parsed.value;
  }
  return map;
}

/** Normalize spec keys for comparison row alignment. */
function normalizeKey(key: string): string {
  return key
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/dia$/i, "")
    .trim();
}

/** Priority spec keys for the comparison table. */
const PRIORITY_KEYS = ["flange", "barrel", "bore", "traverse", "material", "weight"];

function getPriority(normalizedKey: string): number {
  for (let i = 0; i < PRIORITY_KEYS.length; i++) {
    if (normalizedKey.includes(PRIORITY_KEYS[i])) return i;
  }
  return PRIORITY_KEYS.length;
}

interface AddProductSlotProps {
  onAdd: (id: string) => void;
  excludeIds: string[];
}

const AddProductSlot = ({ onAdd, excludeIds }: AddProductSlotProps) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const available = products.filter((p) => !excludeIds.includes(p.id));
    if (!search.trim()) return available.slice(0, 20);
    const q = search.toLowerCase();
    return available
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
      .slice(0, 20);
  }, [search, excludeIds]);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-border hover:border-primary/40 transition-colors p-8 min-h-[280px]"
      >
        <div
          className="h-10 w-10 rounded-full flex items-center justify-center border border-border"
          style={{ color: "#178fbe" }}
        >
          <Plus className="h-5 w-5" />
        </div>
        <span
          className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground"
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
        >
          Add Product
        </span>
      </button>
    );
  }

  return (
    <div className="rounded-lg border border-border bg-card p-4 min-h-[280px] flex flex-col">
      <div className="relative mb-3">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          autoFocus
          className="w-full pl-8 pr-3 py-2 text-xs rounded border border-border bg-background focus:outline-none focus:border-primary/40 transition-colors"
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
        />
      </div>
      <div className="flex-1 overflow-y-auto max-h-[240px] space-y-1">
        {filtered.map((p) => (
          <button
            key={p.id}
            onClick={() => {
              onAdd(p.id);
              setOpen(false);
              setSearch("");
            }}
            className="w-full text-left px-3 py-2 rounded hover:bg-muted/50 transition-colors flex items-center gap-3"
          >
            <img
              src={p.image}
              alt={p.name}
              className="h-8 w-8 object-contain bg-[#f3f5f7] rounded flex-shrink-0"
            />
            <div className="min-w-0">
              <p className="text-xs font-medium text-foreground/85 truncate">
                {p.name}
              </p>
              <p
                className="text-[9px] text-muted-foreground uppercase tracking-wider"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                {p.category}
              </p>
            </div>
          </button>
        ))}
        {filtered.length === 0 && (
          <p className="text-xs text-muted-foreground text-center py-6">
            No matching products
          </p>
        )}
      </div>
      <button
        onClick={() => {
          setOpen(false);
          setSearch("");
        }}
        className="mt-2 text-[10px] text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider text-center"
        style={{ fontFamily: "'IBM Plex Mono', monospace" }}
      >
        Cancel
      </button>
    </div>
  );
};

const CompareProducts = () => {
  const { compareItems, addToCompare, removeFromCompare } = useCompare();

  const selectedProducts = compareItems
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as Product[];

  // Build spec maps and gather all keys
  const specMaps = selectedProducts.map(buildSpecMap);
  const allKeysSet = new Map<string, string>(); // normalized -> original
  for (const map of specMaps) {
    for (const key of Object.keys(map)) {
      const norm = normalizeKey(key);
      if (!allKeysSet.has(norm)) {
        allKeysSet.set(norm, key);
      }
    }
  }

  // Sort keys by priority
  const sortedKeys = Array.from(allKeysSet.entries()).sort(
    ([normA], [normB]) => getPriority(normA) - getPriority(normB)
  );

  // Look up value for a product's spec map given a normalized key
  function getValue(specMap: Record<string, string>, normalizedKey: string): string {
    for (const [key, value] of Object.entries(specMap)) {
      if (normalizeKey(key) === normalizedKey) return value;
    }
    return "-";
  }

  // WhatsApp CTA
  const whatsAppMessage = `Hi, I'd like to compare and enquire about these products:\n${selectedProducts
    .map((p) => `- ${p.name} (${p.category})`)
    .join("\n")}`;
  const whatsAppUrl = whatsappUrl(whatsAppMessage);

  // Empty state
  if (selectedProducts.length === 0) {
    return (
      <section className="py-20">
        <div className="container text-center">
          <p className="text-muted-foreground text-sm mb-4">
            Select 2-3 products to compare side by side
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase px-6 py-3 rounded-sm border border-primary/20 text-primary hover:border-primary/40 hover:bg-primary/5 transition-all"
          >
            Browse Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12">
      <div className="container">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[2px] w-6" style={{ background: "#178fbe" }} />
          <span
            className="text-[10px] tracking-[0.3em] uppercase"
            style={{ color: "#178fbe", fontFamily: "'IBM Plex Mono', monospace" }}
          >
            Compare Products
          </span>
        </div>

        {/* Heading */}
        <h2
          className="mb-10"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            lineHeight: 1.1,
            color: "#0d3548",
            letterSpacing: "0.03em",
            fontFamily: "'Syne', system-ui, sans-serif",
            fontWeight: 800,
          }}
        >
          SIDE BY SIDE
        </h2>

        {/* Product columns */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {selectedProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-lg border border-border bg-card overflow-hidden relative group"
            >
              {/* Remove button */}
              <button
                onClick={() => removeFromCompare(product.id)}
                className="absolute top-2 right-2 z-10 h-7 w-7 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
                aria-label={`Remove ${product.name}`}
              >
                <X className="h-3.5 w-3.5" />
              </button>

              {/* Image */}
              <div className="aspect-square overflow-hidden bg-[#f3f5f7]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <h4 className="font-semibold text-foreground/85 text-sm mb-1 truncate">
                  {product.name}
                </h4>
                <span
                  className="inline-block text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 rounded border border-border text-muted-foreground"
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  {product.category}
                </span>
              </div>
            </div>
          ))}

          {/* Add product slot */}
          {selectedProducts.length < 3 && (
            <AddProductSlot
              onAdd={addToCompare}
              excludeIds={compareItems}
            />
          )}
        </div>

        {/* Specs comparison table */}
        {selectedProducts.length >= 2 && sortedKeys.length > 0 && (
          <div className="rounded-lg border border-border bg-card overflow-hidden mb-10">
            <div className="p-4 border-b border-border">
              <h3
                className="text-[10px] tracking-[0.2em] uppercase"
                style={{
                  color: "rgba(0,80,120,0.5)",
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                Specifications Comparison
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-3 w-[160px]">
                      <span
                        className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground font-normal"
                      >
                        Spec
                      </span>
                    </th>
                    {selectedProducts.map((p) => (
                      <th key={p.id} className="text-left p-3">
                        <span
                          className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground font-normal truncate block"
                        >
                          {p.name}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sortedKeys.map(([norm, original], i) => (
                    <tr
                      key={norm}
                      className={
                        i % 2 === 0
                          ? "bg-muted/30"
                          : ""
                      }
                    >
                      <td className="p-3">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                          {original}
                        </span>
                      </td>
                      {specMaps.map((map, j) => (
                        <td key={j} className="p-3">
                          <span className="font-mono text-xs text-foreground/80">
                            {getValue(map, norm)}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* WhatsApp CTA */}
        {selectedProducts.length >= 2 && (
          <div className="flex justify-center">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[11px] font-semibold tracking-[0.16em] uppercase rounded-sm bg-[#25D366] text-white hover:bg-[#1ebe57] transition-all duration-300"
            >
              <MessageCircle className="h-4 w-4" />
              Enquire About These Products
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default CompareProducts;
