/** @type {import('next').NextConfig} */
import NextFederationPlugin from "@module-federation/nextjs-mf";
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "home",
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
            todo: `todo@http://localhost:3000/_next/static/chunks/remoteEntry.js`,
          },
          filename: "static/chunks/remoteEntry.js",
          exposes: {},
          shared: {},
          extraOptions: {},
        })
      );
    }
    return config;
  },
};

export default nextConfig;
