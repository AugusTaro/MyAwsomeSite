import { Link } from "gatsby"
import * as React from "react"
export const ContentsCard = props => {
  const { title, discribe, link } = props
  return (
    <div className="card bg-base-100 shadow-lg  ">
      <div className="card-body p-5">
        <h1 className=" text-center font-bold">{title}</h1>
        <p className="font-sans text-sm">{discribe}</p>
        <div className="card-actions justify-end ">
          <Link to={link}>
            <button className="btn  btn-ghost  shadow-md text-[#a1db44]">
              GO!
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
