import { Product } from "@/types/product";
import taperedBobbins from "@/assets/tapered-bobbins.jpg";
import weldingWire from "@/assets/welding-wire.jpg";
import compositeReels from "@/assets/composite-reels.jpg";
import edmWire from "@/assets/edm-wire.jpg";
import stitchingWire from "@/assets/stitching-wire.jpg";
import din46399 from "@/assets/din-46399.jpg";
import steelTinsel from "@/assets/steel-tinsel.jpg";
import aluminumWire from "@/assets/aluminum-wire.jpg";
import cableDelivery from "@/assets/cable-delivery.jpg";
import superTough from "@/assets/super-tough.jpg";
import jumboReels from "@/assets/jumbo-reels.jpg";
import biconical from "@/assets/biconical.jpg";
import monofilament from "@/assets/monofilament.jpg";
import miscReels from "@/assets/misc-reels.jpg";

export const products: Product[] = [
  // DIN 46383 / IEC 264-3 TAPERED BOBBINS (PLASTIC TAPER REELS)
  {
    id: "pt-1",
    name: "PT-1 Tapered Bobbin",
    price: 899.00,
    description: "DIN 46383 / IEC 264-3 compliant plastic taper reel. Available in P.P, A.B.S and P.S in standard colors.",
    category: "Tapered Bobbins",
    image: taperedBobbins,
    features: [
      "Flange Dia: 93.5/103mm",
      "Barrel Dia: 54/60mm",
      "Traverse: 98mm",
      "Overall Width: 119mm",
      "Bore: 16mm",
      "Winding Capacity: 1 kgs"
    ]
  },
  {
    id: "pt-2",
    name: "PT-2 Tapered Bobbin",
    price: 1099.00,
    description: "Medium capacity tapered bobbin for cable winding applications. Durable plastic construction.",
    category: "Tapered Bobbins",
    image: taperedBobbins,
    features: [
      "Flange Dia: 105/115mm",
      "Barrel Dia: 60/67mm",
      "Traverse: 150mm",
      "Overall Width: 169mm",
      "Bore: 16mm",
      "Winding Capacity: 2 kgs"
    ]
  },
  {
    id: "pt-4",
    name: "PT-4 Tapered Bobbin",
    price: 1399.00,
    description: "High capacity tapered spool for industrial cable manufacturing.",
    category: "Tapered Bobbins",
    image: taperedBobbins,
    features: [
      "Flange Dia: 122/140mm",
      "Barrel Dia: 74/85mm",
      "Traverse: 172mm",
      "Overall Width: 200mm",
      "Bore: 26mm",
      "Winding Capacity: 4 kgs"
    ]
  },
  {
    id: "pt-6",
    name: "PT-6 Tapered Bobbin",
    price: 1699.00,
    description: "Heavy-duty tapered bobbin for large-scale cable production.",
    category: "Tapered Bobbins",
    image: taperedBobbins,
    features: [
      "Flange Dia: 147/160mm",
      "Barrel Dia: 90/100mm",
      "Traverse: 150mm",
      "Overall Width: 180mm",
      "Bore: 20mm",
      "Winding Capacity: 6 kgs"
    ]
  },
  
  // DIN 8559 (WELDING WIRE)
  {
    id: "sd-100",
    name: "SD100 Welding Wire Spool",
    price: 599.00,
    description: "DIN 8559 compliant welding wire spool. Available in A.B.S / H.I.P.S / Polypropylene quality.",
    category: "Welding Wire",
    image: weldingWire,
    features: [
      "Flange Dia: 100mm",
      "Barrel Dia: 38mm",
      "Length: 45mm",
      "Traverse: 38.5mm",
      "Bore: 16.5mm",
      "Winding Capacity: 1.5 Kgs",
      "Weight: 50 gms"
    ]
  },
  {
    id: "sd-200",
    name: "SD200 Welding Wire Spool",
    price: 849.00,
    description: "Medium capacity welding wire spool for industrial applications.",
    category: "Welding Wire",
    image: weldingWire,
    features: [
      "Flange Dia: 200mm",
      "Barrel Dia: 105mm",
      "Length: 55mm",
      "Traverse: 45mm",
      "Bore: 51.5mm",
      "Winding Capacity: 5 kgs",
      "Weight: 260gms"
    ]
  },
  {
    id: "sd-270",
    name: "SD270 Welding Wire Spool",
    price: 1299.00,
    description: "Large capacity welding wire spool for heavy-duty operations.",
    category: "Welding Wire",
    image: weldingWire,
    features: [
      "Flange Dia: 270mm",
      "Barrel Dia: 148mm",
      "Length: 105mm",
      "Traverse: 89mm",
      "Bore: 53mm",
      "Winding Capacity: 20 kgs",
      "Weight: 700 gms"
    ]
  },

  // COMPOSITE REELS DIN 46397
  {
    id: "pf-tc-400a",
    name: "PF/TC/400 A Composite Reel",
    price: 2499.00,
    description: "Composite reel for cable and fiber industry. Dynamically balanced at 1500 rpm as per VDI 2060 Grade 6.3.",
    category: "Composite Reels",
    image: compositeReels,
    features: [
      "Flange Dia: 400mm",
      "Barrel Dia (d2/DIN): 200mm",
      "Traverse: 200-300mm",
      "Bore: 36-56mm",
      "Overall: 250-350mm",
      "Available in standard colors"
    ]
  },
  {
    id: "pf-tc-500",
    name: "PF/TC/500 Composite Reel",
    price: 2999.00,
    description: "Heavy capacity composite reel for fiber optic and cable manufacturing.",
    category: "Composite Reels",
    image: compositeReels,
    features: [
      "Flange Dia: 500mm",
      "Barrel Dia: 200mm",
      "Traverse: 250-310mm",
      "Bore: 36-56mm",
      "Overall: 300-375mm",
      "Dynamically balanced"
    ]
  },
  {
    id: "pf-tc-800",
    name: "PF/TC/800 Composite Reel",
    price: 4999.00,
    description: "Extra large composite reel for industrial cable production.",
    category: "Composite Reels",
    image: compositeReels,
    features: [
      "Flange Dia: 800mm",
      "Barrel Dia: 400mm",
      "Traverse: 500mm",
      "Bore: 80-127mm",
      "Overall: 600mm",
      "VDI 2060 Grade 6.3 certified"
    ]
  },

  // EDM WIRE REELS
  {
    id: "ep-1",
    name: "EP-1 EDM Wire Reel",
    price: 399.00,
    description: "Plastic reel suitable for EDM wire applications.",
    category: "EDM Wire",
    image: edmWire,
    features: [
      "Flange Dia: 130(6-12)mm",
      "Barrel Dia: 60(2-36)mm",
      "Traverse: 28(1-10)mm",
      "Overall: 36(1-42)mm",
      "Bore: 12.5(0-5)mm",
      "Weight Capacity: 1.2(2-65)kg"
    ]
  },
  {
    id: "ep-5",
    name: "EP-5 EDM Wire Reel",
    price: 649.00,
    description: "Medium capacity EDM wire reel for precision applications.",
    category: "EDM Wire",
    image: edmWire,
    features: [
      "Flange Dia: 160(6-3)mm",
      "Barrel Dia: 90(3-54)mm",
      "Traverse: 90(3-54)mm",
      "Overall: 112(4-41)mm",
      "Bore: 22(0-87)mm",
      "Weight Capacity: 5.0(11-0)kg"
    ]
  },

  // STITCHING WIRES
  {
    id: "sd-2",
    name: "SD-2 Stitching Wire Reel",
    price: 299.00,
    description: "Reel for stitching wire applications in textile and packaging industries.",
    category: "Stitching Wire",
    image: stitchingWire,
    features: [
      "Flange Dia: 133mm",
      "Barrel Dia: 53mm",
      "Traverse: 44mm",
      "Overall: 50mm",
      "Bore: 18mm"
    ]
  },
  {
    id: "sd-4",
    name: "SD-4 Stitching Wire Reel",
    price: 399.00,
    description: "Medium capacity stitching wire reel for industrial sewing applications.",
    category: "Stitching Wire",
    image: stitchingWire,
    features: [
      "Flange Dia: 154mm",
      "Barrel Dia: 67mm",
      "Traverse: 56mm",
      "Overall: 63mm",
      "Bore: 18mm"
    ]
  },

  // DIN 46399 SPOOLS
  {
    id: "din-63",
    name: "DIN 46399 Type 63",
    price: 449.00,
    description: "DIN 46399 standard plastic spool. All dimensions are in millimeter.",
    category: "DIN 46399",
    image: din46399,
    features: [
      "Type: 63",
      "Flange Dia: 63mm",
      "Barrel Dia: 40mm",
      "Overall: 63mm",
      "Traverse: 49mm",
      "Bore: 11mm"
    ]
  },
  {
    id: "din-100",
    name: "DIN 46399 Type 100",
    price: 599.00,
    description: "Medium capacity DIN 46399 standard spool for wire and cable.",
    category: "DIN 46399",
    image: din46399,
    features: [
      "Type: 100",
      "Flange Dia: 100mm",
      "Barrel Dia: 63mm",
      "Overall: 100mm",
      "Traverse: 80mm",
      "Bore: 16mm"
    ]
  },
  {
    id: "din-200",
    name: "DIN 46399 Type 200",
    price: 899.00,
    description: "Large capacity DIN 46399 standard spool for industrial applications.",
    category: "DIN 46399",
    image: din46399,
    features: [
      "Type: 200",
      "Flange Dia: 200mm",
      "Barrel Dia: 125mm",
      "Overall: 200mm",
      "Traverse: 160mm",
      "Bore: 22.36mm"
    ]
  },

  // STAINLESS STEEL AND TINSEL WIRE
  {
    id: "us-4",
    name: "US-4 Steel Wire Reel",
    price: 799.00,
    description: "Reel for stainless steel and tinsel wire applications.",
    category: "Steel & Tinsel",
    image: steelTinsel,
    features: [
      "Flange Dia: 162mm",
      "Barrel Dia: 90mm",
      "Traverse: 90mm",
      "Overall: 110mm",
      "Bore: 16.4mm"
    ]
  },
  {
    id: "us-200",
    name: "US-200 Steel Wire Reel",
    price: 1499.00,
    description: "Heavy-duty reel for stainless steel wire delivery.",
    category: "Steel & Tinsel",
    image: steelTinsel,
    features: [
      "Flange Dia: 200mm",
      "Barrel Dia: 114mm",
      "Traverse: 151mm",
      "Overall: 183mm",
      "Bore: 32.50mm"
    ]
  },

  // ALUMINIUM WIRE DELIVERY
  {
    id: "al-200",
    name: "AL-200 Aluminum Wire Reel",
    price: 1899.00,
    description: "Reel for delivery of aluminum wire with heavy-duty construction.",
    category: "Aluminum Wire",
    image: aluminumWire,
    features: [
      "Flange Dia: 200mm",
      "Barrel Dia: 105mm",
      "Traverse: 45mm",
      "Overall: 55mm",
      "Bore: 51mm"
    ]
  },
  {
    id: "al-320",
    name: "AL-320 Aluminum Wire Reel",
    price: 2499.00,
    description: "Large capacity reel for aluminum wire distribution.",
    category: "Aluminum Wire",
    image: aluminumWire,
    features: [
      "Flange Dia: 320mm",
      "Barrel Dia: 120mm",
      "Traverse: 67.62mm",
      "Overall: 79mm",
      "Bore: 38.2mm"
    ]
  },

  // CABLE DELIVERY REELS
  {
    id: "cd-141",
    name: "CD-141 Cable Delivery Reel",
    price: 699.00,
    description: "Reel for delivery of cables with various flange designs.",
    category: "Cable Delivery",
    image: cableDelivery,
    features: [
      "Flange Dia: 141mm",
      "Barrel Dia: 36mm",
      "Bore: 32mm",
      "Overall: 55mm",
      "Traverse: 52mm"
    ]
  },
  {
    id: "cd-230",
    name: "CD-230 Cable Delivery Reel",
    price: 1199.00,
    description: "Medium capacity cable delivery reel for industrial distribution.",
    category: "Cable Delivery",
    image: cableDelivery,
    features: [
      "Flange Dia: 230mm",
      "Barrel Dia: 92mm",
      "Bore: 72mm",
      "Overall: 120mm",
      "Traverse: 112mm"
    ]
  },

  // SUPER TOUGH REELS
  {
    id: "st-22",
    name: "22\" Super Tough Reel",
    price: 3999.00,
    description: "Super tough reel for wire drawing / stranding / bunching applications. Replacement for metal reels.",
    category: "Super Tough",
    image: superTough,
    features: [
      "Flange Dia: 22\"",
      "Barrel Dia: 14\" (355)",
      "Bore: 5\" (127)",
      "Traverse: 11.00\" (280)",
      "Winding Volume: 2485 cu.inch",
      "Winding Weight: 250 k.g."
    ]
  },
  {
    id: "st-25",
    name: "25\" Super Tough Reel",
    price: 4999.00,
    description: "Heavy capacity super tough reel for industrial wire processing.",
    category: "Super Tough",
    image: superTough,
    features: [
      "Flange Dia: 25\"",
      "Barrel Dia: 14\" (355)",
      "Bore: 5\" (127)",
      "Traverse: 15.40\" (391)",
      "Winding Volume: 5186 cu.inch",
      "Winding Weight: 525 k.g."
    ]
  },

  // JUMBO PLASTIC REELS
  {
    id: "jumbo-400",
    name: "Jumbo Reel 400mm",
    price: 2999.00,
    description: "Jumbo plastic reel for large capacity wire and cable applications.",
    category: "Jumbo Reels",
    image: jumboReels,
    features: [
      "Flange Dia: 400mm",
      "Barrel Dia: 200mm",
      "Traverse: 200mm",
      "Bore: 40mm",
      "Volume: 19.04dm³"
    ]
  },
  {
    id: "jumbo-500",
    name: "Jumbo Reel 500mm",
    price: 3799.00,
    description: "Extra large jumbo reel for heavy-duty cable manufacturing.",
    category: "Jumbo Reels",
    image: jumboReels,
    features: [
      "Flange Dia: 500mm",
      "Barrel Dia: 200,250mm",
      "Traverse: 265,300mm",
      "Bore: 40mm",
      "Volume: 43.68 / 44.15mm"
    ]
  },

  // BICONICAL SERIES
  {
    id: "bk-75",
    name: "BK 75/45 Biconical",
    price: 549.00,
    description: "Biconical series spool for specialized technical applications.",
    category: "Biconical",
    image: biconical,
    features: [
      "Size: BK 75/45",
      "Flange Dia: 52.7mm",
      "Barrel Dia: 44mm",
      "Traverse: 53mm",
      "Overall: 85mm",
      "Bore: 16.1mm"
    ]
  },
  {
    id: "bk-160",
    name: "BK 160 Biconical",
    price: 899.00,
    description: "Large biconical spool for precision winding applications.",
    category: "Biconical",
    image: biconical,
    features: [
      "Size: BK 160",
      "Flange Dia: 159.8mm",
      "Barrel Dia: 80mm",
      "Traverse: 86mm",
      "Overall: 159mm",
      "Bore: 22.3mm"
    ]
  },

  // MONOFILAMENT SERIES
  {
    id: "mono-m1",
    name: "M1 Monofilament Spool",
    price: 349.00,
    description: "Monofilament series spool for fishing line and technical filament.",
    category: "Monofilament",
    image: monofilament,
    features: [
      "Size: M1",
      "Flange Dia: 98mm",
      "Barrel Dia: 87mm",
      "Traverse: 16.9mm",
      "Bore: 14.5mm"
    ]
  },
  {
    id: "mono-hand-large",
    name: "Hand Caster Large",
    price: 599.00,
    description: "Large hand caster monofilament spool for manual operations.",
    category: "Monofilament",
    image: monofilament,
    features: [
      "Size: Hand Caster Large",
      "Flange Dia: 172.7mm",
      "Barrel Dia: 116.5mm",
      "Traverse: 30.5mm",
      "Overall: 36mm",
      "Bore: 11.5mm"
    ]
  }
];
