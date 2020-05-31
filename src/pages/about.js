import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <Helmet title="Portfolio | About" />
      <h2>Who am I?</h2>
      <p>
        I'm a Frontend React JS Developer with nearly 3 years of experience, and
        is living in Bangalore. I am seeking for a challenging position as a
        React JS | Frontend Developer in an organization with interesting
        people, work and culture, where I can utilize my skills I have gained so
        far and be a valuable asset to the organization as well as achieve my
        goals.
      </p>
    </Layout>
  )
}

export default AboutPage
