import { Mail, Phone, MapPin, ArrowUp, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="relative py-28">
        <div className="absolute inset-0 bg-blueprint-grid" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/[0.03] blur-[100px] pointer-events-none" />

        <div className="container relative">
          {/* Label */}
          <div className="flex items-center gap-4 mb-5">
            <div className="h-[2px] w-10 bg-[#178fbe]" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#178fbe]">
              Get In Touch
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-20 items-start">
            {/* Left copy + WhatsApp CTA */}
            <div>
              <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-[1.2] tracking-wider text-foreground mb-8">
                GET A<br />
                <span className="text-primary">QUOTE</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-[1.8] max-w-sm mb-8">
                Need a specific reel or a custom mould? Tell us your requirements and our team will respond within 24 hours.
              </p>
              <a
                href="https://wa.me/919820712083?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white text-[11px] font-semibold tracking-[0.2em] uppercase rounded-sm hover:bg-[#1ebe57] transition-all duration-300 group"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp Us
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right contact cards */}
            <div className="flex flex-col gap-3">
              {[
                {
                  icon: MapPin,
                  label: "Address",
                  value: "12 B, Chandivali, Off Saki Vihar Road\nAndheri (E), Mumbai - 400072\nMaharashtra, India",
                  href: "https://maps.google.com/?q=12+B+Chandivali+Off+Saki+Vihar+Road+Andheri+East+Mumbai+400072",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91-22-2847 3744 / 1795\n+918928154150",
                  href: "tel:+912228473744",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "sales@bobbinsindia.com",
                  href: "mailto:sales@bobbinsindia.com",
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-5 p-5 rounded-lg border border-border bg-card hover:border-primary/25 transition-all duration-300 group"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="w-10 h-10 shrink-0 rounded-sm bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em] mb-1">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm text-foreground hover:text-primary transition-colors whitespace-pre-line leading-relaxed">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground whitespace-pre-line leading-relaxed">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Footer bar */}
      <footer className="bg-foreground text-background/60">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 py-6">
          <span className="font-display text-sm tracking-[0.15em] text-background/40">
            BOBBINS INDIA
          </span>
          <p className="font-mono text-[10px] tracking-[0.1em] text-background/30">
            &copy; {new Date().getFullYear()} Bobbins India. All rights reserved.
          </p>
          <div className="flex items-center gap-4 md:gap-8">
            <a href="#about" className="py-2 px-1 text-[10px] text-background/40 hover:text-background transition-colors uppercase tracking-[0.15em]">
              Company
            </a>
            <Link to="/products" className="py-2 px-1 text-[10px] text-background/40 hover:text-background transition-colors uppercase tracking-[0.15em]">
              Products
            </Link>
            <a href="#contact" className="py-2 px-1 text-[10px] text-background/40 hover:text-background transition-colors uppercase tracking-[0.15em]">
              Contact
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-1.5 py-2 px-1 text-[10px] text-background/40 hover:text-background transition-colors uppercase tracking-[0.15em]"
            >
              <ArrowUp className="h-3 w-3" />
              Top
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
