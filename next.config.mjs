
/** @type {import('next').NextConfig} */
const nextConfig = {
    // Note: The empty 'images' configuration is often added to
    // solve specific deployment issues. Even if empty, its presence
    // can be important.
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'placehold.co',
        }
      ],
    },
    // Adding reactStrictMode: true is a good practice for new apps
    // as it helps identify potential problems in the app.
    reactStrictMode: true,
  };
  
  export default nextConfig;
  
