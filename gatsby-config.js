/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: ['gatsby-plugin-sass', 'gatsby-plugin-mdx', 'gatsby-plugin-fontawesome-css',
      {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
],
  siteMetadata: {
    title: 'Blog Name',
    description: 'blog description',
    copyright: 'copyright information'
  }
}
