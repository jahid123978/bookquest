const nextConfig = {
    experimental: {
      appDir: true,
      serverComponentsExternalPackages: ['axios'],
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'covers.openlibrary.org',
        },
      ],
    },
  };
  
  module.exports = nextConfig;