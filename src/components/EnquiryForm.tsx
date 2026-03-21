import { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_PHONE } from "@/lib/constants";

const EnquiryForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      `Hi, I'd like to request a custom mould.`,
      ``,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      ``,
      `Requirement:`,
      form.requirement,
    ]
      .filter((l) => l !== null)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const inputClasses =
    "w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors duration-200";

  return (
    <section className="relative py-28">
      <div className="absolute inset-0 bg-blueprint-grid" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/[0.03] blur-[100px] pointer-events-none" />

      <div className="container relative">
        {/* Label */}
        <div className="flex items-center gap-4 mb-5">
          <div className="h-[2px] w-10 bg-[#178fbe]" />
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#178fbe]">
            Custom Moulds
          </span>
        </div>

        <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-[1.2] tracking-wider text-foreground mb-4">
          REQUEST A<br />
          <span className="text-primary">CUSTOM MOULD</span>
        </h2>
        <p className="text-muted-foreground text-sm leading-[1.8] max-w-md mb-12">
          Need a reel or bobbin in non-standard dimensions? Share your requirements and we'll get back to you with a quote.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl rounded-lg border border-border bg-card p-6 sm:p-8"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            {/* Name */}
            <div>
              <label className="block font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em] mb-2">
                Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={inputClasses}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em] mb-2">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98201 12345"
                className={inputClasses}
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em] mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className={inputClasses}
            />
          </div>

          {/* Requirement */}
          <div className="mb-8">
            <label className="block font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em] mb-2">
              Requirement *
            </label>
            <textarea
              name="requirement"
              required
              rows={4}
              value={form.requirement}
              onChange={handleChange}
              placeholder="Describe your reel/bobbin requirement — dimensions, material, quantity..."
              className={inputClasses + " resize-none"}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white text-[11px] font-semibold tracking-[0.2em] uppercase rounded-sm hover:bg-[#1ebe57] transition-all duration-300 group"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Send via WhatsApp
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;
