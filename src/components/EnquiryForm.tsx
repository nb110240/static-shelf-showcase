import { useState, useEffect, useRef } from "react";
import { ArrowRight, Mail, CheckCircle, Loader2, MessageCircle } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { COMPANY_EMAIL, whatsappUrl } from "@/lib/constants";
import { track } from "@vercel/analytics";

const FORM_ENDPOINT = "/api/enquiry";
const SUBMIT_TIMEOUT_MS = 12_000;

const EnquiryForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const startedAt = useRef(Date.now());
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    product: "",
    quantity: "",
    requirement: "",
    website: "",
  });

  // Pre-fill product from URL param (e.g. ?enquiry=BK+80)
  useEffect(() => {
    const product = searchParams.get("enquiry");
    if (product) {
      setForm((prev) => ({
        ...prev,
        product,
        requirement: prev.requirement || `I'd like to enquire about: ${product}`,
      }));
      searchParams.delete("enquiry");
      setSearchParams(searchParams, { replace: true });
      setTimeout(() => {
        document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [searchParams, setSearchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === "error") setStatus("idle");
  };

  const enquiryMessage = [
    "Hello Bobbins India, I'd like to make an enquiry.",
    "",
    `Name: ${form.name}`,
    form.company ? `Company: ${form.company}` : null,
    `Phone: ${form.phone}`,
    form.email ? `Email: ${form.email}` : null,
    `Product: ${form.product || "General enquiry"}`,
    form.quantity ? `Estimated quantity: ${form.quantity}` : null,
    "",
    "Requirement:",
    form.requirement,
  ]
    .filter((line) => line !== null)
    .join("\n");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // A filled honeypot indicates an automated submission. Return a neutral
    // success state so bots do not learn how the filter works.
    if (form.website) {
      setStatus("sent");
      return;
    }

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), SUBMIT_TIMEOUT_MS);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          name: form.name,
          company: form.company || "Not provided",
          phone: form.phone,
          email: form.email || "Not provided",
          product: form.product || "General enquiry",
          quantity: form.quantity || "Not provided",
          requirement: form.requirement,
          website: form.website,
          sourceUrl: window.location.href,
          startedAt: startedAt.current,
        }),
      });

      const data = await res.json().catch(() => null);
      const ok = res.ok && data && String(data.success).toLowerCase() === "true";
      if (ok) {
        setStatus("sent");
        track("enquiry_submitted", { product: form.product || "General enquiry" });
        setForm({ name: "", company: "", phone: "", email: "", product: "", quantity: "", requirement: "", website: "" });
        startedAt.current = Date.now();
      } else {
        setStatus("error");
        track("enquiry_failed", { reason: data?.error || `HTTP ${res.status}` });
      }
    } catch {
      setStatus("error");
      track("enquiry_failed", { reason: "Network or timeout" });
    } finally {
      window.clearTimeout(timeout);
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors duration-200";

  return (
    <section id="enquiry-form" className="relative py-28">
      <div className="absolute inset-0 bg-blueprint-grid" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/[0.03] blur-[100px] pointer-events-none" />

      <div className="container relative">
        {/* Label */}
        <div className="flex items-center gap-4 mb-5">
          <div className="h-[2px] w-10 bg-[#178fbe]" />
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#178fbe]">
            Enquiry
          </span>
        </div>

        <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-[1.2] tracking-wider text-foreground mb-4">
          SEND US AN<br />
          <span className="text-primary">ENQUIRY</span>
        </h2>
        <p className="text-muted-foreground text-sm leading-[1.8] max-w-md mb-12">
          Need a specific reel, custom mould, or a quote? Share the application, dimensions and estimated quantity so our team can match the right product.
        </p>

        {status === "sent" ? (
          <div className="max-w-2xl rounded-lg border border-green-200 bg-green-50 p-8 sm:p-12 text-center">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="font-display text-xl tracking-wider text-foreground mb-2">
              ENQUIRY SENT
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Thank you. Your requirement has reached our team and we will follow up using the contact details provided.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary hover:text-primary/70 transition-colors"
            >
              Send another enquiry
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            action="/api/enquiry"
            method="POST"
            className="max-w-2xl rounded-lg border border-border bg-card p-6 sm:p-8"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="absolute -left-[10000px]" aria-hidden="true">
              <label htmlFor="enquiry-website">Website</label>
              <input
                id="enquiry-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={handleChange}
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              {/* Name */}
              <div>
                <label htmlFor="enquiry-name" className="block font-mono text-[11px] text-muted-foreground uppercase tracking-[0.2em] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="enquiry-name"
                  required
                  maxLength={100}
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClasses}
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="enquiry-company" className="block font-mono text-[11px] text-muted-foreground uppercase tracking-[0.2em] mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  id="enquiry-company"
                  maxLength={120}
                  autoComplete="organization"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Company name"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              {/* Phone */}
              <div>
                <label htmlFor="enquiry-phone" className="block font-mono text-[11px] text-muted-foreground uppercase tracking-[0.2em] mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="enquiry-phone"
                  required
                  maxLength={20}
                  pattern="[0-9+\-\s]+"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98201 12345"
                  className={inputClasses}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="enquiry-email" className="block font-mono text-[11px] text-muted-foreground uppercase tracking-[0.2em] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="enquiry-email"
                  maxLength={100}
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className={inputClasses}
                />
              </div>

            </div>

            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              {/* Product */}
              <div>
                <label htmlFor="enquiry-product" className="block font-mono text-[11px] text-muted-foreground uppercase tracking-[0.2em] mb-2">
                  Product
                </label>
                <input
                  type="text"
                  name="product"
                  id="enquiry-product"
                  maxLength={100}
                  value={form.product}
                  onChange={handleChange}
                  placeholder="e.g. BK 80, Super Tough 25&quot;"
                  className={inputClasses}
                />
              </div>

              {/* Quantity */}
              <div>
                <label htmlFor="enquiry-quantity" className="block font-mono text-[11px] text-muted-foreground uppercase tracking-[0.2em] mb-2">
                  Estimated Quantity
                </label>
                <input
                  type="text"
                  name="quantity"
                  id="enquiry-quantity"
                  maxLength={60}
                  value={form.quantity}
                  onChange={handleChange}
                  placeholder="e.g. 5,000 pieces"
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Requirement */}
            <div className="mb-8">
              <label htmlFor="enquiry-requirement" className="block font-mono text-[11px] text-muted-foreground uppercase tracking-[0.2em] mb-2">
                Requirement *
              </label>
              <textarea
                name="requirement"
                id="enquiry-requirement"
                required
                rows={4}
                maxLength={500}
                value={form.requirement}
                onChange={handleChange}
                placeholder="Describe your reel/bobbin requirement — dimensions, material, quantity..."
                className={inputClasses + " resize-none"}
              />
              <p className="mt-1.5 text-right font-mono text-[11px] text-muted-foreground tracking-wider">
                {500 - form.requirement.length} characters remaining
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#178fbe] text-white text-[11px] font-semibold tracking-[0.2em] uppercase rounded-sm hover:bg-[#136fa0] transition-all duration-300 group disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Mail className="h-3.5 w-3.5" />
              )}
              {status === "sending" ? "Sending..." : "Send Enquiry"}
              {status !== "sending" && (
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              )}
            </button>

            <p className="mt-4 max-w-xl text-xs leading-5 text-muted-foreground">
              Your details are used only to respond to this product or quotation enquiry. For faster matching, include flange, barrel, bore and traverse dimensions where available.
            </p>

            <div aria-live="polite" aria-atomic="true">
              {status === "error" && (
                <div className="mt-5 rounded-md border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
                  <p className="mb-3">
                    The email service is temporarily unavailable. Please send the same enquiry using one of these direct options:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={whatsappUrl(enquiryMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#25D366] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white hover:bg-[#1ebe57]"
                    >
                      <MessageCircle className="h-4 w-4" /> Send via WhatsApp
                    </a>
                    <a
                      href={`mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(form.product ? `Website Enquiry: ${form.product}` : "Website Product Enquiry")}&body=${encodeURIComponent(enquiryMessage)}`}
                      className="inline-flex items-center justify-center gap-2 rounded-sm border border-amber-400 bg-white px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-950 hover:bg-amber-100"
                    >
                      <Mail className="h-4 w-4" /> Email directly
                    </a>
                  </div>
                </div>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default EnquiryForm;
