/** @type {import('next').NextConfig} */
// require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  async exportPathMap() {
    return {
      "/": { page: "/" },
      "/CreatePost": { page: "/CreatePost" },
      "/Login": { page: "/Login" },
      "/Logout": { page: "/Logout" },
    };
  },
};

module.exports = nextConfig;
