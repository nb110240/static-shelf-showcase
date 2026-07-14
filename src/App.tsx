import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";
import EmailFloat from "./components/WhatsAppFloat";
import CompareFloatingBar from "./components/CompareFloatingBar";
import StructuredData from "./components/StructuredData";
import AppErrorBoundary from "./components/AppErrorBoundary";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const Products = lazy(() => import("./pages/Products"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const ComparePage = lazy(() => import("./pages/ComparePage"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PageFallback = () => <div className="min-h-screen bg-background" aria-label="Loading page" />;

const App = () => (
  <AppErrorBoundary>
  <HelmetProvider>
  <TooltipProvider>
    <a
      href="#main-content"
      className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-sm bg-primary px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-transform focus:translate-y-0"
    >
      Skip to content
    </a>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <StructuredData />
      <ScrollToTop />
      <EmailFloat />
      <CompareFloatingBar />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products/category/:categorySlug" element={<CategoryPage />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    <Analytics />
    <SpeedInsights />
  </TooltipProvider>
  </HelmetProvider>
  </AppErrorBoundary>
);

export default App;
