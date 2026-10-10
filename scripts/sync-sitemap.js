const fs = require('fs');
const path = require('path');

const outDir = path.join(process.cwd(), 'out');
const publicSitemap = path.join(process.cwd(), 'public', 'sitemap.xml');
const publicRobots = path.join(process.cwd(), 'public', 'robots.txt');

if (fs.existsSync(outDir)) {
  if (fs.existsSync(publicSitemap)) {
    fs.copyFileSync(publicSitemap, path.join(outDir, 'sitemap.xml'));
    console.log('✓ Copied sitemap.xml to out/sitemap.xml');
  }
  if (fs.existsSync(publicRobots)) {
    fs.copyFileSync(publicRobots, path.join(outDir, 'robots.txt'));
    console.log('✓ Copied robots.txt to out/robots.txt');
  }
}
