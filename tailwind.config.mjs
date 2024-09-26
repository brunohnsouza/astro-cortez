/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				cultured: "var(--cultured)",
				white: "var(--white)",
				black: "var(--black)",
				blackOpacity: "var(--black-opacity)",
				darkVanilla: "var(--dark-vanilla)",
			},
		},
	},
	plugins: [],
};
