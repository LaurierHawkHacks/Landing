/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      base: '#001236',
      primary: '#523FF4',
      secondary: '#8375FF',
      accent: '#12B3C2',
      text: '#CEDFFF'
    },
		extend: {
			fontFamily: {
				sans: ['"Raleway"', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};