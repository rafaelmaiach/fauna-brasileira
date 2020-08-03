/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

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
				background_color: '#f7f0eb',
				theme_color: '#a2466c',
				display: 'standalone',
			},
		},
		{ resolve: 'gatsby-plugin-offline' },
		{ resolve: 'gatsby-plugin-sass' },
	],
};
