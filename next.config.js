/** @type {import('next').NextConfig} */

const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, "styles")],
  //   prependData: `@import "./base.scss;"`,
  // },
};

module.exports = nextConfig;
