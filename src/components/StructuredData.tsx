const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bobbins India",
  url: "https://static-shelf-showcase.vercel.app",
  description:
    "India's leading manufacturer of precision plastic reels, bobbins, and spools for the cable & wire industry since 1995.",
  foundingDate: "1995",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
  telephone: "+912228473744",
  email: "sales@bobbinsindia.com",
  sameAs: [],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
