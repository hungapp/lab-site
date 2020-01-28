import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <Hero />
      <h2>
        Investigating the molecular role of G quadruplex DNA in genome stability
        and human disease
      </h2>
    </Layout>
  )
}

export default IndexPage
