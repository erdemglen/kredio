import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Üst dizinde başka bir lockfile bulunduğu için workspace kökünü sabitliyoruz.
  turbopack: { root: path.resolve(".") },
};

export default nextConfig;
