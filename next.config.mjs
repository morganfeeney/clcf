import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true,
    compiler: {
        removeConsole: false,
    },
    webpack: (config) => {
        config.infrastructureLogging = {
            level: "error",
        };
        // Important: return the modified config
        // https://nextjs.org/docs/messages/undefined-webpack-config
        return config;
    }
};

export default withContentlayer(nextConfig);
