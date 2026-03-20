import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { Check, MessageCircle, ArrowLeft, Package } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { Product } from "@/types/product";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === productId);

  useEffect(() => {
    if (!product) {
      navigate("/products", { replace: true });
    }
  }, [product, navigate]);

  if (!product) return null;

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const whatsAppUrl = `https://wa.me/919820712083?text=${encodeURIComponent(
    `Hi, I'd like to enquire about: ${product.name}`
  )}`;

  const sampleWhatsAppUrl = `https://wa.me/919820712083?text=${encodeURIComponent(
    `Hi, I'd like to request a sample of: ${product.name}\nCategory: ${product.category}\n\nShipping details:\nName: \nCompany: \nAddress: `
  )}`;

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4">
        <div className="container">
          <div className="flex items-center gap-2 text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            <Link
              to="/products"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="h-3 w-3" />
              Products
            </Link>
            <span className="text-muted-foreground/40">/</span>
            <Link
              to={`/products?category=${encodeURIComponent(product.category)}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {product.category}
            </Link>
            <span className="text-muted-foreground/40">/</span>
            <span className="text-foreground/60 truncate max-w-[180px]">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product detail */}
      <section className="pb-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
            {/* Left: Image */}
            <div className="aspect-square bg-[#f3f5f7] rounded-lg overflow-hidden border border-border/50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-6"
              />
            </div>

            {/* Right: Info */}
            <div className="flex flex-col justify-center">
              {/* Category eyebrow */}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-6" style={{ background: "#178fbe" }} />
                <span
                  className="text-[10px] tracking-[0.3em] uppercase"
                  style={{ color: "#178fbe", fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  {product.category}
                </span>
              </div>

              {/* Product name */}
              <h1
                className="mb-4"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  lineHeight: 1.1,
                  color: "#0d3548",
                  letterSpacing: "0.03em",
                  fontFamily: "'Syne', system-ui, sans-serif",
                  fontWeight: 800,
                }}
              >
                {product.name}
              </h1>

              {/* Description */}
              <p
                className="text-sm leading-relaxed text-muted-foreground mb-6 max-w-md"
                style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
              >
                {product.description}
              </p>

              {/* Features / Specs */}
              <div className="mb-8">
                <h3
                  className="text-[10px] tracking-[0.2em] uppercase mb-3"
                  style={{ color: "rgba(0,80,120,0.5)", fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  Specifications
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check
                        className="h-3.5 w-3.5 mt-0.5 shrink-0"
                        style={{ color: "#178fbe" }}
                      />
                      <span
                        className="text-sm text-foreground/75"
                        style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 w-full sm:w-auto">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[11px] font-semibold tracking-[0.16em] uppercase rounded-sm bg-[#25D366] text-white hover:bg-[#1ebe57] transition-all duration-300 w-full"
                >
                  <MessageCircle className="h-4 w-4" />
                  Enquire on WhatsApp
                </a>
                <a
                  href={sampleWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[11px] font-semibold tracking-[0.16em] uppercase rounded-sm border border-primary/20 text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 w-full"
                >
                  <Package className="h-4 w-4" />
                  Request Sample
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 border-t border-border/50">
          <div className="container">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-6" style={{ background: "#178fbe" }} />
              <span
                className="text-[10px] tracking-[0.3em] uppercase"
                style={{ color: "#178fbe", fontFamily: "'IBM Plex Mono', monospace" }}
              >
                More in {product.category}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.id}
                  to={`/products/${rp.id}`}
                  className="rounded-lg border border-border bg-card hover:border-primary/25 hover:shadow-md transition-all duration-300 overflow-hidden group"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#f3f5f7]">
                    <img
                      src={rp.image}
                      alt={rp.name}
                      loading="lazy"
                      className="w-full h-full object-contain object-center p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-foreground/85 text-sm mb-1 truncate">
                      {rp.name}
                    </h4>
                    <p className="text-muted-foreground text-xs line-clamp-1">
                      {rp.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ProductPage;
