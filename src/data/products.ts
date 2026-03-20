import { Product } from "@/types/product";
import taperedBobbinsNew from "@/assets/tapered-bobbins-studio.jpg";
import weldingWireNew from "@/assets/welding-wire-studio.jpg";
import compositeReelsNew from "@/assets/composite-reels-new.jpg";
import compPfTc380 from "@/assets/composite/pf-tc-380.jpg";
import compPfTc400 from "@/assets/composite/pf-tc-400.jpg";
import compPfTc432 from "@/assets/composite/pf-tc-432.jpg";
import compPfTc450 from "@/assets/composite/pf-tc-450.jpg";
import compPfTc500 from "@/assets/composite/pf-tc-500.jpg";
import compPfTc550 from "@/assets/composite/pf-tc-550.jpg";
import compPfTc560 from "@/assets/composite/pf-tc-560.jpg";
import compPfTc600 from "@/assets/composite/pf-tc-600.jpg";
import compPfTc630 from "@/assets/composite/pf-tc-630.jpg";
import compPfTc710 from "@/assets/composite/pf-tc-710.jpg";
import compPfTc800 from "@/assets/composite/pf-tc-800.jpg";
import compPfTc1000 from "@/assets/composite/pf-tc-1000.jpg";
import compPfTc1250 from "@/assets/composite/pf-tc-1250.jpg";
import edmWireNew from "@/assets/edm-wire-studio.jpg";
import stitchingWireNew from "@/assets/stitching-wire-studio.jpg";
import din46399New from "@/assets/din-46399-new.jpg";
import cylindricalReelsNew from "@/assets/cylindrical-reels-studio.jpg";
import dinS1 from "@/assets/din-s1.jpg";
import dinS2 from "@/assets/din-s2.jpg";
import dinS3 from "@/assets/din-s3.jpg";
import dinS6 from "@/assets/din-s6.jpg";
import dinS12 from "@/assets/din-s12.jpg";
import dinS22 from "@/assets/din-s22.jpg";
import dinS48 from "@/assets/din-s48.jpg";
import steelTinselNew from "@/assets/steel-tinsel-studio.jpg";
import aluminumWireNew from "@/assets/aluminum-wire-new.jpg";
import aluminumReel200 from "@/assets/aluminum-reel-200.jpg";
import aluminumReel320 from "@/assets/aluminum-reel-320.jpg";
import cableDeliveryNew from "@/assets/cable-delivery-reels.png";
import superToughNew from "@/assets/super-tough-new.jpg";
import superTough1 from "@/assets/super-tough-1.jpg";
import superTough2 from "@/assets/super-tough-2.jpg";
import superTough3 from "@/assets/super-tough-3.jpg";
import superTough4 from "@/assets/super-tough-4.jpg";
import superTough5 from "@/assets/super-tough-5.jpg";
import superTough6 from "@/assets/super-tough-6.jpg";
import jumboReelsNew from "@/assets/jumbo-reels-studio.jpg";
import jumboReel1 from "@/assets/jumbo-reel-1.jpg";
import jumboReel2 from "@/assets/jumbo-reel-2.jpg";
import jumboReel3 from "@/assets/jumbo-reel-3.jpg";
import jumboReel4 from "@/assets/jumbo-reel-4.jpg";
import jumboReel5 from "@/assets/jumbo-reel-5.jpg";
import jumboReel6 from "@/assets/jumbo-reel-6.jpg";
import jumboReel7 from "@/assets/jumbo-reel-7.jpg";
import jumboReel8 from "@/assets/jumbo-reel-8.jpg";
import jumboReel9 from "@/assets/jumbo-reel-9.jpg";
import jumboReel10 from "@/assets/jumbo-reel-10.jpg";
import jumboReel11 from "@/assets/jumbo-reel-11.jpg";
import biconicalNew from "@/assets/biconical-new.jpg";
import monofilamentNew from "@/assets/monofilament-new.jpg";
import miscReelsNew from "@/assets/misc-reels-studio.jpg";
import miscReel1 from "@/assets/misc-reel-1.jpg";
import miscReel2 from "@/assets/misc-reel-2.jpg";
import isiReelsNew from "@/assets/isi-reels-studio.jpg";
import copperConductorNew from "@/assets/copper-conductor-studio.jpg";

