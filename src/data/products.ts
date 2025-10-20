import { Product } from "@/types/product";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Industrial Cable Spool - 500mm",
    price: 2499.00,
    description: "Heavy-duty industrial spool designed for high-capacity cable winding. Perfect for large-scale cable manufacturing operations.",
    category: "Industrial",
    image: product1,
    features: [
      "Diameter: 500mm",
      "High load capacity",
      "Durable plastic construction",
      "Suitable for heavy cables"
    ]
  },
  {
    id: "2",
    name: "Medium Wire Spool - 300mm",
    price: 1299.00,
    description: "Versatile medium-sized spool ideal for wire and cable production. Designed for optimal performance and durability.",
    category: "Medium Duty",
    image: product2,
    features: [
      "Diameter: 300mm",
      "Balanced design",
      "Lightweight yet strong",
      "Multi-purpose application"
    ]
  },
  {
    id: "3",
    name: "Precision Winding Spool - 200mm",
    price: 899.00,
    description: "Compact spool engineered for precision winding applications. Ideal for fine wire and specialized cable production.",
    category: "Precision",
    image: product3,
    features: [
      "Diameter: 200mm",
      "Precision molded",
      "Smooth winding surface",
      "Perfect for thin cables"
    ]
  },
  {
    id: "4",
    name: "Heavy Duty Cable Reel - 630mm",
    price: 3499.00,
    description: "Extra-large capacity reel for industrial cable production. Built to withstand demanding manufacturing environments.",
    category: "Heavy Duty",
    image: product4,
    features: [
      "Diameter: 630mm",
      "Maximum load capacity",
      "Reinforced construction",
      "Industrial grade quality"
    ]
  },
  {
    id: "5",
    name: "Standard Wire Bobbin - 250mm",
    price: 999.00,
    description: "Reliable standard bobbin for everyday wire production needs. Consistent quality and performance guaranteed.",
    category: "Standard",
    image: product5,
    features: [
      "Diameter: 250mm",
      "Cost-effective solution",
      "Proven reliability",
      "Wide industry acceptance"
    ]
  },
  {
    id: "6",
    name: "Custom Moulded Spool - 400mm",
    price: 1899.00,
    description: "Specialized spool with custom design capabilities. Can be tailored to meet specific industry requirements.",
    category: "Custom",
    image: product6,
    features: [
      "Diameter: 400mm",
      "Custom design available",
      "Flexible specifications",
      "Industry-specific solutions"
    ]
  }
];
