import { readFileSync, writeFileSync } from 'fs';

const productsFile = readFileSync('src/data/products.ts', 'utf8');
const ids = [...productsFile.matchAll(/id:\s*"([^"]+)"/g)].map(m => m[1]);

const BASE = 'https://bobbinsindia.net';
const today = new Date().toISOString().slice(0, 10);

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE}/</loc>
    <lastmod>${today}</lastmod>
  </url>
  <url>
    <loc>${BASE}/products</loc>
    <lastmod>${today}</lastmod>
  </url>
`;

for (const id of ids) {
  xml += `  <url>
    <loc>${BASE}/products/${id}</loc>
    <lastmod>${today}</lastmod>
  </url>
`;
}

xml += '</urlset>\n';
writeFileSync('public/sitemap.xml', xml);
console.log(`Sitemap generated: ${2 + ids.length} URLs`);
