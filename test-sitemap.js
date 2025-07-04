import sitemap from './app/sitemap';

// Test sitemap generation
const sitemapData = sitemap();
console.log('Generated sitemap:');
console.log(JSON.stringify(sitemapData, null, 2));
