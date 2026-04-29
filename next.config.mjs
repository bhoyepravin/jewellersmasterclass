/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,   // serves local images directly — no optimizer needed for a landing page
  },
};

export default nextConfig;
