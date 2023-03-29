const context = require.context("api", true, /\.js$/);
let api = {}

context.keys().forEach((e) => {
	api = {
		...api,
		...context(e).default
	};
});

export default {
	...api
}
