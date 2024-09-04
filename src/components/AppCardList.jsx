import * as React from "react"
import { ModalButton } from "./ModalButton"
export const AppCardList = props => {
  const { title, discribe, apps } = props
  return (
    <div className="card bg-base-100 shadow-lg  ">
      <div className="card-body p-5">
        <h1 className="font-bold text-center">{title}</h1>
        <p className="font-sans text-sm">{discribe}</p>
        <div className="card-actions justify-end">
          <ModalButton apps={apps} />
        </div>
      </div>
    </div>
  )
}
