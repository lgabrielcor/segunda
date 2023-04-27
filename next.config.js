/** @type {import('next').NextConfig} */
const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");
module.exports = withCss(withPurgeCss());
const withPWA = require("next-pwa");
module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
