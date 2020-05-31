import React from "react"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/head"
// import { graphql } from "gatsby"

// export const query = graphql`
//   query($slug: String) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query($slug: String) {
    contentfulProject(slug: { eq: $slug }) {
      title
      slug
      githubLink
      demoLink
      image {
        description
        fluid {
          src
        }
      }
      body {
        json
      }
    }
  }
`

const Project = props => {
  //options to be passes as 2nd param
  // const options = {
  //   renderNode: {
  //     "embedded-asset-block": node => {
  //       const alt = node.data.target.fields.title["en-US"]
  //       const url = node.data.target.fields.file["en-US"].url
  //       return <img alt={alt} src={url} />
  //     },
  //   },
  // }

  return (
    <Layout>
      <Head title={props.data.contentfulProject.title} />
      <a
        href={props.data.contentfulProject.githubLink}
        target="_blank"
        rel="noopener"
      >
        Github
      </a>
      <a
        href={props.data.contentfulProject.demoLink}
        target="_blank"
        rel="noopener"
      >
        <div
          style={{
            backgroundImage: `url(${
              props.data.contentfulProject.image.fluid.src
            })`,
            width: "100%",
          }}
        />
        Demo App
      </a>
      <h1>{props.data.contentfulProject.title}</h1>
      {documentToReactComponents(
        props.data.contentfulProject.body.json
        // options
      )}
    </Layout>
  )
}

export default Project
