// src/templates/article.js
import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import "tailwindcss/tailwind.css"
import { useEffect } from "react"
import Prism from "prismjs"
import Seo from "../components/seo"

const ArticlePost = ({ data, location }) => {
  const post = data.microcmsBlogs
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Layout location={location}>
      <Seo
        title={post.title}
        description={
          post.content
            ? post.content.slice(0, 150)
            : "コンテンツが存在しません。"
        }
        eyecatch={post.eyecatch.url}
      ></Seo>
      <div
        className="prose p-5 mx-auto lg:max-w-full font-sans bg-base-200"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>

      <div className="w-full  p-10 flex justify-center ">
        <Link to="/blogIndex">
          <div className="btn  btn-secondary btn-sm my-5">記事の一覧に戻る</div>
        </Link>
      </div>
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
