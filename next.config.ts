import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  allowedDevOrigins: ['192.168.1.35'],
  images: {
      remotePatterns: [
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'play-lh.googleusercontent.com',
      },
       {
        protocol: 'https',
        hostname: 'instagram.fcai21-2.fna.fbcdn.net',
      }
      ,
       {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
      
       {
        protocol: 'https',
        hostname: 'www.etamen.app',
      },
      {
        protocol: 'https',
        hostname: 'dashboard.happytexting.com',
      },
    ],
  }
};