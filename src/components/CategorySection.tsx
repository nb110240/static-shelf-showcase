import { Product } from "@/types/product";
import { Eye, ChevronDown, ChevronUp, MessageCircle, Check, GitCompareArrows } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCompare } from "@/hooks/useCompare";
import { toast } from "sonner";

interface CategorySectionProps {
  categoryName: string;
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

const CategorySection = ({ categoryName, products, categoryImage, onViewDetails }: CategorySectionProps) => {
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
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent flex items-center">
          <div className="px-8 md:px-10">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#178fbe] block mb-2">
              {products.length} Product{products.length !== 1 ? "s" : ""}
            </span>
            <h3 className="font-display text-3xl md:text-4xl tracking-wider text-white">
              {categoryName}
            </h3>
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
            <div
              key={product.id}
              className="rounded-lg border border-border bg-card hover:border-primary/25 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 cursor-pointer group overflow-hidden"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-[#f3f5f7]">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-contain object-center p-2 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <h4 className="font-semibold text-foreground/85 text-sm mb-1 truncate">
                  {product.name}
                </h4>
                <p className="text-muted-foreground text-xs line-clamp-1 mb-3">
                  {product.description}
                </p>

                {/* Inline specs */}
                {(flange || barrel || bore || traverse) && (
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-3 py-2.5 px-3 rounded bg-muted/50 border border-border/50">
                    {flange && (
                      <div>
                        <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider">Flange</span>
                        <p className="font-mono text-xs text-foreground/80">{flange}</p>
                      </div>
                    )}
                    {barrel && (
                      <div>
                        <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider">Barrel</span>
                        <p className="font-mono text-xs text-foreground/80">{barrel}</p>
                      </div>
                    )}
                    {bore && (
                      <div>
                        <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider">Bore</span>
                        <p className="font-mono text-xs text-foreground/80">{bore}</p>
                      </div>
                    )}
                    {traverse && (
                      <div>
                        <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider">Traverse</span>
                        <p className="font-mono text-xs text-foreground/80">{traverse}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <button
                    className="flex-1 flex items-center justify-center gap-1.5 text-[10px] font-medium text-primary hover:text-primary/80 transition-colors py-2 tracking-wider uppercase border border-primary/20 rounded-sm hover:border-primary/40"
                    onClick={(e) => { e.stopPropagation(); onViewDetails(product); }}
                  >
                    <Eye className="h-3 w-3" />
                    Details
                  </button>
                  <button
                    className={`flex items-center justify-center gap-1.5 text-[10px] font-medium transition-colors py-2 px-3 tracking-wider uppercase rounded-sm ${
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
                  <a
                    href={`https://wa.me/919820712083?text=${encodeURIComponent(`Hi, I'd like to enquire about: ${product.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 text-[10px] font-medium text-white bg-[#25D366] hover:bg-[#1ebe57] transition-colors py-2 px-3 tracking-wider uppercase rounded-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MessageCircle className="h-3 w-3" />
                    Enquire
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-6">
          <button
            className="flex items-center gap-2 font-mono text-[10px] text-primary hover:text-primary/80 transition-colors uppercase tracking-[0.2em]"
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
