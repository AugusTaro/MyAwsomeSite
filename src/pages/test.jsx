import * as React from "react"

import Layout from "../components/layout"
;<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
const Test = ({ data, location }) => {
  const siteTitle = `Title`

  const blogsId = "xd_gba2czm"
  return (
    <>
      <Layout location={location}>
        <div className="prose">
          <h1>えいちわん</h1>
          <h2>えいちつー</h2>
          <h3>えいちすり</h3>
          <p>ぴーちゃん</p>
        </div>
      </Layout>
    </>
  )
}

export default Test
