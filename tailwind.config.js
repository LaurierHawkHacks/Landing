/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Raleway"', ...defaultTheme.fontFamily.sans],
				roboto: ['"Poppins"', ...(defaultTheme.fontFamily.sans - serif)],
			},
		},
	},
	plugins: [],
};
