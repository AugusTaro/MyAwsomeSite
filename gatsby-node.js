const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
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
    reporter.panicOnBuild("CreatePageのクエリでエラーが出ました。")
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
}
