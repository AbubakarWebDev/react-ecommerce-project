// tailwind.config.js
module.exports = {
    purge: [
        './src/**/*.{js,jsx}',
    ],
    darkMode: false,
    theme: {
        extend: {
            backgroundImage: {
                'master-head': "url('../images/master-head.jpg')",

                'featured-cat-1': "url('../images/shop-cat-1.jpg')",
                'featured-cat-2': "url('../images/shop-cat-2.jpg')",
                'featured-cat-3': "url('../images/shop-cat-3.jpg')",
                'featured-cat-4': "url('../images/shop-cat-4.jpg')",

                'featured-prod-1-front': "url('../images/featured-prod-1-front.jpg')",
                'featured-prod-1-back': "url('../images/featured-prod-1-back.jpg')",

                'featured-prod-2-front': "url('../images/featured-prod-2-front.jpg')",
                'featured-prod-2-back': "url('../images/featured-prod-2-back.jpg')",

                'featured-prod-3-front': "url('../images/featured-prod-3-front.jpg')",
                'featured-prod-3-back': "url('../images/featured-prod-3-back.jpg')",

                'featured-prod-4-front': "url('../images/featured-prod-4-front.jpg')",
                'featured-prod-4-back': "url('../images/featured-prod-4-back.jpg')",

                'featured-blog-1': "url('../images/featured-blog-1.jpg')",
                'featured-blog-2': "url('../images/featured-blog-2.jpg')",
                'featured-blog-3': "url('../images/featured-blog-3.jpg')",
            },

            height: {
                sm: '420px',
                md: '560px',
            },

            minHeight: {
                sm: '420px',
                md: '560px',
            },

            transitionProperty: {
                'bg-img': 'background-image',
                'bg': 'background',
            }
        },

        fontFamily: {
            'inter': ['Inter', 'Roboto', 'Helvetica', 'Monospace', 'sans-serif', 'serif'],

            'poppins': ['Poppins', 'Roboto', 'Helvetica', 'Monospace', 'sans-serif', 'serif'],

            'montserrat': ['Montserrat', 'Roboto', 'Helvetica', 'Monospace', 'sans-serif', 'serif'],

            'roboto': ['Roboto', 'Helvetica', 'Monospace', 'sans-serif', 'serif'],

            'urbanist': ['Urbanist', 'Roboto', 'Helvetica', 'Monospace', 'sans-serif', 'serif'],

            'lato': ['Lato', 'Roboto', 'Helvetica', 'Monospace', 'sans-serif', 'serif'],

            'manrope': ['Manrope', 'Roboto', 'Helvetica', 'Monospace', 'sans-serif', 'serif']
        },

        screens: {
            '2xl': { 'max': '1535px' },

            'xl': { 'max': '1279px' },

            'lg': { 'max': '1023px' },

            'md': { 'max': '767px' },

            'sm': { 'max': '639px' },

            'min-2xl': { 'min': '1536px' },

            'min-xl': { 'min': '1280px' },

            'min-lg': { 'min': '1024px' },

            'min-md': { 'min': '768px' },

            'min-sm': { 'min': '640px' },
        }
    },
    variants: {
        extend: {
            filter: ['hover'],
            brightness: ['hover'],
            contrast: ['hover'],
            transform: ['group-hover', 'hover'],
            translate: ['group-hover'],
            scale: ['hover'],
            backgroundImage: ['hover'],
            borderStyle: ['hover', 'focus'],
        },
    },
    plugins: [],
}