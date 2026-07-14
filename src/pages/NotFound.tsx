import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div id="main-content" className="flex min-h-screen items-center justify-center bg-background px-6">
      <Helmet>
        <title>Page Not Found | Bobbins India</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="max-w-lg rounded-lg border border-border bg-card p-10 text-center shadow-sm">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-primary">Error 404</p>
        <h1 className="mb-4 font-display text-3xl tracking-wider text-foreground">PAGE NOT FOUND</h1>
        <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
          The page may have moved. Continue to the product catalog or return to the homepage.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/products" className="rounded-sm bg-primary px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-white hover:bg-primary/85">
            Browse Products
          </Link>
          <Link to="/" className="rounded-sm border border-border px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground hover:border-primary/30 hover:text-primary">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
