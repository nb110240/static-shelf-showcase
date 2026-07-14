import { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const EmailFloat = () => {
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const target = document.getElementById("enquiry-form");
    if (!target) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [location.pathname]);

  if (!visible) return null;

  const scrollToForm = () => {
    const el = document.getElementById("enquiry-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to homepage with enquiry param
      navigate("/?enquiry=");
    }
  };

  return (
    <button
      onClick={scrollToForm}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#178fbe] text-white shadow-lg hover:bg-[#136fa0] transition-colors duration-300 animate-pulse-subtle cursor-pointer"
      aria-label="Send Enquiry"
    >
      <Mail className="h-6 w-6" />

      <style>{`
        @keyframes pulse-subtle {
          0%, 100% { box-shadow: 0 0 0 0 rgba(23, 143, 190, 0.5); }
          50% { box-shadow: 0 0 0 10px rgba(23, 143, 190, 0); }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 2.5s ease-in-out infinite;
        }
      `}</style>
    </button>
  );
};

export default EmailFloat;
