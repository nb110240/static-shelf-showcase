import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { Check, Mail } from "lucide-react";

interface ProductDetailProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

const ProductDetail = ({ product, open, onClose }: ProductDetailProps) => {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="aspect-square bg-muted rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-col gap-4">
            <Badge variant="secondary" className="w-fit">
              {product.category}
            </Badge>
            
            <div>
              <p className="text-muted-foreground">
                {product.description}
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 text-foreground">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground mt-auto">
              <Mail className="h-4 w-4" />
              Inquire About This Product
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetail;
