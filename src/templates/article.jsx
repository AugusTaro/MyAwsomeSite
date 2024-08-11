// src/templates/article.js
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "tailwindcss/tailwind.css"
import { useEffect } from "react"
import Prism from "prismjs"

const ArticlePost = ({ data, location }) => {
  const post = data.microcmsBlogs
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Layout location={location}>
      <div
        className="prose p-5 mx-auto lg:max-w-full font-sans bg-base-300"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </Layout>
  )
}

export default ArticlePost

export const query = graphql`
  query ($blogsId: String!) {
    microcmsBlogs(blogsId: { eq: $blogsId }) {
      title
      content
      eyecatch {
        url
        width
        height
      }
    }
  }
`
