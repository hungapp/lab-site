import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import Layout from "../components/layout"
import Container from "../components/container"
import hero from "../images/hero.png"

const HeroImage = styled.div`
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  // background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../images/hero.png");

  /* Set a specific height */
  height: 50%;

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
`

const HeroText = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroImage>
        <img src={hero} alt="Hero" />>
        <HeroText>
          <h2>
            Investigating the molecular role of G quadruplex DNA in genome
            stability and human disease
          </h2>
        </HeroText>
      </HeroImage>
      <Container>
        <p>
          Our lab studies the mechanisms that control normal and pathogenic
          functions of G quadruplex DNA, a non-canonical DNA structure that
          forms readily in guanine-rich sequences. Estimates of the number of
          quadruplexes in the human genome range from ~10,000 to hundreds of
          thousands; they are often found in gene regulatory regions and are
          enriched in telomeric sequences. Quadruplexes play roles in essential
          cellular processes including transcription, translation, and DNA
          replication. At the same time, quadruplexes trigger genome instability
          and are associated with cancer. The goal of our research is to
          leverage a fundamental understanding of G quadruplex biology to design
          therapeutic strategies for human disease. We use a variety of
          experimental approaches including molecular and cell biology,
          biochemistry, genetics, and computational biology to study G
          quadruplexes in mammalian cells and murine models.
        </p>
      </Container>
    </Layout>
  )
}

export default IndexPage
