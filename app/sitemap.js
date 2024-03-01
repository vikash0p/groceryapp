export default function sitemap() {
    return [
        {
            url: 'https://groceryapp-vikash0p.vercel.app/',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://groceryapp-vikash0p.vercel.app/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://groceryapp-vikash0p.vercel.app/shop',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://groceryapp-vikash0p.vercel.app/blog',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://groceryapp-vikash0p.vercel.app/login',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://groceryapp-vikash0p.vercel.app/register',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://groceryapp-vikash0p.vercel.app/cart',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },

        {
            url: 'https://groceryapp-vikash0p.vercel.app/wishlist',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ]
}