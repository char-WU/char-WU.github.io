const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Only prefix on production builds so `npm run dev` still serves at http://localhost:3000/
  basePath: isProd ? "/charlottewu.com" : "",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
