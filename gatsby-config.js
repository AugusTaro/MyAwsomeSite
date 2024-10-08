/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const path = require("path")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `オーガスタロウの館`,
    author: {
      name: `水島エクスプロージョン`,
      summary: `東京で個人開発してます!。MacBookのキーボードタッチパッドが好きです。`,
    },
    description: `個人開発に関するネタを中心に記事を書いています。`,
    siteUrl: `https://augustaro.com`,
    social: {
      twitter: `eXplosion_dev`,
    },
  },
  plugins: [
    `gatsby-plugin-typescript`,
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.MICROCMS_API_KEY,
        serviceId: process.env.MICROCMS_SERVICE_ID,
        apis: [
          {
            endpoint: process.env.MICROCMS_ENDPOINT,
          },
        ],
      },
    },

    `gatsby-plugin-image`,
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

        display: `minimal-ui`,
        icon: `src/images/アイコン.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`${process.env.GOOGLE_ANALYTICS_ID}`], // 控えておいた、測定IDを記載します。
        pluginConfig: {
          head: true, // headタグに記載されるようにコンフィグを設定します。
        },
      },
    },
  ],
}
