import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logoImg from "@/assets/logo.png";

const NAV = [
  { label: "Home",     href: "/",         external: false },
  { label: "Products", href: "/products", external: false },
  { label: "Capabilities", href: "/#capabilities", external: false },
  { label: "Contact",  href: "/#contact", external: false },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";
  const hasDarkHero = isHome || location.pathname === "/products" || location.pathname.startsWith("/products/category/");
  const scrollThreshold = isHome ? 60 : hasDarkHero ? 120 : 0;
  const solidHeader = scrolled || !hasDarkHero;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > scrollThreshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // check immediately on route change
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollThreshold]);

  const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: "smooth" }); return; }
    // Poll for element (max 2 seconds)
    let attempts = 0;
    const interval = setInterval(() => {
      const el = document.getElementById(id);
      if (el || ++attempts > 20) {
        clearInterval(interval);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleAnchorNav = (href: string) => {
    setMobileOpen(false);
    if (href === "/") {
      if (window.location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
        scrollToElement("hero");
      }
    } else if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (window.location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        scrollToElement(id);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solidHeader
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
              filter: solidHeader
                ? "brightness(0) saturate(100%) invert(46%) sepia(62%) saturate(502%) hue-rotate(163deg) brightness(94%) contrast(96%)"
                : "brightness(0) saturate(100%) invert(100%)",
            }}
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
          {NAV.map((link) => {
            const cls = `relative py-3 text-xs font-medium tracking-[0.16em] uppercase transition-colors group/nav ${
              solidHeader
                ? "text-foreground/70 hover:text-foreground"
                : "text-white/75 hover:text-white"
            }`;
            const underline = `absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover/nav:w-full ${
              solidHeader ? "bg-primary" : "bg-white"
            }`;
            return link.href === "/" || link.href.startsWith("/#") ? (
              <button
                key={link.href}
                onClick={() => handleAnchorNav(link.href)}
                className={cls}
                aria-current={link.href === "/" && isHome ? "page" : undefined}
              >
                {link.label}
                <span className={underline} />
              </button>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={cls}
                aria-current={location.pathname.startsWith(link.href) ? "page" : undefined}
              >
                {link.label}
                <span className={underline} />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => handleAnchorNav("/#contact")}
            className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-[0.14em] uppercase rounded-sm transition-all duration-300 ${
              solidHeader
                ? "bg-foreground text-background hover:bg-primary"
                : "bg-white/15 text-white border border-white/25 hover:bg-white/25"
            }`}
          >
            Get a Quote
          </button>
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            className={`md:hidden flex h-11 w-11 items-center justify-center rounded-sm transition-colors ${solidHeader ? "text-foreground/70 hover:bg-muted hover:text-primary" : "text-white/80 hover:bg-white/10 hover:text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-navigation" className="md:hidden bg-white/95 backdrop-blur-xl border-t border-border/50">
          <nav aria-label="Mobile navigation" className="container py-6 flex flex-col gap-1">
            {NAV.map((link) =>
              link.href.startsWith("/#") ? (
                <button
                  key={link.href}
                  onClick={() => handleAnchorNav(link.href)}
                  className="px-4 py-3 text-xs font-medium tracking-[0.16em] uppercase text-foreground/60 hover:text-foreground hover:bg-muted/50 rounded transition-colors text-left"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-xs font-medium tracking-[0.16em] uppercase text-foreground/60 hover:text-foreground hover:bg-muted/50 rounded transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="h-px bg-border mt-4 mb-2" />
            <button
              onClick={() => handleAnchorNav("/#contact")}
              className="flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-[0.14em] uppercase rounded-sm bg-foreground text-background hover:bg-primary transition-all"
            >
              Get a Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
