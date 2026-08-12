import { CheckCircle2, Mail, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { COMPANY_EMAIL, SITE_URL } from "@/lib/constants";

const ThankYou = () => (
  <div id="main-content" className="min-h-screen bg-background">
    <Helmet>
      <title>Thank You for Your Enquiry | Bobbins India</title>
      <meta
        name="description"
        content="Thank you for contacting Bobbins India. Our team aims to acknowledge website enquiries within one business day."
      />
      <meta name="robots" content="noindex,follow" />
      <link rel="canonical" href={`${SITE_URL}/thank-you`} />
    </Helmet>
    <Header />
    <main className="flex min-h-[75vh] items-center px-6 pb-20 pt-32">
      <div className="mx-auto w-full max-w-2xl rounded-xl border border-border bg-card p-8 text-center shadow-sm sm:p-12">
        <CheckCircle2 className="mx-auto h-14 w-14 text-primary" aria-hidden="true" />
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Enquiry received</p>
        <h1 className="mt-3 font-display text-3xl tracking-wider text-foreground sm:text-4xl">THANK YOU</h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
          Your requirement has reached Bobbins India. We aim to acknowledge website enquiries within one business day; detailed custom or tooling reviews may require additional time.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <a href="tel:+918928154150" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-border px-5 text-xs font-semibold uppercase tracking-[0.14em] text-foreground hover:border-primary/40 hover:text-primary">
            <Phone className="h-4 w-4" aria-hidden="true" /> +91 89281 54150
          </a>
          <a href={`mailto:${COMPANY_EMAIL}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-border px-5 text-xs font-semibold uppercase tracking-[0.14em] text-foreground hover:border-primary/40 hover:text-primary">
            <Mail className="h-4 w-4" aria-hidden="true" /> Email Sales
          </a>
        </div>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/products" className="rounded-sm bg-primary px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-white hover:bg-primary/85">
            Browse Products
          </Link>
          <Link to="/" className="rounded-sm border border-border px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground hover:border-primary/30 hover:text-primary">
            Return Home
          </Link>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default ThankYou;
