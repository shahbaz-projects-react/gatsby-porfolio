import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import projectsStyles from "./projects.module.scss"
import Head from "../components/head"
// import sal from "sal.js"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            excerpt
          }
        }
      }
      allContentfulProject {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)
  //Markdown queries - replaced with Contentful
  return (
    <Layout>
      <Head title="Projects" />
      <Helmet title="Portfolio | Projects" defer={false} />
      <h2>Projects</h2>

      <div>
        {data.allContentfulProject.edges.map(item => (
          <h2 className={projectsStyles.post}>
            <Link to={`/projects/${item.node.slug}`}>
              {item.node.title}
              {/* <p>{item.node.excerpt}</p> */}
            </Link>
          </h2>
        ))}
      </div>
    </Layout>
  )
}

export default Projects
