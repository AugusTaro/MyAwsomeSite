import * as React from "react"
import { Link } from "gatsby"
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
    <div data-is-root-path={isRootPath}>
      {/* <header>{header}</header> */}
      <header></header>
      <Navbar />
      <div className="overfl">
        <main>
          <div>{children}</div>
        </main>
      </div>
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer> */}
    </div>
  )
}

export default Layout
