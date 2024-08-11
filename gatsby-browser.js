// Highlighting for code blocks
import "prismjs/themes/prism-tomorrow.css"

import Prism from "prismjs"

// custom typefaces
import "@fontsource-variable/montserrat"
import "@fontsource/merriweather"

// custom CSS styles.gatsbyスターターのものを流用
import "./src/style.css"
// taillwind
import "./src/styles/global.css"

export const onRouteUpdate = ({ location }) => {
  Prism.highlightAll()
}
export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({
    lang: "ja", // 日本語サイトの場合、"ja"を設定
  })
}
