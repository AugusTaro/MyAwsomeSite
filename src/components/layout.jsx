import * as React from "react"
import { Navbar } from "./Navbar"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = <></>
  } else {
    header = <></>
  }

  return (
    <div className="" data-is-root-path={isRootPath}>
      {/* <header>{header}</header> */}
      <header></header>
      {/* ヘッダーです */}
      <Navbar />

      <main>
        <div>{children}</div>
      </main>
    </div>
  )
}

export default Layout
