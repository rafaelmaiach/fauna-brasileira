const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config.js');

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
	/* Your site config here */
	siteMetadata: {
		title: 'Fauna Brasileira',
		siteUrl: 'https://www.faunabrasileira.netlify.app',
		description: 'Fauna Brasileira visa mostrar o cenário da Fauna no Brasil',
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Fauna Brasileira',
				short_name: 'Fauna Brasileira',
				start_url: '/',
				background_color: fullConfig.theme.colors.white,
				theme_color: fullConfig.theme.colors.teal['400'],
				display: 'standalone',
			},
		},
		{ resolve: 'gatsby-plugin-offline' },
		{ resolve: 'gatsby-plugin-sass' },
		{
			resolve: 'gatsby-alias-imports',
			options: {
				aliases: {
					'@': 'src',
				}
			}
		},
		{
			resolve: 'gatsby-plugin-postcss',
			options: {
				postCssPlugins: [
					require('tailwindcss')(tailwindConfig),
					require('autoprefixer'),
				],
			},
		},
	],
};
