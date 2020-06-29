module.exports = {
  siteMetadata: {
    title: `Da Vinci Artisanal`,
    description: `Homestyle Mediterranean Cuisine`,
    // keywords: `restaurant, dinner, lunch, italian, pizza, take-aways, sedgefield`,
    author: `me`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdowns`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Da Vinci Artisanal`,
        short_name: `Da Vinci Artisanal`,
        description: `Homestyle Mediterranean Cuisine in Sedgefield. Open for lunch and dinner on Wednesday, Friday, and Saturday for lunch`,
        start_url: `/`,
        background_color: `#511151`,
        theme_color: `#511151`,
        display: `minimal-ui`,
        icon: `src/images/flag.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
