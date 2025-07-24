const path = require(`path`)
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  
  try {
    const result = await graphql(
      `
        {
          allMicrocmsBlogs(sort: { fields: [createdAt], order: DESC }) {
            edges {
              node {
                blogsId
                createdAt
                title
                eyecatch {
                  url
                }
              }
            }
          }
        }
      `
    )
    
    if (result.errors) {
      reporter.panicOnBuild("CreatePageのクエリでエラーが出ました。", result.errors)
      return
    }
    
    if (!result.data || !result.data.allMicrocmsBlogs) {
      reporter.panicOnBuild("MicroCMSからデータを取得できませんでした。環境変数を確認してください。")
      return
    }
    const articles = result.data.allMicrocmsBlogs.edges

    articles.forEach(({ node }) => {
      createPage({
        path: `/articles/${node.blogsId}`, // 各記事に対して一意のURLを生成
        component: path.resolve("./src/templates/article.jsx"),
        context: {
          blogsId: node.blogsId,
        },
      })
    })
    
    reporter.info(`${articles.length}個の記事ページを生成しました。`)
    
  } catch (error) {
    reporter.panicOnBuild("MicroCMSとの通信でエラーが発生しました:", error)
  }
}
