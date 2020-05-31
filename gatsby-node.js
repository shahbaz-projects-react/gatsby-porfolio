/**Here we will use the Gatsby APIs to dynamically load page */

const path = require("path")

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === "MarkdownRemark") {
//     /**We will need to modify the path. Node.js provides us with methods to do so. Visit Nodejs.org>API>path>basename() */
//     const slug = path.basename(node.fileAbsolutePath, ".md")
//     // console.log(slug)
//     // console.log(JSON.stringify(node, undefined, 4)) //(obj,filtering func, spaces)
//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }

/**Making it async await Fn to do something with the response */
module.exports.createPages = async ({ graphql, actions }) => {
  //1.Get path to the template
  //2.Get the MD data
  //3.Create the page
  const { createPage } = actions
  const projectTemplate = path.resolve("./src/templates/project.js")
  const res = await graphql(`
    query {
      allContentfulProject {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulProject.edges.forEach(edge => {
    createPage({
      component: projectTemplate,
      path: `/projects/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
