import React from "react"
import { graphql } from "gatsby"
import ModernPage from "../components/pages/ModernPage"

export const StartPage = ({ location, data }) => {
  return <ModernPage location={location} data={data} />
}

export default StartPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMicrocmsBlogs(
      sort: { fields: [createdAt], order: DESC }
      filter: { category: { elemMatch: { name: { eq: "WebApp" } } } }
    ) {
      nodes {
        id
        title
        content
        blogsId
        createdAt
        eyecatch {
          url
        }
        category {
          name
        }
      }
    }
  }
`
