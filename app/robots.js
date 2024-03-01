export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://groceryapp-vikash0p.vercel.app/sitemap.xml',
    }
}