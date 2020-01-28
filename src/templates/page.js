import React, { Component } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

import Container from "../components/container"

class Page extends Component {
  render() {
    const StaticPage = this.props.data.wordpressPage

    return (
      <Layout>
        <Container>
          <h1 dangerouslySetInnerHTML={{ __html: StaticPage.title }}></h1>
          <div dangerouslySetInnerHTML={{ __html: StaticPage.content }} />
        </Container>
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
  }
`
