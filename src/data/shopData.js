export const products = [
    {
        id: 1,
        name: 'INGLU "Core" Oversized Tee',
        price: 1299,
        originalPrice: 1999,
        category: 'Apparel',
        images: [
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800'
        ],
        badge: 'Best Seller',
        rating: 4.8,
        reviews: 124,
        sizes: ['S', 'M', 'L', 'XL'],
        description: 'The definitive oversized tee for the INGLU community. Heavyweight cotton, puff print branding, and a fit that screams street culture.',
        inStock: true
    },
    {
        id: 2,
        name: 'Stealth Bomber Jacket',
        price: 3499,
        category: 'Apparel',
        images: [
            'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800'
        ],
        badge: 'Limited Drop',
        rating: 4.9,
        reviews: 45,
        sizes: ['M', 'L', 'XL'],
        description: 'Tactical aesthetics meet everyday comfort. Water-resistant nylon shell with quilted lining.',
        inStock: true
    },
    {
        id: 3,
        name: 'INGLU x Delhi 6 Vip Pass',
        price: 1999,
        category: 'Events',
        images: [
            'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800'
        ],
        badge: 'Selling Fast',
        rating: 5.0,
        reviews: 890,
        description: 'VIP Access to the biggest underground fest of the year. Skip the queue, access the lounge, and meet the artists.',
        inStock: true
    },
    {
        id: 4,
        name: 'Cyberpunk Cargo Pants',
        price: 2499,
        category: 'Apparel',
        images: [
            'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&q=80&w=800'
        ],
        badge: 'New',
        rating: 4.5,
        reviews: 23,
        sizes: ['28', '30', '32', '34'],
        description: 'Multi-pocket cargo pants designed for utility and style. Straps, tech-wear vibes, and durable fabric.',
        inStock: true
    },
    {
        id: 5,
        name: 'Retro Gaming Hoodie',
        price: 1899,
        category: 'Gaming',
        images: [
            'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800'
        ],
        badge: '',
        rating: 4.7,
        reviews: 67,
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'For the late-night grinders. Ultra-soft fleece with retro 8-bit graphics.',
        inStock: true
    },
    {
        id: 6,
        name: 'INGLU Laptop Sleeve',
        price: 799,
        category: 'Accessories',
        images: [
            'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=800'
        ],
        badge: '',
        rating: 4.6,
        reviews: 32,
        description: 'Protect your gear. Neoprene sleeve with shock absorption and water resistance.',
        inStock: true
    },
    {
        id: 7,
        name: 'Holi Bash Season 4 Ticket',
        price: 499,
        category: 'Events',
        images: [
            'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800'
        ],
        badge: 'Early Bird',
        rating: 4.8,
        reviews: 200,
        description: 'The most colorful event of the season. Music, colors, and vibes.',
        inStock: true
    },
    {
        id: 8,
        name: 'Creator Kit Bundle',
        price: 4999,
        category: 'Creators',
        images: [
            'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800'
        ],
        badge: 'Bundle Deal',
        rating: 4.9,
        reviews: 12,
        description: 'Everything you need to start creating: Tripod, Ring Light, and exclusive INGLU presets.',
        inStock: true
    },
    {
        id: 9,
        name: 'Neon Beanie',
        price: 499,
        category: 'Accessories',
        images: [
            'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=800'
        ],
        badge: 'Sold Out',
        rating: 4.7,
        reviews: 88,
        description: 'Make a statement. Acrylic knit beanie in vibrant neon colors.',
        inStock: false
    }
];

export const categories = [
    'All',
    'Apparel',
    'Events',
    'Accessories',
    'Gaming',
    'Creators'
];

export const sortOptions = [
    { name: 'Most Popular', value: 'popular' },
    { name: 'Newest', value: 'newest' },
    { name: 'Price: Low to High', value: 'price_asc' },
    { name: 'Price: High to Low', value: 'price_desc' }
];
