/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/gastronomy-4-0",
        destination: "/development",
        permanent: true,
      },
      {
        source: "/de/gastronomy-4-0",
        destination: "/de/development",
        permanent: true,
      },
      {
        source: "/en/gastronomy-4-0",
        destination: "/en/development",
        permanent: true,
      },
      {
        source: "/disclaimer",
        destination: "/privacy",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
