import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { ArticleCard } from "../components/ArticleCard"

const BlogIndex = ({ data, location }) => {
  const siteTitle = `Title`
  const posts = data.allMicrocmsBlogs.nodes

  // URLパラメータの取得
  // URLSerchParamsは、クエリパラメータを解析するためのJS標準API
  const searchParams = new URLSearchParams(location.search)
  const categoryName = searchParams.get("category")

  // フィルタリングロジック
  const filteredPosts = categoryName
    ? posts.filter(post =>
        post.category.some(category => category.name === categoryName)
      )
    : posts

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title="All articles"
        eyecatch="https://augustaro.github.io/My_Images/MyIcon/MyIcon.jpg"
      />
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-10">
              <h2 className="text-2xl font-bold text-center">
                コンテンツが存在しません
              </h2>
            </div>
          ) : (
            filteredPosts.map(post => {
              const title = post.title || "Title"
              const link = `/articles/${post.blogsId}`
              const key = post.id
              const createdAt = post.createdAt
              const category = post.category
              const eyecatch = post.eyecatch.url
              return (
                <div className="p-2">
                  <ArticleCard
                    key={key}
                    title={title}
                    createdAt={createdAt}
                    link={link}
                    category={category}
                    eyecatch={eyecatch}
                  />
                </div>
              )
            })
          )}
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMicrocmsBlogs(sort: { fields: [createdAt], order: DESC }) {
      nodes {
        id
        title
        content
        blogsId
        createdAt
        eyecatch {
          url
        }
        category {
          name
        }
      }
    }
  }
`
