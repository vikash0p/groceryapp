export default function manifest() {
    return {
        name: 'GroceryApp',
        description: 'FreshCart is more than just a grocery app; it \'s your dependable partner in creating a seamless shopping experience.Whether you\'re a busy professional, a parent on the go, or simply looking for a smarter way to shop, FreshCart is here to make your grocery journey enjoyable and hassle-free.',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}