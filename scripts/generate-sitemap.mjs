import { readFileSync, writeFileSync } from 'fs';

const productsFile = readFileSync('src/data/products.ts', 'utf8');
const ids = [...productsFile.matchAll(/id:\s*"([^"]+)"/g)].map(m => m[1]);
const categoryFile = readFileSync('src/data/categoryContent.ts', 'utf8');
const categorySlugs = [...categoryFile.matchAll(/slug:\s*"([^"]+)"/g)].map(m => m[1]);

const BASE = 'https://bobbinsindia.net';
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE}/</loc>
  </url>
  <url>
    <loc>${BASE}/products</loc>
  </url>
  <url>
    <loc>${BASE}/privacy</loc>
  </url>
`;

for (const slug of categorySlugs) {
  xml += `  <url>
    <loc>${BASE}/products/category/${slug}</loc>
  </url>
`;
}

for (const id of ids) {
  xml += `  <url>
    <loc>${BASE}/products/${id}</loc>
  </url>
`;
}

xml += '</urlset>\n';
writeFileSync('public/sitemap.xml', xml);
console.log(`Sitemap generated: ${3 + categorySlugs.length + ids.length} URLs`);
