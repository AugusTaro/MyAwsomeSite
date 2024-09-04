import { Link } from "gatsby"
import { FC } from "react"
import React from "react"
import { formatDateTime } from "../utils/formatDateTime"
import { CategoryButtons } from "./CategoryButtons"
// type Props = {
//   title: string
//   link: string
//   createdAt: string
//   id: string
// }

// function formatDateTime(datetimeString) {
//   const date = new Date(datetimeString)

//   const year = date.getFullYear()
//   const month = String(date.getMonth() + 1).padStart(2, "0")
//   const day = String(date.getDate()).padStart(2, "0")
//   const hours = String(date.getHours()).padStart(2, "0")
//   const minutes = String(date.getMinutes()).padStart(2, "0")

//   return `${year}-${month}-${day}, ${hours}:${minutes}`
// }
export const ArticleCard = props => {
  const { title, link, category, createdAt, eyecatch } = props
  return (
    <>
      <Link to={link}>
        <div className="card bg-base-100 image-full w-full h-52 shadow-xl">
          <figure className="h-full w-full">
            <img src={eyecatch} alt="Shoes" className="object-cover w-full" />
          </figure>
          <div className="card-body flex flex-col justify-between">
            <div className="h-24 ">
              <h2 className="card-title text-white text-xl ">{title}</h2>
            </div>

            <p className=" font-sans font-light   leading-relaxed">
              {formatDateTime(createdAt)}
            </p>
            <div className=" h-6">
              <CategoryButtons category={category} />
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}
