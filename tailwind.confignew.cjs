module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			{
				winter: {
					...require("daisyui/src/colors/themes")["[data-theme=winter]"],
					primary: "#2C3984",
					secondary: "#047AFF",
					accent: "#C09232"
				}
			},
		],
	},
	plugins: [require("daisyui")]
};
