import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Product } from "@/types/product";
import { Check, MessageCircle, ArrowRight } from "lucide-react";

interface ProductDetailProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

const ProductDetail = ({ product, open, onClose }: ProductDetailProps) => {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-border p-0">
        {/* Header bar */}
        <DialogHeader className="px-6 pt-6 pb-5 border-b border-border">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-[2px] w-6 bg-[#178fbe]" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#178fbe]">
              {product.category}
            </span>
          </div>
          <DialogTitle className="font-display text-2xl md:text-3xl tracking-wider text-foreground">
            {product.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="aspect-square bg-[#f3f5f7] overflow-hidden md:border-r border-border">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain object-center p-4"
            />
          </div>

          {/* Details */}
          <div className="p-6 flex flex-col gap-6">
            <p className="text-muted-foreground text-sm leading-[1.7]">
              {product.description}
            </p>

            <div>
              <h3 className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary mb-4">
                Key Features
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-sm bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-2.5 w-2.5 text-primary" />
                    </div>
                    <span className="text-xs text-foreground/70 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-5 border-t border-border">
              <a
                href={`https://wa.me/919820712083?text=${encodeURIComponent(`Hi, I'd like to enquire about: ${product?.name || "your products"}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full px-6 py-3.5 bg-[#25D366] text-white text-[11px] font-semibold tracking-[0.2em] uppercase rounded-sm hover:bg-[#1ebe57] transition-all duration-300 group"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                Enquire on WhatsApp
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetail;
