import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScrollShowcase from "@/components/ScrollShowcase";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div style={{ overflowX: "clip" }}>
        <Header />
        <Hero />
      </div>
      <ScrollShowcase />
      <div style={{ overflowX: "clip" }}>
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
