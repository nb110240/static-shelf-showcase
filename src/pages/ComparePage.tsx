import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CompareProducts from "@/components/CompareProducts";
import { useCompare } from "@/hooks/useCompare";

const ComparePage = () => {
  const { compareItems } = useCompare();
  const navigate = useNavigate();

  useEffect(() => {
    if (compareItems.length === 0) {
      navigate("/products", { replace: true });
    }
  }, [compareItems, navigate]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <div className="pt-20">
        <CompareProducts />
      </div>
      <Footer />
    </div>
  );
};

export default ComparePage;
