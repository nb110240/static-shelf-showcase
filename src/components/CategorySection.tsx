import { Product } from "@/types/product";
// emailUrl no longer used — enquiry goes to form
import { Eye, ChevronDown, ChevronUp, Mail, Check, GitCompareArrows } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCompare } from "@/hooks/useCompare";
import { toast } from "sonner";
import { categoryToSlug } from "@/data/categoryContent";
import { track } from "@vercel/analytics";

interface CategorySectionProps {
  categoryName: string;
  categorySlug?: string;
  products: Product[];
  categoryImage: string;
  onViewDetails: (product: Product) => void;
}

function extractSpec(features: string[], key: string): string | null {
  const f = features.find((f) => f.toLowerCase().includes(key.toLowerCase()));
  if (!f) return null;
  const parts = f.split(":");
  return parts.length > 1 ? parts[1].trim() : null;
}

const CategorySection = ({ categoryName, categorySlug, products, categoryImage, onViewDetails }: CategorySectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const { addToCompare, removeFromCompare, isInCompare } = useCompare();
  const displayedProducts = isExpanded ? products : products.slice(0, 6);
  const hasMore = products.length > 6;

  return (
    <div className="mb-20">
      {/* Category Header */}
      <div className="relative rounded-lg overflow-hidden mb-8 group">
        <div className="aspect-[3/1] md:aspect-[5/1]">
          <img
            src={categoryImage}
            alt={categoryName}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement?.classList.add('bg-muted');
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent flex items-center">
          <div className="px-8 md:px-10">
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#49b7df] block mb-2">
              {products.length} Product{products.length !== 1 ? "s" : ""}
            </span>
            <h2 className="font-display text-3xl md:text-4xl tracking-wider text-white">
              <Link to={`/products/category/${categorySlug ?? categoryToSlug(categoryName)}`} className="hover:text-primary transition-colors">{categoryName}</Link>
            </h2>
          </div>
        </div>
      </div>

      {/* Product grid — larger cards with inline specs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedProducts.map((product) => {
          const flange = extractSpec(product.features, "flange");
          const barrel = extractSpec(product.features, "barrel");
          const bore = extractSpec(product.features, "bore");
          const traverse = extractSpec(product.features, "traverse");

          return (
            <article
              key={product.id}
              className="rounded-lg border border-border bg-card hover:border-primary/25 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 group overflow-hidden"
            >
              {/* Image */}
              <Link
                to={`/products/${product.id}`}
                className="block aspect-[4/3] overflow-hidden bg-[#f3f5f7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/50"
                aria-label={`View ${product.name}`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-contain object-center p-2 group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement?.classList.add('bg-muted');
                  }}
                />
              </Link>

              {/* Info */}
              <div className="p-4">
                <Link
                  to={`/products/${product.id}`}
                  className="block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <h3 className="font-semibold text-foreground/85 text-sm mb-1 truncate group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-xs line-clamp-2 mb-3 min-h-8">
                    {product.description}
                  </p>
                </Link>

                {/* Inline specs */}
                {(flange || barrel || bore || traverse) && (
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-3 py-2.5 px-3 rounded bg-muted/50 border border-border/50">
                    {flange && (
                      <div>
                        <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Flange</span>
                        <p className="font-mono text-xs text-foreground/80">{flange}</p>
                      </div>
                    )}
                    {barrel && (
                      <div>
                        <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Barrel</span>
                        <p className="font-mono text-xs text-foreground/80">{barrel}</p>
                      </div>
                    )}
                    {bore && (
                      <div>
                        <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Bore</span>
                        <p className="font-mono text-xs text-foreground/80">{bore}</p>
                      </div>
                    )}
                    {traverse && (
                      <div>
                        <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">Traverse</span>
                        <p className="font-mono text-xs text-foreground/80">{traverse}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Actions */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    aria-label={`Quick view ${product.name}`}
                    className="flex min-h-10 items-center justify-center gap-1.5 rounded-sm border border-primary/20 py-2 text-[11px] font-medium uppercase tracking-wider text-primary transition-colors hover:border-primary/40 hover:text-primary/80"
                    onClick={(e) => { e.stopPropagation(); onViewDetails(product); }}
                  >
                    <Eye className="h-3 w-3" />
                    Details
                  </button>
                  <button
                    type="button"
                    aria-label={isInCompare(product.id) ? `Remove ${product.name} from comparison` : `Add ${product.name} to comparison`}
                    className={`flex min-h-10 items-center justify-center gap-1.5 rounded-sm px-3 py-2 text-[11px] font-medium uppercase tracking-wider transition-colors ${
                      isInCompare(product.id)
                        ? "border-2 border-[#178fbe] text-[#178fbe] bg-[#178fbe]/5"
                        : "border border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (isInCompare(product.id)) {
                        removeFromCompare(product.id);
                      } else {
                        const added = addToCompare(product.id);
                        if (!added) {
                          toast("Maximum 3 products for comparison", {
                            description: "Remove a product before adding another.",
                          });
                        }
                      }
                    }}
                  >
                    {isInCompare(product.id) ? (
                      <><Check className="h-3 w-3" /> Added</>
                    ) : (
                      <><GitCompareArrows className="h-3 w-3" /> Compare</>
                    )}
                  </button>
                  <button
                    type="button"
                    aria-label={`Request a quote for ${product.name}`}
                    className="col-span-2 flex min-h-11 items-center justify-center gap-1.5 rounded-sm bg-[#178fbe] px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-white transition-colors hover:bg-[#136fa0] cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      track("quote_intent", { product: product.name, source: "catalog_card" });
                      navigate(`/?enquiry=${encodeURIComponent(product.name)}`);
                      setTimeout(() => {
                        document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth" });
                      }, 400);
                    }}
                  >
                    <Mail className="h-3 w-3" />
                    Request Quote
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-6">
          <button
            className="flex items-center gap-2 font-mono text-[11px] text-primary hover:text-primary/80 transition-colors uppercase tracking-[0.2em]"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>Show Less <ChevronUp className="h-3.5 w-3.5" /></>
            ) : (
              <>Show All {products.length} Products <ChevronDown className="h-3.5 w-3.5" /></>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default CategorySection;
