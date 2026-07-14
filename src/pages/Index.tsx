import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductFinder from "@/components/ProductFinder";
import ScrollShowcase from "@/components/ScrollShowcase";
import About from "@/components/About";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import Capabilities from "@/components/Capabilities";
import { SITE_URL } from "@/lib/constants";

const Index = () => {
  return (
    <div id="main-content" className="min-h-screen bg-background">
      <Helmet>
        <title>Bobbins India | Precision Spools &amp; Reels Manufacturer</title>
        <meta
          name="description"
          content="Precision industrial spools, bobbins and reels manufactured in Mumbai since 1995. Browse 100+ variants or request a custom mould and quote."
        />
        <link rel="canonical" href={`${SITE_URL}/`} />
      </Helmet>
      <div style={{ overflowX: "clip" }}>
        <Header />
        <Hero />
      </div>
      <ProductFinder />
      <ScrollShowcase />
      <Capabilities />
      <div style={{ overflowX: "clip" }}>
        <About />
        <EnquiryForm />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
