import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { LINK_URLS } from "../constants/linkURLs"
export const UserCard = () => {
  return (
    <div className="card bg-base-100   shadow-xl  text-gray-600">
      <div className="flex flex-col  items-center">
        <StaticImage
          src={`../images/MyIcon.jpg`}
          alt="UserIcon"
          className="rounded-full w-32 mt-2"
        />

        <h1 className="card-title font-serif">エクスプロージョン/eXplosion</h1>
        <div className="w-50">
          <div className="flex justify-between ">
            <Link to={LINK_URLS.QIITA}>
              <StaticImage
                src={`../images/qiita.png`}
                alt="UserIcon"
                className="rounded-full w-8 mx-2"
              />
            </Link>
            <Link to={LINK_URLS.X}>
              <StaticImage
                src={`../images/x.svg`}
                alt="UserIcon"
                className="rounded-full w-8 bg-black mx-2"
              />
            </Link>
            <Link to={LINK_URLS.GITHUB}>
              <StaticImage
                src={`../images/github.svg`}
                alt="UserIcon"
                className="rounded-full w-8 mx-2"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body  py-5">
        <h2 className="card-title font-serif text-[#a1db44] ">
          Who is eXplosion？
        </h2>
        <h2>
          東京で働くSE3年目です。
          <br />
          React開発の魅力に取り憑かれ毎日朝から開発してます！朝の冷水シャワーが趣味です。
          <br />
          よろしくお願いします⊂( `ᾥ´ )っ
        </h2>
      </div>
    </div>
  )
}