export const products: Product[] = [
  // 1. TAPERED BOBBINS (DIN 46383 / IEC 264-3)
  {
    id: "pt-1",
    name: "PT-1 Tapered Bobbin",
    description: "DIN 46383 / IEC 264-3 compliant plastic taper reel. Available in P.P, A.B.S and P.S in standard colors.",
    category: "Tapered Bobbins",
    image: taperedBobbinsNew,
    features: [
      "Ref. No: PT-1",
      "Flange Dia: 93.5/103mm (3.68/4.06 inch)",
      "Barrel Dia: 54/60mm (2.13/2.36 inch)",
      "Traverse: 98mm (3.85 inch)",
      "Overall Width: 119mm (4.68 inch)",
      "Bore: 16mm (0.63 inch)",
      "Weight Capacity: 1kg (2.20 lbs)"
    ]
  },
  {
    id: "pt-2",
    name: "PT-2 Tapered Bobbin",
    description: "Medium capacity tapered bobbin for cable winding applications. Durable plastic construction.",
    category: "Tapered Bobbins",
    image: taperedBobbinsNew,
    features: [
      "Ref. No: PT-2",
      "Flange Dia: 105/115mm (4.13/4.53 inch)",
      "Barrel Dia: 60/67mm (2.36/2.64 inch)",
      "Traverse: 150mm (5.90 inch)",
      "Overall Width: 169mm (6.65 inch)",
      "Bore: 16mm (0.63 inch)",
      "Weight Capacity: 2kg (4.40 lbs)"
    ]
  },
  {
    id: "pt-4",
    name: "PT-4 Tapered Bobbin",
    description: "High capacity tapered spool for industrial cable manufacturing.",
    category: "Tapered Bobbins",
    image: taperedBobbinsNew,
    features: [
      "Ref. No: PT-4",
      "Flange Dia: 122/140mm (4.80/5.51 inch)",
      "Barrel Dia: 74/85mm (2.91/3.35 inch)",
      "Traverse: 172mm (6.77 inch)",
      "Overall Width: 200mm (7.87 inch)",
      "Bore: 26mm (1.02 inch)",
      "Weight Capacity: 4kg (8.80 lbs)"
    ]
  },
  {
    id: "pt-6",
    name: "PT-6 Tapered Bobbin",
    description: "Heavy-duty tapered bobbin for large-scale cable production.",
    category: "Tapered Bobbins",
    image: taperedBobbinsNew,
    features: [
      "Ref. No: PT-6",
      "Flange Dia: 147/160mm (5.78/6.30 inch)",
      "Barrel Dia: 90/100mm (3.54/4.25 inch)",
      "Traverse: 150mm (5.90 inch)",
      "Overall Width: 180mm (7.08 inch)",
      "Bore: 20mm (0.78 inch)",
      "Weight Capacity: 6kg (13.20 lbs)"
    ]
  },
  {
    id: "pt-10",
    name: "PT-10 Tapered Bobbin",
    description: "Large capacity tapered bobbin for professional cable manufacturing.",
    category: "Tapered Bobbins",
    image: taperedBobbinsNew,
    features: [
      "Ref. No: PT-10",
      "Flange Dia: 157/180mm (6.18/7.08 inch)",
      "Barrel Dia: 95/108mm (3.74/4.25 inch)",
      "Traverse: 202mm (7.95 inch)",
      "Overall Width: 226mm (8.90 inch)",
      "Bore: 30mm (1.18 inch)",
      "Weight Capacity: 10kg (22.0 lbs)"
    ]
  },
  {
    id: "pt-11",
    name: "PT-11 Tapered Bobbin",
    description: "High performance tapered bobbin with 12kg capacity.",
    category: "Tapered Bobbins",
    image: taperedBobbinsNew,
    features: [
      "Ref. No: PT-11",
      "Flange Dia: 170/180mm (6.69/7.09 inch)",
      "Barrel Dia: 104/110mm (4.09/4.33 inch)",
      "Traverse: 200mm (7.87 inch)",
      "Overall Width: 230mm (9.06 inch)",
      "Bore: 22.5mm (0.89 inch)",
      "Weight Capacity: 12kg (26.5 lbs)"
    ]
  },
  {
    id: "pt-15",
    name: "PT-15 Tapered Bobbin",
    description: "High-performance tapered bobbin for industrial applications.",
    category: "Tapered Bobbins",
    image: taperedBobbinsNew,
    features: [
      "Ref. No: PT-15",
      "Flange Dia: 180/200mm (7.08/7.87 inch)",
      "Barrel Dia: 95/110mm (3.74/4.33 inch)",
      "Traverse: 201mm (7.91 inch)",
      "Overall Width: 225mm (8.85 inch)",
      "Bore: 30mm (1.18 inch)",
      "Weight Capacity: 15kg (33.0 lbs)"
    ]
  },
  {
    id: "pt-18",
    name: "PT-18 Tapered Bobbin",
    description: "Medium-capacity tapered bobbin with fine groove reel design. Available in PP.",
    category: "Tapered Bobbins",
    image: taperedBobbinsNew,
    features: [
      "Ref. No: PT-18",
      "Flange Dia: 187/207mm (7.36/8.15 inch)",
      "Barrel Dia: 94/109mm (3.70/4.29 inch)",
      "Traverse: 209mm (8.23 inch)",
      "Overall Width: 237mm (9.33 inch)",
      "Bore: 31mm (1.22 inch)",
      "Weight Capacity: 18kg (39.7 lbs)"
    ]
  },
  {
    id: "pt-20",
    name: "PT-20 Tapered Bobbin",
    description: "Extra large tapered bobbin for maximum capacity operations.",
    category: "Tapered Bobbins",
    image: taperedBobbinsNew,
    features: [
      "Ref. No: PT-20",
      "Flange Dia: 212/230mm (8.34/9.06 inch)",
      "Barrel Dia: 132/150mm (5.20/5.91 inch)",
      "Traverse: 247mm (9.72 inch)",
      "Overall Width: 277mm (10.90 inch)",
      "Bore: 32mm (1.25 inch)",
      "Weight Capacity: 20kg (44.0 lbs)"
    ]
  },
  {
    id: "pt-25",
    name: "PT-25 Tapered Bobbin",
    description: "Industrial grade tapered bobbin for heavy-duty cable production.",
    category: "Tapered Bobbins",
    image: taperedBobbinsNew,
    features: [
      "Ref. No: PT-25",
      "Flange Dia: 215/230mm (8.46/9.05 inch)",
      "Barrel Dia: 110/130mm (4.33/5.12 inch)",
      "Traverse: 250mm (9.84 inch)",
      "Overall Width: 275mm (10.82 inch)",
      "Bore: 30mm (1.18 inch)",
      "Weight Capacity: 25kg (55.0 lbs)"
    ]
  },
  {
    id: "pt-30",
    name: "PT-30 Tapered Bobbin",
    description: "High-capacity tapered bobbin with fine groove reel design. Available in PP Black.",
    category: "Tapered Bobbins",
    image: taperedBobbinsNew,
    features: [
      "Ref. No: PT-30",
      "Flange Dia: 238/253mm (9.37/9.96 inch)",
      "Barrel Dia: 150/170mm (5.91/6.69 inch)",
      "Traverse: 270mm (10.63 inch)",
      "Overall Width: 310mm (12.20 inch)",
      "Bore: 32mm (1.26 inch)",
      "Weight Capacity: 30kg (66.1 lbs)"
    ]
  },
  {
    id: "pt-35",
    name: "PT-35 Tapered Bobbin",
    description: "Heavy-duty tapered bobbin for industrial cable winding. Available in PP.",
    category: "Tapered Bobbins",
    image: taperedBobbinsNew,
    features: [
      "Ref. No: PT-35",
      "Flange Dia: 242/257mm (9.53/10.12 inch)",
      "Barrel Dia: 110/129mm (4.33/5.08 inch)",
      "Traverse: 275mm (10.83 inch)",
      "Overall Width: 305mm (12.01 inch)",
      "Bore: 32mm (1.26 inch)",
      "Weight Capacity: 35kg (77.2 lbs)"
    ]
  },
  {
    id: "pt-45",
    name: "PT-45 Tapered Bobbin",
    description: "High-capacity tapered bobbin for professional cable manufacturing.",
    category: "Tapered Bobbins",
    image: taperedBobbinsNew,
    features: [
      "Ref. No: PT-45",
      "Flange Dia: 236/250mm (9.29/9.84 inch)",
      "Barrel Dia: 140/160mm (5.51/6.30 inch)",
      "Traverse: 335mm (13.18 inch)",
      "Overall Width: 400mm (15.75 inch)",
      "Bore: 100mm (3.93 inch)",
      "Weight Capacity: 45kg (99.0 lbs)"
    ]
  },
  {
    id: "pt-60",
    name: "PT-60 Tapered Bobbin",
    description: "Heavy-duty tapered bobbin with 60kg capacity for industrial applications.",
    category: "Tapered Bobbins",
    image: taperedBobbinsNew,
    features: [
      "Ref. No: PT-60",
      "Flange Dia: 296/267mm (11.65/10.51 inch)",
      "Barrel Dia: 176/149mm (6.93/5.87 inch)",
      "Traverse: 347mm (13.66 inch)",
      "Overall Width: 395mm (15.55 inch)",
      "Bore: 44mm (1.73 inch)",
      "Weight Capacity: 60kg (132 lbs)"
    ]
  },
  {
    id: "pt-90",
    name: "PT-90 Tapered Bobbin",
    description: "Maximum capacity tapered bobbin for industrial-scale cable production.",
    category: "Tapered Bobbins",
    image: taperedBobbinsNew,
    features: [
      "Ref. No: PT-90",
      "Flange Dia: 300/315mm (11.81/12.40 inch)",
      "Barrel Dia: 180/200mm (7.09/7.87 inch)",
      "Traverse: 425mm (16.73 inch)",
      "Overall Width: 500mm (19.69 inch)",
      "Bore: 100mm (3.93 inch)",
      "Weight Capacity: 90kg (198.0 lbs)"
    ]
  },
  {
    id: "pt-200",
    name: "PT-200 Tapered Bobbin",
    description: "Extra-large capacity tapered bobbin with tie rod assembly for heavy industrial cable production. Available in PP.",
    category: "Tapered Bobbins",
    image: taperedBobbinsNew,
    features: [
      "Ref. No: PT-200",
      "Flange Dia: 369/395mm (14.53/15.55 inch)",
      "Barrel Dia: 221.4/246.4mm (8.72/9.70 inch)",
      "Traverse: 521mm (20.51 inch)",
      "Overall Width: 617mm (24.29 inch)",
      "Bore: 100mm (3.94 inch)",
      "Weight Capacity: 200kg (440.9 lbs)"
    ]
  },

  // 2. WELDING WIRE (DIN 8559)
  {
    id: "sd-100",
    name: "SD100 Welding Wire Spool",
    description: "DIN 8559 compliant welding wire spool. Available in A.B.S / H.I.P.S / Polypropylene quality. General colors are cream and black, other colors available on request.",
    category: "Welding Wire",
    image: weldingWireNew,
    features: [
      "Flange Dia (d1): 100mm",
      "Barrel Dia (d2): 38mm",
      "Length: 45mm",
      "Traverse (L2): 38.5mm",
      "Bore (d4): 16.5mm",
      "Winding Capacity: 1.5 Kgs",
      "Weight of Bobbin: 50 gms"
    ]
  },
  {
    id: "sd-200",
    name: "SD200 Welding Wire Spool",
    description: "Medium capacity welding wire spool for industrial applications. Available in A.B.S / H.I.P.S / Polypropylene quality.",
    category: "Welding Wire",
    image: weldingWireNew,
    features: [
      "Flange Dia (d1): 200mm",
      "Barrel Dia (d2): 105mm",
      "Length: 55mm",
      "Traverse (L2): 45mm",
      "Bore (d4): 51.5mm",
      "Winding Capacity: 5 kgs",
      "Weight of Bobbin: 260 gms"
    ]
  },
  {
    id: "sd-270",
    name: "SD270 Welding Wire Spool",
    description: "Large capacity welding wire spool for heavy-duty operations. Available in A.B.S / H.I.P.S / Polypropylene quality.",
    category: "Welding Wire",
    image: weldingWireNew,
    features: [
      "Flange Dia (d1): 270mm",
      "Barrel Dia (d2): 148mm",
      "Length: 105mm",
      "Traverse (L2): 89mm",
      "Bore (d4): 53mm",
      "Winding Capacity: 20 kgs",
      "Weight of Bobbin: 700 gms"
    ]
  },
  {
    id: "sd-300",
    name: "SD300 Welding Wire Spool",
    description: "High-capacity welding wire spool for professional applications. Available in A.B.S / H.I.P.S / Polypropylene quality.",
    category: "Welding Wire",
    image: weldingWireNew,
    features: [
      "Flange Dia (d1): 300mm",
      "Barrel Dia (d2): 212mm",
      "Length: 103mm",
      "Traverse (L2): 91mm",
      "Bore (d4): 51.5mm",
      "Winding Capacity: 15 kgs",
      "Weight of Bobbin: 780 gms"
    ]
  },
  {
    id: "sd-300-alt",
    name: "SD300 Welding Wire Spool (Alternative)",
    description: "Alternative configuration SD300 welding wire spool. Available in A.B.S / H.I.P.S / Polypropylene quality.",
    category: "Welding Wire",
    image: weldingWireNew,
    features: [
      "Flange Dia (d1): 300mm",
      "Barrel Dia (d2): 205mm",
      "Length: 103mm",
      "Traverse (L2): 89.8mm",
      "Bore (d4): 51.5mm",
      "Winding Capacity: 15 kgs",
      "Weight of Bobbin: 650 gms"
    ]
  },
  {
    id: "sd-300-os",
    name: "SD300 OS Welding Wire Spool",
    description: "Premium SD300 OS welding wire spool for professional applications. Available in A.B.S / H.I.P.S / Polypropylene quality.",
    category: "Welding Wire",
    image: weldingWireNew,
    features: [
      "Flange Dia (d1): 300mm",
      "Barrel Dia (d2): 212mm",
      "Length: 103mm",
      "Traverse (L2): 91mm",
      "Bore (d4): 51.5mm",
      "Winding Capacity: 15 kgs",
      "Weight of Bobbin: 840 gms"
    ]
  },

  // 3. COMPOSITE REELS (ABS Reels)
  {
    id: "pf-tc-380",
    name: "PF/TC/380 ABS Reel",
    description: "High performance ABS reel for the cable industry. Durable, lightweight, and weather resistant.",
    category: "Composite Reels",
    image: compPfTc380,
    features: [
      "Flange Dia (d1): 380mm (14.96\")",
      "Barrel Dia (d2): 220mm (8.67\")",
      "Bore (d4): 52mm (2.05\")",
      "Traverse (l2): 165mm (6.50\")",
      "Overall (l1): 190mm (7.48\")",
      "Flange Thickness (ft): 15mm (0.60\")"
    ]
  },
  {
    id: "pf-tc-400",
    name: "PF/TC/400 ABS Reel",
    description: "High performance ABS reel for the cable industry. Durable, lightweight, and weather resistant.",
    category: "Composite Reels",
    image: compPfTc400,
    features: [
      "Flange Dia (d1): 400mm (15.75\")",
      "Barrel Dia (d2): 142mm (5.60\")",
      "Bore (d4): 32 or 40mm (1.25\" or 1.58\")",
      "Traverse (l2): 250mm (9.84\")",
      "Overall (l1): 282mm (11.10\")",
      "Flange Thickness (ft): 16mm (0.63\")"
    ]
  },
  {
    id: "pf-tc-432",
    name: "PF/TC/432 ABS Reel",
    description: "High performance ABS reel for the cable industry. Durable, lightweight, and weather resistant.",
    category: "Composite Reels",
    image: compPfTc432,
    features: [
      "Flange Dia (d1): 432mm (17\")",
      "Barrel Dia (d2): 204mm (8.03\")",
      "Bore (d4): 30mm (1.18\")",
      "Traverse (l2): 250mm (9.84\")",
      "Overall (l1): 286mm (11.26\")",
      "Flange Thickness (ft): 18mm (0.71\")"
    ]
  },
  {
    id: "pf-tc-450",
    name: "PF/TC/450 ABS Reel",
    description: "High performance ABS reel for the cable industry. Durable, lightweight, and weather resistant.",
    category: "Composite Reels",
    image: compPfTc450,
    features: [
      "Flange Dia (d1): 450mm (17.70\")",
      "Barrel Dia (d2): 206mm (8.10\")",
      "Bore (d4): 32 or 56mm (1.25\" or 2.20\")",
      "Traverse (l2): 250mm (9.84\")",
      "Overall (l1): 305mm (12.0\")",
      "Flange Thickness (ft): 27.25mm (1.07\")"
    ]
  },
  {
    id: "pf-tc-500",
    name: "PF/TC/500 ABS Reel",
    description: "High performance ABS reel for the cable industry. Available in multiple barrel and bore configurations.",
    category: "Composite Reels",
    image: compPfTc500,
    features: [
      "Flange Dia (d1): 500mm (19.69\")",
      "Barrel Dia (d2): 200mm (7.87\") or 220mm (8.66\") or 250mm (9.84\")",
      "Bore (d4): 36mm (1.42\") or 42mm (1.65\") or 56mm (2.20\")",
      "Traverse (l2): 250mm (9.84\")",
      "Overall (l1): 290mm (11.41\")",
      "Flange Thickness (ft): 20mm (0.79\") or 27.5mm (1.08\")"
    ]
  },
  {
    id: "pf-tc-550",
    name: "PF/TC/550 ABS Reel",
    description: "High performance ABS reel for the cable industry. CTC certified. Durable and weather resistant.",
    category: "Composite Reels",
    image: compPfTc550,
    features: [
      "Flange Dia (d1): 550mm (21.65\")",
      "Barrel Dia (d2): 150mm (5.90\")",
      "Bore (d4): 56mm (2.20\")",
      "Traverse (l2): 250mm (9.84\")",
      "Overall (l1): 310mm (12.20\")",
      "Flange Thickness (ft): 20mm (0.79\")"
    ]
  },
  {
    id: "pf-tc-560",
    name: "PF/TC/560 ABS Reel",
    description: "High performance ABS reel for the cable industry. Available in multiple barrel configurations.",
    category: "Composite Reels",
    image: compPfTc560,
    features: [
      "Flange Dia (d1): 560mm (22\")",
      "Barrel Dia (d2): 255mm (10\") or 280mm (11\")",
      "Bore (d4): 56mm (2.20\")",
      "Traverse (l2): 250mm (9.84\")",
      "Overall (l1): 305mm (12\")",
      "Flange Thickness (ft): 27.5mm (1.08\")"
    ]
  },
  {
    id: "pf-tc-600",
    name: "PF/TC/600 ABS Reel",
    description: "High performance ABS reel for the cable industry. Large capacity for industrial applications.",
    category: "Composite Reels",
    image: compPfTc600,
    features: [
      "Flange Dia (d1): 600mm (23.62\")",
      "Barrel Dia (d2): 300mm (11.81\")",
      "Bore (d4): 127mm (5\")",
      "Traverse (l2): 254mm (10\")",
      "Overall (l1): 304mm (11.96\")",
      "Flange Thickness (ft): 25mm"
    ]
  },
  {
    id: "pf-tc-630",
    name: "PF/TC/630 ABS Reel",
    description: "High performance ABS reel for the cable industry. Multiple barrel and flange thickness options.",
    category: "Composite Reels",
    image: compPfTc630,
    features: [
      "Flange Dia (d1): 630mm (24.80\")",
      "Barrel Dia (d2): 250mm (9.84\") or 315mm (12.40\") or 355mm (14\")",
      "Bore (d4): 56mm (2.20\")",
      "Traverse (l2): 315mm (12.40\")",
      "Overall (l1): 370mm (14.56\")",
      "Flange Thickness (ft): 27.5mm (1.08\") or 25.5mm (1\")"
    ]
  },
  {
    id: "pf-tc-710",
    name: "PF/TC/710 ABS Reel",
    description: "High performance ABS reel for the cable industry. Large format for heavy-duty applications.",
    category: "Composite Reels",
    image: compPfTc710,
    features: [
      "Flange Dia (d1): 710mm (27.95\")",
      "Barrel Dia (d2): 500mm (19.68\")",
      "Bore (d4): 56mm (2.20\")",
      "Traverse (l2): 315mm (12.40\")",
      "Overall (l1): 375mm (14.76\")",
      "Flange Thickness (ft): 30mm (1.18\")"
    ]
  },
  {
    id: "pf-tc-800",
    name: "PF/TC/800 ABS Reel",
    description: "High performance ABS reel for the cable industry. Extra large for maximum capacity.",
    category: "Composite Reels",
    image: compPfTc800,
    features: [
      "Flange Dia (d1): 800mm (31.49\")",
      "Barrel Dia (d2): 400mm (15.74\")",
      "Bore (d4): 80mm (3.15\")",
      "Traverse (l2): 400mm (15.74\")",
      "Overall (l1): 480mm (18.90\")",
      "Flange Thickness (ft): 40mm (1.57\")"
    ]
  },
  {
    id: "pf-tc-1000",
    name: "PF/TC/1000 ABS Reel",
    description: "High performance ABS reel for the cable industry. Industrial-scale capacity for large cable operations.",
    category: "Composite Reels",
    image: compPfTc1000,
    features: [
      "Flange Dia (d1): 1000mm (39.37\")",
      "Barrel Dia (d2): 500mm (19.69\")",
      "Bore (d4): 80mm (3.15\")",
      "Traverse (l2): 600mm (23.62\")",
      "Overall (l1): 680mm (26.77\")",
      "Flange Thickness (ft): 40mm (1.57\")"
    ]
  },
  {
    id: "pf-tc-1250",
    name: "PF/TC/1250 ABS Reel",
    description: "High performance ABS reel for the cable industry. Maximum capacity reel for large-scale manufacturing.",
    category: "Composite Reels",
    image: compPfTc1250,
    features: [
      "Flange Dia (d1): 1250mm (49.21\")",
      "Barrel Dia (d2): 625mm (24.60\")",
      "Bore (d4): 80mm & 127mm (3.15\" & 5\")",
      "Traverse (l2): 625mm (24.60\")",
      "Overall (l1): 750mm (29.53\")",
      "Flange Thickness (ft): 50mm (1.97\")"
    ]
  },

  // 4. EDM WIRE
  {
    id: "ep-1",
    name: "EP-1 EDM Wire Reel",
    description: "Plastic reel suitable for EDM wire applications. Precision manufactured for electrical discharge machining.",
    category: "EDM Wire",
    image: edmWireNew,
    features: [
      "Flange Dia (d1): 130(5.12)mm",
      "Barrel Dia (d2): 60(2.36)mm",
      "Traverse (L2): 28(1.10)mm",
      "Overall (L1): 36(1.42)mm",
      "Bore (d4): 12.5(0.5)mm",
      "Weight Capacity: 1.2(2.65)kg"
    ]
  },
  {
    id: "ep-5",
    name: "EP-5 EDM Wire Reel",
    description: "Medium capacity EDM wire reel for precision machining applications.",
    category: "EDM Wire",
    image: edmWireNew,
    features: [
      "Flange Dia (d1): 160(6.3)mm",
      "Barrel Dia (d2): 90(3.54)mm",
      "Traverse (L2): 90(3.54)mm",
      "Overall (L1): 112(4.41)mm",
      "Bore (d4): 22(0.87)mm",
      "Weight Capacity: 5.0(11.0)kg"
    ]
  },
  {
    id: "ep-10",
    name: "EP-10 EDM Wire Reel",
    description: "High capacity EDM wire reel for industrial precision machining operations.",
    category: "EDM Wire",
    image: edmWireNew,
    features: [
      "Flange Dia (d1): 200(7.87)mm",
      "Barrel Dia (d2): 90(3.54)mm",
      "Traverse (L2): 111(4.37)mm",
      "Overall (L1): 135(5.31)mm",
      "Bore (d4): 26(1.02)mm",
      "Weight Capacity: 10(22.0)kg"
    ]
  },
  {
    id: "ep-15",
    name: "EP-15 EDM Wire Reel",
    description: "Large capacity EDM wire reel for extended production runs.",
    category: "EDM Wire",
    image: edmWireNew,
    features: [
      "Flange Dia (d1): 250(9.84)mm",
      "Barrel Dia (d2): 110(4.33)mm",
      "Traverse (L2): 111(4.37)mm",
      "Overall (L1): 135(5.31)mm",
      "Bore (d4): 35(1.38)mm",
      "Weight Capacity: 15(33.0)kg"
    ]
  },
  {
    id: "ep-30",
    name: "EP-30 EDM Wire Reel",
    description: "Maximum capacity EDM wire reel for heavy-duty precision machining applications.",
    category: "EDM Wire",
    image: edmWireNew,
    features: [
      "Flange Dia (d1): 300(11.81)mm",
      "Barrel Dia (d2): 130(5.12)mm",
      "Traverse (L2): 130(5.12)mm",
      "Overall (L1): 160(6.30)mm",
      "Bore (d4): 35(1.38)mm",
      "Weight Capacity: 30(66.0)kg"
    ]
  },

  // 5. STITCHING WIRE
  {
    id: "sd-2",
    name: "SD-2 Stitching Wire Reel",
    description: "Compact stitching wire reel for textile and packaging applications.",
    category: "Stitching Wire",
    image: stitchingWireNew,
    features: [
      "Flange Dia (d1): 133mm",
      "Barrel Dia (d2): 53mm",
      "Traverse (L2): 44mm",
      "Overall (L1): 50mm",
      "Bore (d4): 18mm"
    ]
  },
  {
    id: "sd-3",
    name: "SD-3 Stitching Wire Reel",
    description: "Standard capacity stitching wire reel for industrial sewing operations.",
    category: "Stitching Wire",
    image: stitchingWireNew,
    features: [
      "Flange Dia (d1): 138mm",
      "Barrel Dia (d2): 53mm",
      "Traverse (L2): 48mm",
      "Overall (L1): 57mm",
      "Bore (d4): 18mm"
    ]
  },
  {
    id: "sd-4",
    name: "SD-4 Stitching Wire Reel",
    description: "Medium capacity stitching wire reel for textile and packaging industries.",
    category: "Stitching Wire",
    image: stitchingWireNew,
    features: [
      "Flange Dia (d1): 154mm",
      "Barrel Dia (d2): 67mm",
      "Traverse (L2): 56mm",
      "Overall (L1): 63mm",
      "Bore (d4): 18mm"
    ]
  },
  {
    id: "sd-5",
    name: "SD-5 Stitching Wire Reel",
    description: "High capacity stitching wire reel for heavy-duty industrial applications.",
    category: "Stitching Wire",
    image: stitchingWireNew,
    features: [
      "Flange Dia (d1): 171mm",
      "Barrel Dia (d2): 72mm",
      "Traverse (L2): 63mm",
      "Overall (L1): 61.5mm",
      "Bore (d4): 68mm"
    ]
  },
  {
    id: "sd-10",
    name: "SD-10 Stitching Wire Reel",
    description: "Maximum capacity stitching wire reel for extended production runs.",
    category: "Stitching Wire",
    image: stitchingWireNew,
    features: [
      "Flange Dia (d1): 225mm",
      "Barrel Dia (d2): 72mm",
      "Traverse (L2): 63mm",
      "Overall (L1): 61.5mm",
      "Bore (d4): 68mm"
    ]
  },

  // 6. Cylindrical Reels SPOOLS
  {
    id: "din-63",
    name: "Cylindrical Reels Type 63",
    description: "Compact Cylindrical Reels standard spool.",
    category: "Cylindrical Reels",
    image: cylindricalReelsNew,
    features: [
      "Type: 63",
      "Flange Dia: 63mm",
      "Barrel Dia: 40mm",
      "Traverse: 49mm",
      "Overall Width: 63mm",
      "Bore: 11mm"
    ]
  },
  {
    id: "din-80",
    name: "Cylindrical Reels Type 80",
    description: "Compact Cylindrical Reels standard spool for cable and wire applications.",
    category: "Cylindrical Reels",
    image: cylindricalReelsNew,
    features: [
      "Ref. No: S-1",
      "Flange Dia: 80mm (3.15 inch)",
      "Barrel Dia: 50mm (1.97 inch)",
      "Traverse: 64mm (2.52 inch)",
      "Overall Width: 80mm (3.15 inch)",
      "Bore: 16mm (0.63 inch)",
      "Weight Capacity: 0.9kg (2.00 lbs)"
    ]
  },
  {
    id: "din-100",
    name: "Cylindrical Reels Type 100",
    description: "Medium capacity Cylindrical Reels standard spool for wire and cable.",
    category: "Cylindrical Reels",
    image: cylindricalReelsNew,
    features: [
      "Ref. No: S-2",
      "Flange Dia: 100mm (3.94 inch)",
      "Barrel Dia: 63mm (2.48 inch)",
      "Traverse: 80mm (3.15 inch)",
      "Overall Width: 100mm (3.94 inch)",
      "Bore: 16mm (0.63 inch)",
      "Weight Capacity: 1.6kg (3.50 lbs)"
    ]
  },
  {
    id: "din-125",
    name: "Cylindrical Reels Type 125",
    description: "Mid-size Cylindrical Reels spool for versatile applications.",
    category: "Cylindrical Reels",
    image: cylindricalReelsNew,
    features: [
      "Ref. No: S-3",
      "Flange Dia: 125mm (4.92 inch)",
      "Barrel Dia: 80mm (3.15 inch)",
      "Traverse: 100mm (3.94 inch)",
      "Overall Width: 125mm (4.92 inch)",
      "Bore: 16mm (0.63 inch)",
      "Weight Capacity: 2.9kg (6.40 lbs)"
    ]
  },
  {
    id: "din-160",
    name: "Cylindrical Reels Type 160",
    description: "Large capacity Cylindrical Reels standard spool.",
    category: "Cylindrical Reels",
    image: cylindricalReelsNew,
    features: [
      "Ref. No: S-6",
      "Flange Dia: 160mm (6.30 inch)",
      "Barrel Dia: 100mm (3.94 inch)",
      "Traverse: 128mm (5.03 inch)",
      "Overall Width: 160mm (6.30 inch)",
      "Bore: 22mm (0.87 inch)",
      "Weight Capacity: 6.2kg (13.66 lbs)"
    ]
  },
  {
    id: "din-200",
    name: "Cylindrical Reels Type 200",
    description: "Extra large Cylindrical Reels spool for industrial applications.",
    category: "Cylindrical Reels",
    image: cylindricalReelsNew,
    features: [
      "Ref. No: S-12",
      "Flange Dia: 200mm (7.87 inch)",
      "Barrel Dia: 125mm (4.92 inch)",
      "Traverse: 160mm (6.30 inch)",
      "Overall Width: 200mm (7.87 inch)",
      "Bore: 22mm (0.87 inch) / 32mm (1.25 inch)",
      "Weight Capacity: 12kg (26.45 lbs)"
    ]
  },
  {
    id: "din-250",
    name: "Cylindrical Reels Type 250",
    description: "Heavy duty Cylindrical Reels spool for high capacity applications.",
    category: "Cylindrical Reels",
    image: cylindricalReelsNew,
    features: [
      "Ref. No: S-22",
      "Flange Dia: 250mm (9.84 inch)",
      "Barrel Dia: 160mm (6.30 inch)",
      "Traverse: 160mm (6.30 inch)",
      "Overall Width: 200mm (7.87 inch)",
      "Bore: 36mm (1.42 inch) / 102mm (4.00 inch)",
      "Weight Capacity: 22kg (48.50 lbs)"
    ]
  },
  {
    id: "din-355",
    name: "Cylindrical Reels Type 355",
    description: "Maximum capacity Cylindrical Reels spool for extended industrial operations.",
    category: "Cylindrical Reels",
    image: cylindricalReelsNew,
    features: [
      "Ref. No: S-48",
      "Flange Dia: 355mm (13.98 inch)",
      "Barrel Dia: 224mm (8.82 inch)",
      "Traverse: 160mm (6.30 inch)",
      "Overall Width: 200mm (7.87 inch)",
      "Bore: 51mm (2.00 inch) / 102mm (4.00 inch)",
      "Weight Capacity: 48kg (105.80 lbs)"
    ]
  },

  // 7. STEEL & TINSEL WIRE
  {
    id: "us-4",
    name: "US-4 Steel Wire Reel",
    description: "Reel for stainless steel and tinsel wire applications.",
    category: "Steel & Tinsel",
    image: steelTinselNew,
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
    description: "Heavy-duty reel for stainless steel wire delivery.",
    category: "Steel & Tinsel",
    image: steelTinselNew,
    features: [
      "Flange Dia: 200mm",
      "Barrel Dia: 114mm",
      "Traverse: 151mm",
      "Overall: 183mm",
      "Bore: 32.50mm"
    ]
  },
  {
    id: "us-250",
    name: "US-250 Steel Wire Reel",
    description: "Large capacity heavy-duty steel wire reel.",
    category: "Steel & Tinsel",
    image: steelTinselNew,
    features: [
      "Flange Dia: 254mm",
      "Barrel Dia: 102mm",
      "Traverse: 157.5mm",
      "Overall: 183mm",
      "Bore: 32.50mm"
    ]
  },

  // 8. ALUMINUM WIRE
  {
    id: "al-200",
    name: "AL-200 Aluminum Wire Reel",
    description: "Heavy-duty reel for delivery of aluminum wire with precision-engineered construction and circular hole pattern for weight reduction.",
    category: "Aluminum Wire",
    image: aluminumReel200,
    features: [
      "Ref.No: AL-200",
      "Flange Dia (d1): 200mm",
      "Barrel Dia (d2): 105mm",
      "Traverse (L2): 45mm",
      "Overall (L1): 55mm",
      "Bore (d4): 51mm"
    ]
  },
  {
    id: "al-320",
    name: "AL-320 Aluminum Wire Reel",
    description: "Large capacity reel for aluminum wire distribution with reinforced hexagonal center design for enhanced durability.",
    category: "Aluminum Wire",
    image: aluminumReel320,
    features: [
      "Ref.No: AL-320",
      "Flange Dia (d1): 320mm",
      "Barrel Dia (d2): 120mm",
      "Traverse (L2): 67.62mm",
      "Overall (L1): 79mm",
      "Bore (d4): 38.2mm"
    ]
  },

  // 9. CABLE DELIVERY
  {
    id: "cd-230",
    name: "CDR 230",
    description: "Cable despatch reel with 230mm flange and 108mm barrel. Compatible with high-speed coiling machines. Weather and UV resistant.",
    category: "Cable Delivery",
    image: cableDeliveryNew,
    features: [
      "Flange Dia (d1): 230mm",
      "Barrel Dia (d2): 108mm",
      "Bore (d4): 99mm",
      "Available Traverse: 127, 165, 190, 255, 300, 380mm"
    ]
  },
  {
    id: "cd-260",
    name: "CDR 260",
    description: "Cable despatch reel with 260mm flange and 108mm barrel. Compatible with high-speed coiling machines. Weather and UV resistant.",
    category: "Cable Delivery",
    image: cableDeliveryNew,
    features: [
      "Flange Dia (d1): 260mm",
      "Barrel Dia (d2): 108mm",
      "Bore (d4): 99mm",
      "Available Traverse: 127, 165, 190, 255, 300, 380mm"
    ]
  },
  {
    id: "cd-280",
    name: "CDR 280",
    description: "Cable despatch reel with 280mm flange and 108mm barrel. Compatible with high-speed coiling machines. Weather and UV resistant.",
    category: "Cable Delivery",
    image: cableDeliveryNew,
    features: [
      "Flange Dia (d1): 280mm",
      "Barrel Dia (d2): 108mm",
      "Bore (d4): 99mm",
      "Available Traverse: 127, 165, 190, 255, 300, 380mm"
    ]
  },
  {
    id: "cd-295",
    name: "CDR 295",
    description: "Cable despatch reel with 295mm flange and 108mm barrel. Compatible with high-speed coiling machines. Weather and UV resistant.",
    category: "Cable Delivery",
    image: cableDeliveryNew,
    features: [
      "Flange Dia (d1): 295mm",
      "Barrel Dia (d2): 108mm",
      "Bore (d4): 99mm",
      "Available Traverse: 127, 165, 190, 255, 300, 380mm"
    ]
  },
  {
    id: "cd-325",
    name: "CDR 325",
    description: "Cable despatch reel with 325mm flange and 108mm barrel. Compatible with high-speed coiling machines. Weather and UV resistant.",
    category: "Cable Delivery",
    image: cableDeliveryNew,
    features: [
      "Flange Dia (d1): 325mm",
      "Barrel Dia (d2): 108mm",
      "Bore (d4): 99mm",
      "Available Traverse: 127, 165, 190, 255, 300, 380mm"
    ]
  },
  {
    id: "cd-355-s",
    name: "CDR 355 (Small Barrel)",
    description: "Cable despatch reel with 355mm flange and 108mm barrel. Compatible with high-speed coiling machines. Weather and UV resistant.",
    category: "Cable Delivery",
    image: cableDeliveryNew,
    features: [
      "Flange Dia (d1): 355mm",
      "Barrel Dia (d2): 108mm",
      "Bore (d4): 99mm",
      "Available Traverse: 127, 165, 190, 255, 300, 380mm"
    ]
  },
  {
    id: "cd-380",
    name: "CDR 380",
    description: "Cable despatch reel with 380mm flange and 108mm barrel. Compatible with high-speed coiling machines. Weather and UV resistant.",
    category: "Cable Delivery",
    image: cableDeliveryNew,
    features: [
      "Flange Dia (d1): 380mm",
      "Barrel Dia (d2): 108mm",
      "Bore (d4): 99mm",
      "Available Traverse: 127, 165, 190, 255, 300, 380mm"
    ]
  },
  {
    id: "cd-355-l",
    name: "CDR 355 (Large Barrel)",
    description: "Cable despatch reel with 355mm flange and 205mm barrel. Compatible with high-speed coiling machines. Weather and UV resistant.",
    category: "Cable Delivery",
    image: cableDeliveryNew,
    features: [
      "Flange Dia (d1): 355mm",
      "Barrel Dia (d2): 205mm",
      "Bore (d4): 99mm",
      "Available Traverse: 300, 325, 380mm"
    ]
  },
  {
    id: "cd-400",
    name: "CDR 400",
    description: "Cable despatch reel with 400mm flange and 205mm barrel. Compatible with high-speed coiling machines. Weather and UV resistant.",
    category: "Cable Delivery",
    image: cableDeliveryNew,
    features: [
      "Flange Dia (d1): 400mm",
      "Barrel Dia (d2): 205mm",
      "Bore (d4): 99mm",
      "Available Traverse: 300, 325, 380mm"
    ]
  },
  {
    id: "cd-425",
    name: "CDR 425",
    description: "Cable despatch reel with 425mm flange and 205mm barrel. Compatible with high-speed coiling machines. Weather and UV resistant.",
    category: "Cable Delivery",
    image: cableDeliveryNew,
    features: [
      "Flange Dia (d1): 425mm",
      "Barrel Dia (d2): 205mm",
      "Bore (d4): 99mm",
      "Available Traverse: 300, 325, 380mm"
    ]
  },
  {
    id: "cd-450",
    name: "CDR 450",
    description: "Cable despatch reel with 450mm flange and 205mm barrel. Compatible with high-speed coiling machines. Weather and UV resistant.",
    category: "Cable Delivery",
    image: cableDeliveryNew,
    features: [
      "Flange Dia (d1): 450mm",
      "Barrel Dia (d2): 205mm",
      "Bore (d4): 99mm",
      "Available Traverse: 300, 325, 380mm"
    ]
  },
  {
    id: "cd-500",
    name: "CDR 500",
    description: "Cable despatch reel with 500mm flange and 205mm barrel. Compatible with high-speed coiling machines. Weather and UV resistant.",
    category: "Cable Delivery",
    image: cableDeliveryNew,
    features: [
      "Flange Dia (d1): 500mm",
      "Barrel Dia (d2): 205mm",
      "Bore (d4): 99mm",
      "Available Traverse: 300, 325, 380mm"
    ]
  },
  {
    id: "cd-545",
    name: "CDR 545",
    description: "Cable despatch reel with 545mm flange and 205mm barrel. Compatible with high-speed coiling machines. Weather and UV resistant.",
    category: "Cable Delivery",
    image: cableDeliveryNew,
    features: [
      "Flange Dia (d1): 545mm",
      "Barrel Dia (d2): 205mm",
      "Bore (d4): 99mm",
      "Available Traverse: 300, 325, 380mm"
    ]
  },
  {
    id: "cd-600",
    name: "CDR 600",
    description: "Cable despatch reel with 600mm flange and 205mm barrel. Compatible with high-speed coiling machines. Weather and UV resistant.",
    category: "Cable Delivery",
    image: cableDeliveryNew,
    features: [
      "Flange Dia (d1): 600mm",
      "Barrel Dia (d2): 205mm",
      "Bore (d4): 99mm",
      "Available Traverse: 300, 325, 380mm"
    ]
  },

  // 10. SUPER TOUGH REELS
  {
    id: "st-22-1",
    name: "22\" Super Tough Reel - 250kg",
    description: "High performance ABS reel designed for run speeds up to 3000rpm. One-third the weight of equivalent mild steel reels. Ideal for wire drawing, bunching, stranding and transportation.",
    category: "Super Tough",
    image: superToughNew,
    features: [
      "Material: ABS",
      "Flange Dia: 22\" (560mm)",
      "Barrel Dia: 14\" (355mm)",
      "Bore: 5\" (127mm)",
      "Traverse: 11.00\" (280mm)",
      "Winding Volume: 2486 cu.inch / 40735 c.c",
      "Winding Weight: 250 kg"
    ]
  },
  {
    id: "st-22-2",
    name: "22\" Super Tough Reel - 300kg",
    description: "High performance ABS reel designed for run speeds up to 3000rpm. One-third the weight of equivalent mild steel reels. Ideal for wire drawing, bunching, stranding and transportation.",
    category: "Super Tough",
    image: superToughNew,
    features: [
      "Material: ABS",
      "Flange Dia: 22\" (560mm)",
      "Barrel Dia: 14\" (355mm)",
      "Bore: 5\" (127mm)",
      "Traverse: 13.00\" (330mm)",
      "Winding Volume: 2939 cu.inch / 48141 c.c",
      "Winding Weight: 300 kg"
    ]
  },
  {
    id: "st-22-3",
    name: "22\" Super Tough Reel - 345kg",
    description: "High performance ABS reel designed for run speeds up to 3000rpm. One-third the weight of equivalent mild steel reels. Ideal for wire drawing, bunching, stranding and transportation.",
    category: "Super Tough",
    image: superToughNew,
    features: [
      "Material: ABS",
      "Flange Dia: 22\" (560mm)",
      "Barrel Dia: 14\" (355mm)",
      "Bore: 5\" (127mm)",
      "Traverse: 15.00\" (381mm)",
      "Winding Volume: 3391 cu.inch / 55547 c.c",
      "Winding Weight: 345 kg"
    ]
  },
  {
    id: "st-25-1",
    name: "25\" Super Tough Reel - 390kg",
    description: "High performance ABS reel designed for run speeds up to 3000rpm. One-third the weight of equivalent mild steel reels. Ideal for wire drawing, bunching, stranding and transportation.",
    category: "Super Tough",
    image: superToughNew,
    features: [
      "Material: ABS",
      "Flange Dia: 25\" (630mm)",
      "Barrel Dia: 14\" (355mm)",
      "Bore: 5\" (127mm)",
      "Traverse: 11.40\" (290mm)",
      "Winding Volume: 3839 cu.inch / 62884 c.c",
      "Winding Weight: 390 kg"
    ]
  },
  {
    id: "st-25-2",
    name: "25\" Super Tough Reel - 450kg",
    description: "High performance ABS reel designed for run speeds up to 3000rpm. One-third the weight of equivalent mild steel reels. Ideal for wire drawing, bunching, stranding and transportation.",
    category: "Super Tough",
    image: superToughNew,
    features: [
      "Material: ABS",
      "Flange Dia: 25\" (630mm)",
      "Barrel Dia: 14\" (355mm)",
      "Bore: 5\" (127mm)",
      "Traverse: 13.40\" (340mm)",
      "Winding Volume: 4512 cu.inch / 73917 c.c",
      "Winding Weight: 450 kg"
    ]
  },
  {
    id: "st-25-3",
    name: "25\" Super Tough Reel - 525kg",
    description: "High performance ABS reel designed for run speeds up to 3000rpm. One-third the weight of equivalent mild steel reels. Ideal for wire drawing, bunching, stranding and transportation.",
    category: "Super Tough",
    image: superToughNew,
    features: [
      "Material: ABS",
      "Flange Dia: 25\" (630mm)",
      "Barrel Dia: 14\" (355mm)",
      "Bore: 5\" (127mm)",
      "Traverse: 15.40\" (391mm)",
      "Winding Volume: 5186 cu.inch / 84946 c.c",
      "Winding Weight: 525 kg"
    ]
  },

  // 11. JUMBO REELS
  {
    id: "jumbo-380",
    name: "Jumbo Reel 380mm",
    description: "High performance delivery reel for shipment of round, rectangular and core wires. 100% recyclable plastic — perfect replacement for wooden reels and metal reels. No fumigation needed for export.",
    category: "Jumbo Reels",
    image: jumboReelsNew,
    features: [
      "Material: 100% Recyclable Plastic",
      "Flange Dia: 380mm",
      "Barrel Dia: 220mm",
      "Traverse: 155mm",
      "Bore: 52mm"
    ]
  },
  {
    id: "jumbo-400",
    name: "Jumbo Reel 400mm",
    description: "High performance delivery reel for shipment of round, rectangular and core wires. 100% recyclable plastic — perfect replacement for wooden reels and metal reels. No fumigation needed for export.",
    category: "Jumbo Reels",
    image: jumboReelsNew,
    features: [
      "Material: 100% Recyclable Plastic",
      "Flange Dia: 400mm",
      "Barrel Dia: 200mm",
      "Traverse: 200mm",
      "Bore: 40mm",
      "Volume: 18.84 dm³"
    ]
  },
  {
    id: "jumbo-432",
    name: "Jumbo Reel 432mm",
    description: "High performance delivery reel for shipment of round, rectangular and core wires. 100% recyclable plastic — perfect replacement for wooden reels and metal reels. No fumigation needed for export.",
    category: "Jumbo Reels",
    image: jumboReelsNew,
    features: [
      "Material: 100% Recyclable Plastic",
      "Flange Dia: 432mm",
      "Barrel Dia: 200mm",
      "Traverse: 265mm",
      "Bore: 40mm",
      "Volume: 30.50 dm³"
    ]
  },
  {
    id: "jumbo-450",
    name: "Jumbo Reel 450mm",
    description: "High performance delivery reel for shipment of round, rectangular and core wires. 100% recyclable plastic — perfect replacement for wooden reels and metal reels. No fumigation needed for export.",
    category: "Jumbo Reels",
    image: jumboReelsNew,
    features: [
      "Material: 100% Recyclable Plastic",
      "Flange Dia: 450mm",
      "Barrel Dia: 200mm",
      "Traverse: 265mm",
      "Bore: 40mm",
      "Volume: 33.80 dm³"
    ]
  },
  {
    id: "jumbo-500",
    name: "Jumbo Reel 500mm",
    description: "High performance delivery reel for shipment of round, rectangular and core wires. 100% recyclable plastic — perfect replacement for wooden reels and metal reels. Available in 100–350kg wire packings.",
    category: "Jumbo Reels",
    image: jumboReelsNew,
    features: [
      "Material: 100% Recyclable Plastic",
      "Flange Dia: 500mm",
      "Barrel Dia: 200mm / 250mm",
      "Traverse: 265mm / 300mm",
      "Bore: 40mm",
      "Volume: 43.68 / 44.15 dm³"
    ]
  },
  {
    id: "jumbo-560",
    name: "Jumbo Reel 560mm",
    description: "High performance delivery reel for shipment of round, rectangular and core wires. 100% recyclable plastic — perfect replacement for wooden reels and metal reels. Available in 100–350kg wire packings.",
    category: "Jumbo Reels",
    image: jumboReelsNew,
    features: [
      "Material: 100% Recyclable Plastic",
      "Flange Dia: 560mm",
      "Barrel Dia: 250mm / 315mm",
      "Traverse: 250mm / 315mm",
      "Bore: 40mm",
      "Volume: 49.27 / 53.00 dm³"
    ]
  },
  {
    id: "jumbo-600",
    name: "Jumbo Reel 600mm",
    description: "High performance delivery reel for shipment of round, rectangular and core wires. 100% recyclable plastic — perfect replacement for wooden reels and metal reels. Available in 100–350kg wire packings.",
    category: "Jumbo Reels",
    image: jumboReelsNew,
    features: [
      "Material: 100% Recyclable Plastic",
      "Flange Dia: 600mm",
      "Barrel Dia: 315mm",
      "Traverse: 315mm",
      "Bore: 40mm",
      "Volume: 64.48 dm³"
    ]
  },
  {
    id: "jumbo-630",
    name: "Jumbo Reel 630mm",
    description: "High performance delivery reel for shipment of round, rectangular and core wires. 100% recyclable plastic — perfect replacement for wooden reels and metal reels. Available in 100–350kg wire packings.",
    category: "Jumbo Reels",
    image: jumboReelsNew,
    features: [
      "Material: 100% Recyclable Plastic",
      "Flange Dia: 630mm",
      "Barrel Dia: 250mm / 315mm",
      "Traverse: 250mm / 315mm",
      "Bore: 40mm",
      "Volume: 65.62 / 73.60 dm³"
    ]
  },
  {
    id: "jumbo-700",
    name: "Jumbo Reel 700mm",
    description: "Largest capacity jumbo plastic delivery reel. 100% recyclable plastic — perfect replacement for wooden reels and metal reels. Available in 100–350kg wire packings.",
    category: "Jumbo Reels",
    image: jumboReelsNew,
    features: [
      "Material: 100% Recyclable Plastic",
      "Flange Dia: 700mm",
      "Barrel Dia: 250mm / 500mm",
      "Traverse: 250mm / 500mm",
      "Bore: 40mm"
    ]
  },

  // 12. BICONICAL SERIES
  {
    id: "bk-76",
    name: "BK 76/45 Biconical",
    description: "Biconical series spool for specialized technical applications.",
    category: "Biconical",
    image: biconicalNew,
    features: [
      "Size: BK 76/45",
      "Flange Dia: 62.7mm",
      "Barrel Dia: 44mm",
      "Traverse: 63mm",
      "Overall: 86mm",
      "Bore: 16.1mm"
    ]
  },
  {
    id: "bk-80",
    name: "BK 80 Biconical",
    description: "Biconical spool for precision winding applications.",
    category: "Biconical",
    image: biconicalNew,
    features: [
      "Size: BK 80",
      "Flange Dia: 79.4mm",
      "Barrel Dia: 55mm",
      "Traverse: 72mm",
      "Overall: 100mm",
      "Bore: 16.3mm"
    ]
  },
  {
    id: "bk-125",
    name: "BK 125 Biconical",
    description: "Larger biconical spool for industrial winding needs.",
    category: "Biconical",
    image: biconicalNew,
    features: [
      "Size: BK 125",
      "Flange Dia: 125mm",
      "Barrel Dia: 71mm",
      "Traverse: 66mm",
      "Overall: 125mm",
      "Bore: 16.1mm"
    ]
  },
  {
    id: "bk-160",
    name: "BK 160 Biconical",
    description: "Large biconical spool for precision winding applications.",
    category: "Biconical",
    image: biconicalNew,
    features: [
      "Size: BK 160",
      "Flange Dia: 159.8mm",
      "Barrel Dia: 80mm",
      "Traverse: 86mm",
      "Overall: 159mm",
      "Bore: 22.3mm"
    ]
  },

  // 13. MONOFILAMENT
  {
    id: "mono-fil1",
    name: "Fil 1 Monofilament Spool",
    description: "Compact monofilament spool.",
    category: "Monofilament",
    image: monofilamentNew,
    features: [
      "Size: Fil 1",
      "Flange Dia: 100mm",
      "Barrel Dia: 76mm",
      "Traverse: 37mm",
      "Bore: 16.29mm"
    ]
  },
  {
    id: "mono-fil2",
    name: "Fil 2 Monofilament Spool",
    description: "Compact monofilament spool with smaller barrel.",
    category: "Monofilament",
    image: monofilamentNew,
    features: [
      "Size: Fil 2",
      "Flange Dia: 100mm",
      "Barrel Dia: 52mm",
      "Traverse: 37mm",
      "Bore: 16.10mm"
    ]
  },
  {
    id: "mono-m1",
    name: "M1 Monofilament Spool",
    description: "Monofilament series spool for fishing line and technical filament.",
    category: "Monofilament",
    image: monofilamentNew,
    features: [
      "Size: M1",
      "Flange Dia: 98mm",
      "Barrel Dia: 87mm",
      "Traverse: 16.9mm",
      "Bore: 14.5mm"
    ]
  },
  {
    id: "mono-m2",
    name: "M2 Monofilament Spool",
    description: "Medium capacity monofilament spool for technical applications.",
    category: "Monofilament",
    image: monofilamentNew,
    features: [
      "Size: M2",
      "Flange Dia: 118mm",
      "Barrel Dia: 98mm",
      "Traverse: 22mm",
      "Bore: 16mm"
    ]
  },
  {
    id: "mono-hand-small",
    name: "Hand Caster Small",
    description: "Small hand caster monofilament spool.",
    category: "Monofilament",
    image: monofilamentNew,
    features: [
      "Size: Hand Caster Small",
      "Flange Dia: 100.7mm",
      "Barrel Dia: 60.00mm",
      "Traverse: 25.7mm",
      "Overall: 31mm",
      "Bore: 56.4mm"
    ]
  },
  {
    id: "mono-hand-medium",
    name: "Hand Caster Medium",
    description: "Medium hand caster monofilament spool.",
    category: "Monofilament",
    image: monofilamentNew,
    features: [
      "Size: Hand Caster Medium",
      "Flange Dia: 124mm",
      "Barrel Dia: 78mm",
      "Traverse: 32mm",
      "Overall: 37mm",
      "Bore: 74mm"
    ]
  },
  {
    id: "mono-hand-large",
    name: "Hand Caster Large",
    description: "Large hand caster monofilament spool for manual operations.",
    category: "Monofilament",
    image: monofilamentNew,
    features: [
      "Size: Hand Caster Large",
      "Flange Dia: 172.7mm",
      "Barrel Dia: 116.5mm",
      "Traverse: 30.5mm",
      "Overall: 36mm",
      "Bore: 11.5mm"
    ]
  },

  // 14. MISC REELS
  {
    id: "misc-2-2",
    name: "MISC Reel 2/2\"",
    description: "Compact miscellaneous reel for various industrial applications. Durable construction with precise specifications.",
    category: "Misc Reels",
    image: miscReelsNew,
    features: [
      "Model: 2/2\"",
      "Flange: 60mm",
      "Barrel: 26mm",
      "Traverse: 84mm",
      "Overall: 101mm",
      "Bore: 10.5mm"
    ]
  },
  {
    id: "misc-connector",
    name: "MISC Connector Reel",
    description: "Versatile connector reel for specialized winding applications. Professional grade construction.",
    category: "Misc Reels",
    image: miscReelsNew,
    features: [
      "Model: Connector",
      "Flange: 50mm",
      "Barrel: 23/27mm",
      "Traverse: 135mm",
      "Overall: 152mm",
      "Bore: 19.6mm"
    ]
  },

  // 15. ISI REELS
  {
    id: "isi-5",
    name: "ISI 5\" Reel",
    description: "ISI standard reel for wire and cable applications. All dimensions in millimeter.",
    category: "ISI Reels",
    image: isiReelsNew,
    features: [
      "Size: 5\"",
      "Flange Dia (d1): 125mm",
      "Barrel Dia (d2): 65mm",
      "Traverse (L2): 70mm",
      "Overall (L1): 80mm",
      "Bore (d4): 22mm"
    ]
  },
  {
    id: "isi-130",
    name: "ISI 130mm Reel",
    description: "ISI standard 130mm reel for industrial wire applications.",
    category: "ISI Reels",
    image: isiReelsNew,
    features: [
      "Size: 130mm",
      "Flange Dia (d1): 133mm",
      "Barrel Dia (d2): 70.1mm",
      "Traverse (L2): 91mm",
      "Overall (L1): 114mm",
      "Bore (d4): 22.8mm"
    ]
  },

  {
    id: "isi-6",
    name: "ISI 6\" Reel",
    description: "ISI standard 6 inch reel for medium capacity applications.",
    category: "ISI Reels",
    image: isiReelsNew,
    features: [
      "Size: 6\"",
      "Flange Dia (d1): 160mm",
      "Barrel Dia (d2): 85mm",
      "Traverse (L2): 101mm",
      "Overall (L1): 123mm",
      "Bore (d4): 36.2mm"
    ]
  },
  {
    id: "isi-7",
    name: "ISI 7\" Reel",
    description: "ISI standard 7 inch reel for heavy-duty wire applications.",
    category: "ISI Reels",
    image: isiReelsNew,
    features: [
      "Size: 7\"",
      "Flange Dia (d1): 178mm",
      "Barrel Dia (d2): 95mm",
      "Traverse (L2): 101mm",
      "Overall (L1): 123mm",
      "Bore (d4): 36.5mm"
    ]
  },
  {
    id: "isi-8",
    name: "ISI 8\" Reel",
    description: "ISI standard 8 inch reel for large capacity wire delivery.",
    category: "ISI Reels",
    image: isiReelsNew,
    features: [
      "Size: 8\"",
      "Flange Dia (d1): 200mm",
      "Barrel Dia (d2): 101mm",
      "Traverse (L2): 126mm",
      "Overall (L1): 152mm",
      "Bore (d4): 38mm"
    ]
  },
  {
    id: "isi-9",
    name: "ISI 9\" Reel",
    description: "ISI standard 9 inch reel for industrial cable applications.",
    category: "ISI Reels",
    image: isiReelsNew,
    features: [
      "Size: 9\"",
      "Flange Dia (d1): 230mm",
      "Barrel Dia (d2): 110mm",
      "Traverse (L2): 122mm",
      "Overall (L1): 162mm",
      "Bore (d4): 40mm"
    ]
  },
  {
    id: "isi-10",
    name: "ISI 10\" Reel",
    description: "ISI standard 10 inch reel for high capacity wire winding.",
    category: "ISI Reels",
    image: isiReelsNew,
    features: [
      "Size: 10\"",
      "Flange Dia (d1): 260mm",
      "Barrel Dia (d2): 108mm",
      "Traverse (L2): 175mm",
      "Overall (L1): 209mm",
      "Bore (d4): 41mm"
    ]
  },
  {
    id: "isi-11",
    name: "ISI 11\" Reel",
    description: "ISI standard 11 inch reel.",
    category: "ISI Reels",
    image: isiReelsNew,
    features: [
      "Size: 11\"",
      "Flange Dia (d1): 280mm",
      "Barrel Dia (d2): 140mm",
      "Traverse (L2): 175mm",
      "Overall (L1): 209mm",
      "Bore (d4): 41mm"
    ]
  },
  {
    id: "isi-13",
    name: "ISI 13\" Reel",
    description: "ISI standard 13 inch reel for heavy industrial applications.",
    category: "ISI Reels",
    image: isiReelsNew,
    features: [
      "Size: 13\"",
      "Flange Dia (d1): 336mm",
      "Barrel Dia (d2): 116.7mm",
      "Traverse (L2): 216mm",
      "Overall (L1): 250mm",
      "Bore (d4): 58mm"
    ]
  },

  // 16. COPPER CONDUCTOR
  {
    id: "cc-450x280",
    name: "450x280 Copper Conductor Reel",
    description: "Large capacity reel specifically designed for copper conductor wire delivery.",
    category: "Copper Conductor",
    image: copperConductorNew,
    features: [
      "Model: 450x280",
      "Flange Dia: 452mm",
      "Barrel Dia: 281mm",
      "Traverse: 221mm",
      "Overall: 281mm",
      "Bore: 40.2mm"
    ]
  },
  {
    id: "cc-500x280",
    name: "500x280 Copper Conductor Reel",
    description: "Extra large capacity reel for heavy copper conductor applications.",
    category: "Copper Conductor",
    image: copperConductorNew,
    features: [
      "Model: 500x280",
      "Flange Dia: 503mm",
      "Barrel Dia: 282mm",
      "Traverse: 210mm",
      "Overall: 248mm",
      "Bore: 41.2mm"
    ]
  },

];

// Extract unique categories for filtering
export const categories = Array.from(new Set(products.map(p => p.category)));

// Category banner images mapping
export const categoryImages: Record<string, string> = {
  "Tapered Bobbins": taperedBobbinsNew,
  "Welding Wire": weldingWireNew,
  "Composite Reels": compPfTc400,
  "EDM Wire": edmWireNew,
  "Stitching Wire": stitchingWireNew,
  "Cylindrical Reels": cylindricalReelsNew,
  "Steel & Tinsel": steelTinselNew,
  "Aluminum Wire": aluminumWireNew,
  "Cable Delivery": cableDeliveryNew,
  "Super Tough": superToughNew,
  "Jumbo Reels": jumboReelsNew,
  "Biconical": biconicalNew,
  "Monofilament": monofilamentNew,
  "Misc Reels": miscReelsNew,
  "ISI Reels": isiReelsNew,
  "Copper Conductor": copperConductorNew,
};
