import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Property = ({ data }) => {
  const node = data.property
  console.log(node)
  return (
    <Layout>
      <h1>{node.address.full}</h1>
      {node.photos.map((photo, index) => (
        <img src={photo} />
      ))}
    </Layout>
  )
}
export default Property

export const productQuery = graphql`
  query($mlsId: Int!) {
    property: internalPosts(mlsId: { eq: $mlsId }) {
      mlsId
      address {
        city
        full
      }
      photos
    }
  }
`
