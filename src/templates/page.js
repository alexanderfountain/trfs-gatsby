import React from "react"
import { graphql } from "gatsby"
// Sort and display the different slice options

const Page = ({ data }) => {
  const node = data.page

  return (
    <div>
      <h1>{node.data.title.text}</h1>
    </div>
  )
}
export default Page

export const postQuery = graphql`
  query PageBySlug($uid: String!) {
    page: prismicPage(uid: { eq: $uid }) {
      uid
      id
      type
      data {
        title {
          text
        }
      }
    }
  }
`
