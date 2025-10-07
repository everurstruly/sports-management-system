/*
 Simple sitemap generator for the Next.js app at apps/web
 - Scans apps/web/app for files and folders that represent routes
 - Outputs apps/web/public/sitemap.xml

 Notes:
 - This is conservative: it includes top-level folders under apps/web/app and the root index
 - It ignores API routes and files/folders that start with '_' or '[' (dynamic)
 - You can extend this to pull event data from a CMS or data folder
*/

const fs = require('fs');
const path = require('path');

const WEB_APP_DIR = path.join(__dirname, '../apps/web/app');
const OUTPUT_PATH = path.join(__dirname, '../apps/web/public/sitemap.xml');
const BASE_URL = 'https://renna.netlify.app';

function isRouteDir(name) {
  if (!name) return false;
  if (name.startsWith('_')) return false;
  if (name.startsWith('[')) return false; // dynamic
  if (name === 'api') return false;
  return true;
}

function collectRoutes(dir) {
  const routes = [];

  // include root
  routes.push('/');

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.isDirectory()) {
      if (!isRouteDir(e.name)) continue;
      // check for page.tsx or page.jsx
      const pageTsx = path.join(dir, e.name, 'page.tsx');
      const pageJsx = path.join(dir, e.name, 'page.jsx');
      const pageTs = path.join(dir, e.name, 'page.ts');
      const pageJs = path.join(dir, e.name, 'page.js');
      if (fs.existsSync(pageTsx) || fs.existsSync(pageJsx) || fs.existsSync(pageTs) || fs.existsSync(pageJs)) {
        routes.push('/' + e.name);
      } else {
        // nested routes: try to include index-like files under the folder
        const subEntries = fs.readdirSync(path.join(dir, e.name), { withFileTypes: true });
        for (const s of subEntries) {
          if (s.name.startsWith('page.')) {
            routes.push('/' + e.name);
            break;
          }
        }
      }
    } else if (e.isFile()) {
      // top-level page file like page.tsx
      if (/^page\.(ts|tsx|js|jsx)$/.test(e.name)) continue; // root already
      // other top-level files are ignored
    }
  }

  return routes;
}

function buildSitemap(routes) {
  const now = new Date().toISOString();
  const lines = [];
  lines.push("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
  lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');

  for (const r of routes) {
    lines.push('  <url>');
    lines.push(`    <loc>${BASE_URL}${r}</loc>`);
    lines.push(`    <lastmod>${now}</lastmod>`);
    lines.push('    <changefreq>weekly</changefreq>');
    lines.push('    <priority>0.6</priority>');
    lines.push('  </url>');
  }

  lines.push('</urlset>');
  return lines.join('\n');
}

function main() {
  if (!fs.existsSync(WEB_APP_DIR)) {
    console.error('apps/web/app directory not found, aborting');
    process.exit(1);
  }

  const routes = collectRoutes(WEB_APP_DIR);
  const xml = buildSitemap(routes);
  fs.writeFileSync(OUTPUT_PATH, xml, 'utf8');
  console.log('Wrote sitemap with', routes.length, 'entries to', OUTPUT_PATH);
}

if (require.main === module) {
  main();
}
