import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Image from "../components/image"
import HeroImage from "../components/HeroImage"

const SecondPage = ({data}) => (
  <Layout>
    <SEO title="Page two" />
    <HeroImage
      title="astronaut"
      fluid={data.mew.childImageSharp.fluid}
      overlayColor="#04040454"
    >
    <h2 style={{ color: "white" }}>Look at me!</h2>
  </HeroImage>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> 
      <Image />
    </div>
  </Layout>
)

export const query = graphql`
  query {
    mew: file(relativePath: { eq: "bg-masthead.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default SecondPage
