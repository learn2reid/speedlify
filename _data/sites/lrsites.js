module.exports = {
	name: "LR Sites", // optional, falls back to object key
	description: "The default sites that get tested",
	options: {
		runs: 1,
		frequency: 1, // (in minutes)
	},
	urls: [
		"https://lorellereid.com",
		"https://detroitpopcorn.com",
		"https://iconmedia.live"
	]
};
