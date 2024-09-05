import { Link } from "gatsby"
import React from "react"

export const AppCard = props => {
  const { title, eyeCatch, link } = props
  return (
    <Link to={link}>
      <div className="card bg-base-100 image-full w-32 h-32  shadow-xl">
        <figure className="w-32 h-32">
          <img src={eyeCatch} alt="Shoes" />
        </figure>
        <div className="card-body p-2 items-center text-center flex justify-center">
          <h2 className="font-serif">{title}</h2>
        </div>
      </div>
    </Link>
  )
}
