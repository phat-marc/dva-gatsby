import React from "react"
import { Link } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroImage from "../components/HeroImage"
import Image from "../components/image"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroImage
      title="hero"
      fluid={data.hero.childImageSharp.fluid}
      overlayColor="#04040454"
    >
      <h2 style={{ color: "white" }}>Homestyle Mediterranean Cuisine</h2>
    </HeroImage>
    {/*<Img
      className="headshot"
      fixed={data.mast.childImageSharp.fixed}
      alt="headshot"
    />*/}
    <div>
      <hr />
      <table>
        <thead>
          <tr>
            <th><strong>Days</strong></th>
            <th><strong>Times</strong></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Wednesday</td>
            <td>12 - 8pm</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>12 - 8pm</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>12 - 5pm</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> 
      <Image />
    </div>
    
      <hr />
      <p>Make sure to book in advance as we are often full.</p>
      <a id="telephone" href="tel:+27 74 103 8322"><strong>+27 74 103 8322</strong></a>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/recipes/">Recipes</Link> <br />
  </Layout>
)

export const query = graphql`
  query {
    # mast: file(relativePath: { eq: "bg-masthead.jpg" }) {
    #   childImageSharp {
    #     fixed(width: 125, height: 125) {
    #       ...GatsbyImageSharpFixed
    #     }
    #   }
    # },
    hero: file(relativePath: { eq: "bg-masthead.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage