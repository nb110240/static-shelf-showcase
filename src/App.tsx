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
import WhatsAppFloat from "./components/WhatsAppFloat";
import CompareFloatingBar from "./components/CompareFloatingBar";
import StructuredData from "./components/StructuredData";

const App = () => (
  <HelmetProvider>
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <StructuredData />
      <ScrollToTop />
      <WhatsAppFloat />
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
