import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Head from "../components/head"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          linkedInUrl
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Contact" />
      <Helmet title="Portfolio | Contact" />
      <h2>Contact me!</h2>
      <p>
        Get connected via{" "}
        <a
          href={data.site.siteMetadata.linkedInUrl}
          title="Shahbaz|LinkedIn"
          target="_blank"
          rel="noreferrer noopener"
        >
          LinkedIn
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
