import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductFinder from "@/components/ProductFinder";
import ScrollShowcase from "@/components/ScrollShowcase";
import About from "@/components/About";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div style={{ overflowX: "clip" }}>
        <Header />
        <Hero />
      </div>
      <ProductFinder />
      <ScrollShowcase />
      <div style={{ overflowX: "clip" }}>
        <About />
        <EnquiryForm />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
