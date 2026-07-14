import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY_EMAIL, SITE_URL } from "@/lib/constants";

const Privacy = () => (
  <div id="main-content" className="min-h-screen bg-background">
    <Helmet>
      <title>Privacy Notice | Bobbins India</title>
      <meta name="description" content="How Bobbins India handles information submitted through its website and product enquiry forms." />
      <link rel="canonical" href={`${SITE_URL}/privacy`} />
      <meta name="robots" content="index,follow" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Privacy Notice | Bobbins India" />
      <meta property="og:description" content="How Bobbins India handles information submitted through its website and product enquiry forms." />
      <meta property="og:url" content={`${SITE_URL}/privacy`} />
    </Helmet>
    <Header />
    <main className="container max-w-4xl pb-20 pt-32">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">Last updated 14 July 2026</p>
      <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3.5rem)] tracking-wider text-foreground">Privacy Notice</h1>
      <p className="mt-6 text-base leading-8 text-muted-foreground">
        This notice explains how Bobbins India uses information provided through bobbinsindia.net.
      </p>
      <div className="prose prose-slate mt-10 max-w-none prose-headings:font-display prose-headings:tracking-wide prose-a:text-primary">
        <h2>Information we collect</h2>
        <p>When you submit an enquiry, we may collect your name, company, phone number, email address, product interest, estimated quantity, requirement details and the page used to submit the enquiry.</p>
        <h2>How we use it</h2>
        <p>We use enquiry information to review product requirements, respond to questions, prepare quotations and maintain appropriate business correspondence. We do not sell enquiry information.</p>
        <h2>Service providers</h2>
        <p>The website is hosted by Vercel. Transactional enquiry emails may be processed by our configured email-delivery provider. These providers process limited information needed to operate and secure the website and deliver the requested message.</p>
        <h2>Retention and security</h2>
        <p>We retain business correspondence only for as long as reasonably necessary for the enquiry, commercial relationship, record-keeping and applicable legal obligations. We use reasonable technical controls, but no internet transmission can be guaranteed completely secure.</p>
        <h2>Your choices</h2>
        <p>You may ask us to correct or delete enquiry information, subject to applicable record-keeping requirements. You may also contact us directly instead of using the website form.</p>
        <h2>Contact</h2>
        <p>For privacy questions, email <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a> or write to Sudhir Enterprise, 12 B, Chandivali, Off Saki Vihar Road, Andheri East, Mumbai 400072, Maharashtra, India.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Privacy;
