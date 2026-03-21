import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_PHONE } from "@/lib/constants";

const WhatsAppFloat = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const target = document.getElementById("contact");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <a
      href={`https://wa.me/${WHATSAPP_PHONE}?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20products.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1ebe57] transition-colors duration-300 animate-pulse-subtle"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />

      <style>{`
        @keyframes pulse-subtle {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
          50% { box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 2.5s ease-in-out infinite;
        }
      `}</style>
    </a>
  );
};

export default WhatsAppFloat;
