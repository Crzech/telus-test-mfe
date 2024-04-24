/** @type {import('next').NextConfig} */
import NextFederationPlugin from "@module-federation/nextjs-mf";
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "todo",
          remotes: {
            home: `home@http://localhost/_next/static/chunks/remoteEntry.js`,
          },
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./TodoApp": "./src/pages/index.tsx",
          },
          shared: {},
          extraOptions: {},
        })
      );
    }
    return config;
  },
};

export default nextConfig;
