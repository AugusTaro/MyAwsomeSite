import { Link } from "gatsby"
import React from "react"

export const AppCard = props => {
  const { title, eyeCatch, link } = props
  return (
    <Link to={link}>
      <div className="card bg-base-100 image-full w-36  shadow-xl">
        <figure>
          <img src={eyeCatch} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </Link>
  )
}
