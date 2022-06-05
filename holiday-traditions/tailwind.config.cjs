module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	daisyui: {
		themes: [
			{
				mht: {
					"primary": "#2C3984",
					"secondary": "#C09232",
					"accent": "#057AFF",
					"neutral": "#021431",
					"base-100": "#FFFFFF",
					"info": "#BAEFF7",
					"success": "#baf7ca",
					"warning": "#f7f4ba",
					"error": "#f7baba"
				},
			},
		],
	},
	plugins: [require("daisyui")]
};
