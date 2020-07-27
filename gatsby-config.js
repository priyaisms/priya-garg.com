module.exports = {
  siteMetadata: {
    title: `Priya Garg`,
    author: {
      name: `Priya Garg`,
      summary: `:TBD.`,
    },
    description: `Personal website of Priya Garg`,
    siteUrl: `http://priya-garg.com/`,
    social: {
      twitter: `priyaisms`, 
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://priya-garg.us17.list-manage.com/subscribe/post?u=b2d980cb30bb86737661cf9dd&amp;id=7bd1b2654d', 
      },
  },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-plugin-material-ui`,
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-173524993-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/logo.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `assets`,
      },
    },
      // {
      //   resolve: `gatsby-source-filesystem`,
      //   options: {
      //     name: `markdown-pages`,
      //     path: `${__dirname}/src/markdown-pages`,
      //   },
      // },
      // {
      //   resolve: `gatsby-source-filesystem`,
      //   options: {
      //     path: `${__dirname}/src/markdown-pages`,
      //     name: `markdown-pages`,
      //   },
      // },
      // `gatsby-transformer-remark`,
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}