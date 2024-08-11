import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { ArticleCard } from "../components/ArticleCard"

const BlogIndex = ({ data, location }) => {
  const siteTitle = `Title`
  const posts = data.allMicrocmsBlogs.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title="All articles"
        eyecatch="https://augustaro.github.io/My_Images/MyIcon/MyIcon.jpg"
      />
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map(post => {
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
          })}
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
