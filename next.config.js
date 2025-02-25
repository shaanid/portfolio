/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export', // Required for static site export
  images: { unoptimized: true }, // Required for GitHub Pages
  // trailingSlash: true, // Optional: Adds trailing slashes to URLs
  // distDir: 'out', // Optional: Change output directory (make sure to update GitHub Actions if changed)
};

module.exports = nextConfig;
