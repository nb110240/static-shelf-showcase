export interface CategoryContent {
  slug: string;
  title: string;
  summary: string;
  applications: string[];
  selection: string[];
}

export const categoryContent: Record<string, CategoryContent> = {
  "Tapered Bobbins": {
    slug: "tapered-bobbins",
    title: "Tapered Bobbins",
    summary: "Plastic taper reels for cable and wire winding, with multiple flange, barrel, bore and capacity combinations across the PT range.",
    applications: ["Cable and wire winding", "Process winding and take-up", "Packages requiring tapered flanges"],
    selection: ["Confirm both flange diameters", "Match barrel, bore and traverse", "Specify winding weight and material preference"],
  },
  "Welding Wire": {
    slug: "welding-wire-reels",
    title: "Welding Wire Reels",
    summary: "Plastic spools for welding-wire storage and controlled dispensing, available across compact and industrial-capacity formats.",
    applications: ["MIG and welding wire", "Wire packaging", "Controlled pay-off and dispensing"],
    selection: ["Confirm wire weight and diameter", "Match bore to the pay-off equipment", "Specify material and colour requirements"],
  },
  "Composite Reels": {
    slug: "composite-reels",
    title: "Composite Reels",
    summary: "Reusable flange-and-barrel reel formats for cable production and delivery where dimensional consistency and handling matter.",
    applications: ["Cable manufacture", "Wire processing", "Finished cable delivery"],
    selection: ["Confirm flange and barrel diameters", "Check bore and drive requirements", "Share load, handling and reuse expectations"],
  },
  "EDM Wire": {
    slug: "edm-wire-reels",
    title: "EDM Wire Reels",
    summary: "Precision reels for electrical-discharge-machining wire packages and compatible winding or pay-off equipment.",
    applications: ["EDM wire packaging", "Fine-wire winding", "Machine-compatible pay-off packages"],
    selection: ["Match machine and bore interface", "Confirm traverse and wire capacity", "Specify winding tension and package format"],
  },
  "Stitching Wire": {
    slug: "stitching-wire-reels",
    title: "Stitching Wire Reels",
    summary: "Compact reels for stitching, binding and related fine-wire packages where controlled delivery is required.",
    applications: ["Bookbinding and stitching wire", "Fine-wire packaging", "Compact pay-off systems"],
    selection: ["Confirm machine interface", "Match bore and traverse", "Share wire gauge and package weight"],
  },
  "Cylindrical Reels": {
    slug: "cylindrical-reels",
    title: "Cylindrical Reels",
    summary: "Cylindrical bobbins and flanged reels for winding applications that require a straight-sided barrel and defined traverse.",
    applications: ["Cable and wire winding", "Process bobbins", "Straight-barrel winding packages"],
    selection: ["Confirm barrel and flange dimensions", "Match bore and drive details", "Specify load and winding conditions"],
  },
  "Steel & Tinsel": {
    slug: "steel-tinsel-wire-reels",
    title: "Steel & Tinsel Wire Reels",
    summary: "Reels and bobbins for steel wire, tinsel wire and related metallic winding applications.",
    applications: ["Steel-wire winding", "Tinsel-wire packages", "Metallic wire processing"],
    selection: ["Share wire gauge and package weight", "Confirm flange, barrel and traverse", "Specify handling and pay-off requirements"],
  },
  "Aluminum Wire": {
    slug: "aluminum-wire-reels",
    title: "Aluminum Wire Reels",
    summary: "Aluminium reel formats for fine wire, EDM wire and specialty winding applications requiring a metal reel construction.",
    applications: ["Fine and specialty wire", "EDM wire packages", "Applications specifying aluminium construction"],
    selection: ["Confirm equipment interface", "Match bore, flange and traverse", "Share winding tension and capacity"],
  },
  "Cable Delivery": {
    slug: "cable-delivery-reels",
    title: "Cable Delivery Reels",
    summary: "Delivery reels for finished cable and wire packages across a range of flange diameters and carrying requirements.",
    applications: ["Finished cable delivery", "Wire transport and dispensing", "Industrial packaging"],
    selection: ["Specify cable diameter and length", "Confirm gross package weight", "Share handling, transport and return-cycle needs"],
  },
  "Super Tough": {
    slug: "super-tough-reels",
    title: "Super Tough Reels",
    summary: "High-strength plastic reel formats intended for demanding cable winding, handling and delivery requirements.",
    applications: ["Demanding cable packages", "Production winding", "Delivery and repeated handling"],
    selection: ["Confirm load and impact requirements", "Match all critical dimensions", "Share reuse and transport conditions"],
  },
  "Jumbo Reels": {
    slug: "jumbo-reels",
    title: "Jumbo Reels",
    summary: "Large-format reels for high-capacity cable and wire production, storage and delivery applications.",
    applications: ["High-capacity cable winding", "Large wire packages", "Industrial storage and delivery"],
    selection: ["Confirm gross load and flange diameter", "Specify shaft, bore and drive details", "Share lifting and handling method"],
  },
  "Biconical": {
    slug: "biconical-bobbins",
    title: "Biconical Bobbins",
    summary: "Biconical bobbins for cross-wound wire packages and applications requiring angled package geometry.",
    applications: ["Cross-wound wire packages", "Process winding", "Biconical package formats"],
    selection: ["Confirm cone and flange geometry", "Match bore and traverse", "Share wire type and winding pattern"],
  },
  "Monofilament": {
    slug: "monofilament-reels",
    title: "Monofilament Reels",
    summary: "Reels for monofilament and fine-line winding, packaging and controlled dispensing applications.",
    applications: ["Monofilament winding", "Fine-line packaging", "Controlled dispensing"],
    selection: ["Share filament diameter and length", "Confirm core and flange dimensions", "Specify winding tension and package weight"],
  },
  "Misc Reels": {
    slug: "specialty-reels",
    title: "Specialty Reels",
    summary: "Specialty reel formats for winding requirements that do not fit the main standard product families.",
    applications: ["Special-purpose winding", "Non-standard packages", "Application-specific reel development"],
    selection: ["Provide a drawing or reference sample", "Share material and load requirements", "Confirm quantity and development expectations"],
  },
  "ISI Reels": {
    slug: "isi-reels",
    title: "ISI Reels",
    summary: "Numbered reel sizes for cable and wire applications that reference ISI-format dimensions.",
    applications: ["Cable and wire packages", "Standardized reel-size requirements", "Industrial winding and delivery"],
    selection: ["Confirm the required reel size", "Check dimensional values against your equipment", "Specify material, colour and quantity"],
  },
  "Copper Conductor": {
    slug: "copper-conductor-reels",
    title: "Copper Conductor Reels",
    summary: "Large-capacity reel formats for bare or insulated copper conductor winding and delivery.",
    applications: ["Copper conductor winding", "Conductor delivery", "Large wire packages"],
    selection: ["Share conductor size and package weight", "Confirm bore and drive interface", "Specify delivery and handling requirements"],
  },
};

export const categoryToSlug = (category: string) =>
  categoryContent[category]?.slug ?? category.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const categoryFromSlug = (slug: string) =>
  Object.keys(categoryContent).find((category) => categoryContent[category].slug === slug);
