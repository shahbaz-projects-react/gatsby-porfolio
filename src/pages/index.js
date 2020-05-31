import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Home" />
      <Helmet title="Portfolio | Home" defer={false} />
      <h1>Hi!</h1>
      <h2>I'm {data.site.siteMetadata.author}</h2>
      {/* Link between pages without <a>, which loads new page */}
      <p>
        I'm a *React JS Developer* and a proficient competitive programmer. Have
        worked on many types of projects both professional and personal. Here I
        have shared some of the projects I've developed with ReactJS in the{" "}
        <Link to="/projects">Project</Link> section.
        <p>
          <br />
          Need a developer? <Link to="/contact">Contact</Link>
        </p>
      </p>
    </Layout>
  )
}

export default IndexPage
