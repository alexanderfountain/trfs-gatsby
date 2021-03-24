import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Property = ({ data }) => {
  console.log(data)
  const node = data.property
  console.log(node)
  return (
    <Layout>
      {node.address && <h1>{node.address.full}</h1>}
      {node.photos && node.photos.map((photo, index) => <img src={photo} />)}
    </Layout>
  )
}
export default Property

export const productQuery = graphql`
query PropertyByMlsid($mlsId: Int!) {
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
