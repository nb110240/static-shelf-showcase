import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import ComparePage from "./pages/ComparePage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import EmailFloat from "./components/WhatsAppFloat";
import CompareFloatingBar from "./components/CompareFloatingBar";
import StructuredData from "./components/StructuredData";

const App = () => (
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
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/compare" element={<ComparePage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
  </HelmetProvider>
);

export default App;
