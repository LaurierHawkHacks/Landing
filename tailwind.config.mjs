import defaultTheme from 'tailwindcss/defaultTheme';
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Raleway"', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                base: "#001236",
                primary: "#523FF4",
                secondary: "#8375FF",
                accent: "#12B3C2",
                tertiary: "#CEDFFF",
            },
        },
    },
    plugins: [],
};
