// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   images: {
//     unoptimized: true,
//   },
// };

// module.exports = nextConfig;

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export", // Enables static export
  images: { unoptimized: true }, // Fixes image optimization issues in static builds
  basePath: isProd ? "/portfolio" : "",
};
