/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'loremflickr.com',
      'picsum.photos',
      'lh3.googleusercontent.com',
      'images.unsplash.com',
      'images.pexels.com'
    ] // Add the hostname(s) of your external image sources
  }
};

export default nextConfig;
