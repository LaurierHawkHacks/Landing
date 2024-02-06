import defaultTheme from 'tailwindcss/defaultTheme';
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontSize: {
                '5xl': '2.5rem',
            },
            fontFamily: {
                sans: ['"Raleway"', ...defaultTheme.fontFamily.sans],
                serif: ['"Poppins"', ...defaultTheme.fontFamily.serif],
            },
            colors: {
                peachPuff: '#FDDDB7',
                eggShell: '#F1E7DF',
                dustStorm: '#EBCACC',
                brightUbe: '#CBAAF4',
                paleViolet: '#BAA3FA',
                blueGreen: '#0FA3B1',
                cadetBlue: '#0C6975',
                slateGray: '#31495C',
                copper: '#DE846E',
                khakiYellow: '#F0E698',
                dimGray: '#4A4F50',
            },
            dropShadow: {
                sm: '0px 10px 15px rgba(255, 255, 255, 0.20)',
                '2xl': [
                    '0 35px 35px rgba(255, 255, 255, 0.25)',
                    '0 45px 65px rgba(255, 255, 255, 0.15)',
                ],
            },
        },
    },
    plugins: [],
};
