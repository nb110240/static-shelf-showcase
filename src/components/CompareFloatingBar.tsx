import { useCompare } from "@/hooks/useCompare";
import { useNavigate } from "react-router-dom";
import { X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const CompareFloatingBar = () => {
  const { compareItems, clearCompare } = useCompare();
  const navigate = useNavigate();
  const [dismissed, setDismissed] = useState(false);

  // Reset dismissed state when new items are added
  useEffect(() => {
    if (compareItems.length > 0) setDismissed(false);
  }, [compareItems.length]);

  if (compareItems.length === 0 || dismissed) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 flex justify-center pb-4 px-4 pointer-events-none">
      <div className="pointer-events-auto bg-foreground text-background rounded-lg shadow-2xl px-5 py-3 flex items-center gap-4 max-w-md w-full">
        <span
          className="text-xs tracking-wide flex-1"
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
        >
          {compareItems.length} product{compareItems.length !== 1 ? "s" : ""} selected
        </span>
        <button
          onClick={() => navigate("/compare")}
          className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.16em] uppercase px-4 py-2 rounded-sm transition-colors"
          style={{ background: "#178fbe", color: "#fff" }}
        >
          Compare Now
          <ArrowRight className="h-3 w-3" />
        </button>
        <button
          onClick={() => {
            clearCompare();
            setDismissed(true);
          }}
          className="text-background/60 hover:text-background transition-colors"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default CompareFloatingBar;
