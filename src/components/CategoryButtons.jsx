import React from "react"
export const CategoryButtons = ({ category }) => {
  return (
    <>
      {category.map(category => {
        return (
          <button key={category.id} className="mx-0.5 btn btn-xs p-0.5 ">
            {category.name}
          </button>
        )
      })}
    </>
  )
}
