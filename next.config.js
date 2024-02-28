/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ["boostify-nesst.myshopify.com", "cdn.shopify.com"],
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    }
}

module.exports = nextConfig
