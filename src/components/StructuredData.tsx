const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bobbins India",
  url: "https://bobbinsindia.net",
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
