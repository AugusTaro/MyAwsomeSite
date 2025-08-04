import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { LINK_URLS } from "../constants/linkURLs"
export const UserCard = () => {
  return (
    <div className="card bg-base-100   shadow-xl  ">
      <div className="flex flex-col  items-center">
        <StaticImage
          src={`https://images.microcms-assets.io/assets/2c75ba332789475395c0cca2e265d0de/13f97ea87e1849e49d4c9b0297a5af32/water_simple_.png`}
          alt="UserIcon"
          className="rounded-full w-32 mt-2"
        />

        <h1 className="card-title font-serif">オーガスタロウ/Augustaro</h1>

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
                className="rounded-full w-8 mx-2 bg-black"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body  py-5">
        <h2 className="card-title font-serif text-[#a1db44] ">
          Who is Augustaro？
        </h2>
        <h2>
          software engineerの益荒男です。
          <br />
          冷水を浴びるのが好きです。
          <br />
          よろしくお願いします⊂( `ᾥ´ )っ
        </h2>
      </div>
    </div>
  )
}
