import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductFinder from "@/components/ProductFinder";
import ScrollShowcase from "@/components/ScrollShowcase";
import About from "@/components/About";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import Capabilities from "@/components/Capabilities";
import BusinessFaq from "@/components/BusinessFaq";
import { businessFaqs } from "@/data/businessFaqs";
import { SITE_URL } from "@/lib/constants";

const Index = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: businessFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div id="main-content" className="min-h-screen bg-background">
      <Helmet>
        <title>Bobbins India | Precision Spools &amp; Reels Manufacturer</title>
        <meta
          name="description"
          content="Precision industrial spools, bobbins and reels manufactured in Mumbai since 1995. Browse 100+ variants or request a custom mould and quote."
        />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bobbins India | Precision Spools & Reels Manufacturer" />
        <meta property="og:description" content="Precision industrial spools, bobbins and reels manufactured in Mumbai since 1995. Browse 100+ variants or request a custom mould and quote." />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:image" content={`${SITE_URL}/og-default.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bobbins India | Precision Spools & Reels Manufacturer" />
        <meta name="twitter:description" content="Industrial spools, bobbins and reels for cable, wire, welding, EDM and specialty winding applications." />
        <meta name="twitter:image" content={`${SITE_URL}/og-default.png`} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div style={{ overflowX: "clip" }}>
        <Header />
        <Hero />
      </div>
      <ProductFinder />
      <ScrollShowcase />
      <Capabilities />
      <BusinessFaq />
      <div style={{ overflowX: "clip" }}>
        <About />
        <EnquiryForm />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
