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
    name: "Premium Wireless Headphones",
    price: 299.99,
    description: "Experience crystal-clear audio with advanced noise cancellation technology. Perfect for music lovers and professionals alike.",
    category: "Audio",
    image: product1,
    features: [
      "Active Noise Cancellation",
      "40-hour battery life",
      "Premium sound quality",
      "Comfortable over-ear design"
    ]
  },
  {
    id: "2",
    name: "Luxury Smart Watch",
    price: 449.99,
    description: "Stay connected and track your fitness goals with this elegant smartwatch featuring premium materials and advanced health monitoring.",
    category: "Wearables",
    image: product2,
    features: [
      "Heart rate monitoring",
      "GPS tracking",
      "Water resistant",
      "5-day battery life"
    ]
  },
  {
    id: "3",
    name: "Mechanical Keyboard Pro",
    price: 189.99,
    description: "Elevate your typing experience with this premium mechanical keyboard featuring customizable RGB lighting and tactile switches.",
    category: "Accessories",
    image: product3,
    features: [
      "Mechanical switches",
      "RGB backlighting",
      "Aluminum frame",
      "Programmable keys"
    ]
  },
  {
    id: "4",
    name: "Designer Wireless Mouse",
    price: 99.99,
    description: "Precision meets elegance with this ergonomically designed wireless mouse. Perfect for both work and creative projects.",
    category: "Accessories",
    image: product4,
    features: [
      "Ergonomic design",
      "High-precision sensor",
      "60-day battery",
      "Multi-device pairing"
    ]
  },
  {
    id: "5",
    name: "Portable Bluetooth Speaker",
    price: 149.99,
    description: "Take your music anywhere with this powerful portable speaker. Waterproof design and exceptional sound quality in a compact form.",
    category: "Audio",
    image: product5,
    features: [
      "360° sound",
      "Waterproof IP67",
      "20-hour playtime",
      "USB-C charging"
    ]
  },
  {
    id: "6",
    name: "Premium Laptop Stand",
    price: 79.99,
    description: "Improve your workspace ergonomics with this sleek aluminum laptop stand. Adjustable height and angles for optimal comfort.",
    category: "Accessories",
    image: product6,
    features: [
      "Adjustable height",
      "Aluminum construction",
      "Heat dissipation",
      "Universal compatibility"
    ]
  }
];
