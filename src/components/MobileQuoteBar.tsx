import { Mail, Phone } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { track } from "@vercel/analytics";

const MobileQuoteBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const openEnquiry = () => {
    track("quote_intent", { source: "mobile_sticky_cta" });
    if (location.pathname === "/") {
      document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    navigate("/#enquiry-form");
    window.setTimeout(() => {
      document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth" });
    }, 350);
  };

  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#081927]/95 p-2 shadow-[0_-8px_25px_rgba(0,0,0,0.2)] backdrop-blur-xl md:hidden"
    >
      <div className="mx-auto grid max-w-lg grid-cols-[0.8fr_1.2fr] gap-2">
        <a
          href="tel:+918928154150"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/20 text-xs font-semibold uppercase tracking-[0.12em] text-white"
        >
          <Phone className="h-4 w-4" aria-hidden="true" /> Call
        </a>
        <button
          onClick={openEnquiry}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#178fbe] px-4 text-xs font-semibold uppercase tracking-[0.12em] text-white"
        >
          <Mail className="h-4 w-4" aria-hidden="true" /> Request a Quote
        </button>
      </div>
    </aside>
  );
};

export default MobileQuoteBar;
