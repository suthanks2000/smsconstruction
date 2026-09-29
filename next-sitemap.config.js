/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://smsconstruction.in',
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/design-system',
      },
    ],
  },
  exclude: ['/server-sitemap.xml', '/design-system'], // exclude anything if needed
  generateIndexSitemap: false,
};
