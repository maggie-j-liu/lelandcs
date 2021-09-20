module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com", "robohash.org"],
  },
  async redirects() {
    return [
      {
        source: "/ticket",
        destination: "/tickets",
        permanent: true,
      },
    ];
  },
};
