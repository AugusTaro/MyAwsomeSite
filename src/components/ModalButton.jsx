import * as React from "react"
import { ContentsCard } from "./ContentsCard"
import { AppCard } from "./AppCard"
import { IMAGE_URLS } from "../constants/imageUrls"
export const ModalButton = props => {
  const { apps } = props
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn  btn-ghost  shadow-md text-[#a1db44]"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        open
      </button>
      <dialog id="my_modal_1" className="modal">
        {/* モーダル表示コンテンツ領域 */}
        <div className="modal-box">
          <h3 className="font-bold text-lg">※鋭意製作中</h3>
          <div className="flex justify-center my-10">
            <div className="grid grid-cols-2  gap-4">
              {apps.map(app => {
                return (
                  <>
                    <AppCard
                      title={app.title}
                      eyeCatch={app.eyecatch.url}
                      link={`/articles/${app.blogsId}`}
                    />
                    <AppCard
                      title="準備中"
                      eyeCatch={IMAGE_URLS.UNKNOWN}
                      link=""
                    />
                  </>
                )
              })}
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}
