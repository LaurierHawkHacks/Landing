import defaultTheme from "tailwindcss/defaultTheme";
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontSize: {
				'5xl': '2.5rem'
			},
			fontFamily: {
				sans: ['"Raleway"', ...defaultTheme.fontFamily.sans],
				serif: ['"Poppins"', ...defaultTheme.fontFamily.serif],
			},
			colors: {
				midnight: "#001236",
				lilac: "#523FF4",
				tahiti: "#8375FF",
				mint: "#12B3C2",
				lavender: "#CEDFFF",
			},
			dropShadow: {
				'sm': '0px 10px 15px rgba(255, 255, 255, 0.20)',
				'2xl': [
				'0 35px 35px rgba(255, 255, 255, 0.25)',
				'0 45px 65px rgba(255, 255, 255, 0.15)'
				]
			}
        },
  },
  plugins: [],
};
			


