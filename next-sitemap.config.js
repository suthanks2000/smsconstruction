/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://smsconstruction.in',
  autoLastmod: false,
  generateRobotsTxt: false,
  exclude: ['/server-sitemap.xml', '/design-system'],
  generateIndexSitemap: false,
};
