module.exports = ctx => ({
	plugins: {
		autoprefixer: {
			browsers: ['last 2 versions', 'ie >= 10'],
		},
		cssnano: ctx.env === 'production' ? {} : false,
	},
});
