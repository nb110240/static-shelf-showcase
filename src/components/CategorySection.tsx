import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";
import { Eye, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface CategorySectionProps {
  categoryName: string;
  products: Product[];
  categoryImage: string;
  onViewDetails: (product: Product) => void;
}

const CategorySection = ({ categoryName, products, categoryImage, onViewDetails }: CategorySectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedProducts = isExpanded ? products : products.slice(0, 4);
  const hasMore = products.length > 4;

  return (
    <div className="mb-12">
      {/* Category Header with Image */}
      <div className="relative rounded-xl overflow-hidden mb-6">
        <div className="aspect-[3/1] md:aspect-[4/1]">
          <img
            src={categoryImage}
            alt={categoryName}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent flex items-center">
          <div className="p-6 md:p-8">
            <Badge variant="secondary" className="mb-2">
              {products.length} Products
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {categoryName}
            </h3>
          </div>
        </div>
      </div>

      {/* Products List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayedProducts.map((product) => (
          <Card key={product.id} className="hover:shadow-md transition-shadow border-border">
            <CardContent className="p-4 flex items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-card-foreground truncate">
                  {product.name}
                </h4>
                <p className="text-muted-foreground text-sm line-clamp-1">
                  {product.description}
                </p>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                className="shrink-0 gap-1"
                onClick={() => onViewDetails(product)}
              >
                <Eye className="h-4 w-4" />
                Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Show More/Less Button */}
      {hasMore && (
        <div className="flex justify-center mt-4">
          <Button
            variant="ghost"
            className="gap-2"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Show All {products.length} Products <ChevronDown className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default CategorySection;
