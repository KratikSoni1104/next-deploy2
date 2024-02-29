/** @type {import('next').NextConfig} */
import withPlaiceholder from '@plaiceholder/next';
const nextConfig = {
    images: {
        // domains: ['*'], // Use wildcard to allow all domains
        remotePatterns: [
            {
                protocol: 'https', // Optionally, specify the protocol
                hostname:'**'
            },
        ],
    }
};

export default withPlaiceholder(nextConfig);
