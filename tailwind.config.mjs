import defaultTheme from 'tailwindcss/defaultTheme';
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Raleway"', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "midnight": "#001236",
                "lilac": "#523FF4",
                "tahiti": "#8375FF",
                "mint": "#12B3C2",
                "lavender": "#CEDFFF",
            },
        },
    },
    plugins: [],
};
