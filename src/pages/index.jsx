import React, { useEffect } from "react"
import Layout from "../components/layout"
import { UserCard } from "../components/UserCard"
import { ContentsCard } from "../components/ContentsCard"
import { AppCardList } from "../components/AppCardList"
import Seo from "../components/seo"
import { graphql } from "gatsby"

export const StartPage = ({ location, data }) => {
  const posts = data.allMicrocmsBlogs.nodes
  // useEffect(() => {
  //   alert(posts.map(data => data.title))
  // }, [])
  return (
    <>
      <Layout location={location}>
        <Seo
          title="AugusTaroの館"
          eyecatch="https://augustaro.github.io/My_Images/MyIcon/MyIcon.jpg"
        >
          <div className="flex justify-center  ">
            <div className="px-5 pt-5  max-w-md ">
              <UserCard />

              <div className="flex justify-center my-5">
                <div className="grid grid-cols-2  gap-4">
                  <ContentsCard
                    title="ブログ"
                    discribe="個人開発に関する技術記事、その他雑記を投稿しています！"
                    link="/blogIndex"
                  />
                  <AppCardList
                    title="アプリ"
                    discribe="作成したWebアプリを追加予定です！"
                    apps={posts}
                  />
                </div>
              </div>
            </div>
          </div>
        </Seo>
      </Layout>
    </>
  )
}

export default StartPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMicrocmsBlogs(
      sort: { fields: [createdAt], order: DESC }
      filter: { category: { elemMatch: { name: { eq: "WebApp" } } } }
    ) {
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
