module.exports = function(api) {
	api.cache(true);
	const presets = ["next/babel", "@babel/preset-react"];
	return {
		presets
	};
};