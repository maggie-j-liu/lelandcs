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
      {
        source: "/discord",
        destination: "https://discord.gg/bVxW6B9yDt",
        permanent: true,
      },
      {
        source: "/signup",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSeo53lNcDbaR9tEb8P7hiH1WTYu0zPlnyyMZ-Sya3GSnMREuA/viewform",
        permanent: true,
      },
      {
        source: "/officer",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSeaCe9MAnozIkKheEfEfA-0-7-brtHNa0t3_T07pdMF9a44uw/viewform",
        permanent: true,
      },
      {
        source: "/feedback",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSffNB1I2vv-ZaeB-MPPU_l34Z9FeaOq3U1POmpPfIp-5_ciDg/viewform",
        permanent: true,
      },
      {
        source: "/attendance",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSemT7wiaZiWuZoy1ZPbRJNDJ9-X6kPGVQoWpQEGutSRLSz1Yg/viewform",
        permanent: true,
      },
    ];
  },
};
