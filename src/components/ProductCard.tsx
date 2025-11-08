import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";
import { Eye } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-[var(--shadow-card-hover)] transition-[box-shadow] duration-300 border-border">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <CardContent className="p-4">
        <Badge variant="secondary" className="mb-2">
          {product.category}
        </Badge>
        <h3 className="font-semibold text-lg text-card-foreground mb-2 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3">
          {product.description}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          variant="outline" 
          className="w-full gap-2"
          onClick={() => onViewDetails(product)}
        >
          <Eye className="h-4 w-4" />
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
