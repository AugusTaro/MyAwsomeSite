import * as React from "react"
import Layout from "../components/layout"
import { UserCard } from "../components/UserCard"
import { ContentsCard } from "../components/ContentsCard"
import { AppCard } from "../components/AppCard"
export const StartPage = location => {
  return (
    <>
      <Layout location={location}>
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
                <AppCard
                  title="アプリ"
                  discribe="作成したWebアプリを追加予定です！"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default StartPage
