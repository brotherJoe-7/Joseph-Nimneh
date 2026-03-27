/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // Replace this with your actual custom domain once you buy it!
  siteUrl: process.env.SITE_URL || 'https://josephnimneh.dev',
  generateRobotsTxt: true, // Automates creating robots.txt
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml'], // Example: exclude specific paths
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://josephnimneh.dev/sitemap.xml',
    ],
  },
}
