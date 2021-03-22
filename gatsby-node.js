// const path = require("path")
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const pages = await graphql(`
//     {
//       page: allPrismicPage {
//         nodes {
//           uid
//         }
//       }
//     }
//   `)
//   const pageTemplate = path.resolve("src/templates/page.js")
//   pages.data.page.nodes.forEach(node => {
//     if (node.uid == "home") {
//       createPage({
//         path: `/`,
//         component: pageTemplate,
//         context: {
//           uid: node.uid,
//         },
//       })
//     } else {
//       createPage({
//         path: `/${node.uid}`,
//         component: pageTemplate,
//         context: {
//           uid: node.uid,
//         },
//       })
//     }
//   })
// }

// const { createFilePath } = require(`gatsby-source-filesystem`)
// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions
//   console.log(node.internal.type)
//   if (node.internal.type === `PrismicPage`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }
