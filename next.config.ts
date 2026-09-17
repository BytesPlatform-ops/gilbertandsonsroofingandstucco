import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Nodemailer relies on Node.js built-ins and dynamic requires, so it is
  // loaded with native require instead of being bundled into the route.
  serverExternalPackages: ["nodemailer"],
};

export default nextConfig;
