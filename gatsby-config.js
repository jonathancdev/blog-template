/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: ['gatsby-plugin-sass', 'gatsby-plugin-mdx', 'gatsby-plugin-fontawesome-css', 'gatsby-plugin-image', 'gatsby-plugin-sharp', 'gatsby-transformer-sharp',
      `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
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
 