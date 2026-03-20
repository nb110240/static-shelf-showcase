import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logoImg from "@/assets/logo.png";

const NAV = [
  { label: "Home",     href: "/",         external: false },
  { label: "Products", href: "/products", external: false },
  { label: "Company",  href: "/#about",   external: false },
  { label: "Contact",  href: "/#contact", external: false },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // On non-home pages, the hero is shorter so we need the solid header sooner
  const isHome = location.pathname === "/";
  const scrollThreshold = isHome ? 60 : 10;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > scrollThreshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // check immediately on route change
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollThreshold]);

  const handleAnchorNav = (href: string) => {
    setMobileOpen(false);
    if (href === "/") {
      if (window.location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
      }
    } else if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (window.location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 300);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-black/[0.06] shadow-[0_1px_8px_-2px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-[4.5rem] items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 select-none group">
          <img
            src={logoImg}
            alt="Bobbins India"
            className="h-8 w-auto object-contain transition-all duration-500"
            style={{
              filter: scrolled
                ? "brightness(0) saturate(100%) invert(46%) sepia(62%) saturate(502%) hue-rotate(163deg) brightness(94%) contrast(96%)"
                : "brightness(0) saturate(100%) invert(100%)",
            }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((link) => {
            const cls = `relative text-[11px] font-medium tracking-[0.18em] uppercase transition-colors group/nav ${
              scrolled
                ? "text-foreground/50 hover:text-foreground"
                : "text-white/60 hover:text-white"
            }`;
            const underline = `absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover/nav:w-full ${
              scrolled ? "bg-primary" : "bg-white"
            }`;
            return link.href === "/" || link.href.startsWith("/#") ? (
              <button key={link.href} onClick={() => handleAnchorNav(link.href)} className={cls}>
                {link.label}
                <span className={underline} />
              </button>
            ) : (
              <Link key={link.href} to={link.href} className={cls}>
                {link.label}
                <span className={underline} />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => handleAnchorNav("/#contact")}
            className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[11px] font-semibold tracking-[0.16em] uppercase rounded-sm transition-all duration-300 ${
              scrolled
                ? "bg-foreground text-background hover:bg-primary"
                : "bg-white/15 text-white border border-white/25 hover:bg-white/25"
            }`}
          >
            Get in Touch
          </button>
          <button
            className={`md:hidden p-2 transition-colors ${scrolled ? "text-foreground/50 hover:text-primary" : "text-white/70 hover:text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-border/50">
          <nav className="container py-6 flex flex-col gap-1">
            {NAV.map((link) =>
              link.href.startsWith("/#") ? (
                <button
                  key={link.href}
                  onClick={() => handleAnchorNav(link.href)}
                  className="px-4 py-3 text-[11px] font-medium tracking-[0.18em] uppercase text-foreground/50 hover:text-foreground hover:bg-muted/50 rounded transition-colors text-left"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-[11px] font-medium tracking-[0.18em] uppercase text-foreground/50 hover:text-foreground hover:bg-muted/50 rounded transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="h-px bg-border mt-4 mb-2" />
            <button
              onClick={() => handleAnchorNav("/#contact")}
              className="flex items-center justify-center gap-2 px-5 py-3 text-[11px] font-semibold tracking-[0.16em] uppercase rounded-sm bg-foreground text-background hover:bg-primary transition-all"
            >
              Get in Touch
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
