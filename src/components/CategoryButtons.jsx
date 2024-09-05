import { Link } from "gatsby"
import React from "react"
export const CategoryButtons = ({ category }) => {
  return (
    <>
      {category.map(category => {
        return (
          <Link to={`/blogIndex?category=${encodeURIComponent(category.name)}`}>
            <div
              className="mx-0.5 btn btn-sm p-1 shadow-md font-sans"
              key={category.id}
            >
              {category.name}
            </div>
          </Link>
        )
      })}
    </>
  )
}
