/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `オーガスタロウの館`,
    author: {
      name: `水島エクスプロージョン`,
      summary: `東京で個人開発してます!。MacBookのキーボードタッチパッドが好きです。`,
    },
    description: `Javascriptを中心に、プログラミングに技術について紹介するブログです。個人開発に関するネタを中心に発信します。`,
    siteUrl: `https://augustaro.com`,
    social: {
      twitter: `kylemathews`,
    },
  },
  plugins: [
    `gatsby-plugin-typescript`,
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: "oQsmACOtRsDUljsya3OfnRoIhEFMhmlm5fgs",
        serviceId: "explosion",
        apis: [
          {
            endpoint: "blogs",
          },
        ],
      },
    },

    `gatsby-plugin-image`,
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
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `Gatsby`,
        start_url: `/`,
        // background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/アイコン.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
