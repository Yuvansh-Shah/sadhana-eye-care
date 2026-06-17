import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root — a stray lockfile in the home directory otherwise
  // makes Turbopack infer the wrong root.
  turbopack: {
    root: import.meta.dirname,
  },

  // 301 redirects from the old static site to the new routes.
  async redirects() {
    return [
      { source: "/about-us.html", destination: "/about", permanent: true },
      { source: "/services.html", destination: "/services", permanent: true },
      { source: "/contact-us.html", destination: "/contact", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
