import { Link } from "gatsby"
import { FC } from "react"
import React from "react"
// type Props = {
//   title: string
//   link: string
//   createdAt: string
//   id: string
// }
function formatDateTime(datetimeString) {
  const date = new Date(datetimeString)

  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  const hours = String(date.getHours()).padStart(2, "0")
  const minutes = String(date.getMinutes()).padStart(2, "0")

  return `${year}-${month}-${day}, ${hours}:${minutes}`
}
export const ArticleCard = props => {
  const { id, title, link, category, createdAt } = props
  return (
    <>
      <Link to={link}>
        <div className="w-full px-4 ">
          <div className="card card-compact bg-base-100  shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p className="font-sans font-light text-sm text-gray-600 leading-relaxed">
                {formatDateTime(createdAt)}
              </p>
              <div className="card-actions justify-end">
                {category.map(category => (
                  <button className="btn btn-xs">{category.name}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}
