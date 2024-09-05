import React from "react"
export const CategoryButtons = ({ category }) => {
  return (
    <>
      {category.map(category => {
        return (
          <button
            className="mx-0.5 btn btn-sm p-1 shadow-md font-sans"
            key={category.id}
          >
            {category.name}
          </button>
        )
      })}
    </>
  )
}
