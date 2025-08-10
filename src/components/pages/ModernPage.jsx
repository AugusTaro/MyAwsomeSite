import React from "react"
import Layout from "../layout"
import { UserCard } from "../UserCard"
import { ContentsCard } from "../ContentsCard"
import { AppCardList } from "../AppCardList"
import Seo from "../seo"

const ModernPage = ({ location, data }) => {
  const posts = data.allMicrocmsBlogs.nodes

  return (
    <>
      <Layout location={location}>
        <Seo
          title="AugusTaroの館 - モダンver"
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

export default ModernPage