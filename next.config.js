/** @type {import('next').NextConfig} */
const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");
module.exports = withCss(withPurgeCss());

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
