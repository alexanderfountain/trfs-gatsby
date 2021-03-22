import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = ({ data }) => {
  const node = data.page
  return (
    <Layout>
      <h1>{node.data.title.text}</h1>
    </Layout>
  )
}
export default Page

export const postQuery = graphql`
  query($uid: String!) {
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
