/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'getbootstrap.com',
      'cdn-icons-png.flaticon.com',
    ],
  },
  async redirects() {
    return [
      {
        source: "/lodong",
        destination: "lodongsite.vercel.app",
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
