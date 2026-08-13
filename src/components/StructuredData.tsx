const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Bobbins India",
  legalName: "Sudhir Enterprise",
  url: "https://bobbinsindia.net",
  logo: "https://bobbinsindia.net/bobbins-b-192.png",
  description:
    "Manufacturer of plastic reels, bobbins, and spools for wire, cable, welding, textile, and industrial applications since 1995.",
  foundingDate: "1995",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 B, Chandivali, Off Saki Vihar Road",
    addressLocality: "Andheri East",
    addressRegion: "Maharashtra",
    postalCode: "400072",
    addressCountry: "IN",
  },
  telephone: "+912228473744",
  image: "https://bobbinsindia.net/bobbins-india-share-2026.png",
  priceRange: "Quotation based",
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Place", name: "International" },
  ],
  hasMap:
    "https://maps.google.com/?q=12+B+Chandivali+Off+Saki+Vihar+Road+Andheri+East+Mumbai+400072",
  email: "sales@bobbinsindia.com",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "+918928154150",
    email: "sales@bobbinsindia.com",
    availableLanguage: "English",
  },
  inLanguage: "en",
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
