import React from "react"
// import { Link } from "gatsby"
// import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../components/layout"
import HeroImage from "../components/HeroImage"
// import Image from "../components/image"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroImage
      title="hero"
      fluid={data.hero.childImageSharp.fluid}
      overlayColor="#04040454"
    >
      <header className={'col'}>
        <h2>Homestyle Mediterranean Cuisine</h2>
      
        <hr />

        <table>
          <thead>
            <tr>
              <th><strong>Days</strong></th>
              <th><strong>Times</strong></th>
            </tr>
          </thead>
          <tbody>
            <tr className={'bb'}>
              <td>Wednesday</td>
              <td>12 - 8pm</td>
            </tr>
            <tr className={'bb'}>
              <td>Friday</td>
              <td>12 - 8pm</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>12 - 5pm</td>
            </tr>
          </tbody>
        </table>

        <hr />

        <p>Make sure to book in advance as we are often full.</p>
        <a className={'tel'} href={'tel:+27 74 103 8322'}><strong>+27 74 103 8322</strong></a>
      </header>

    </HeroImage>

    {/*
      <Img
        className="headshot"
        fixed={data.mast.childImageSharp.fixed}
        alt="headshot"
      />       
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> 
        <Image />
      </div>
        <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/recipes/">Recipes</Link> <br />
    */}

  </Layout>
)

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "bg-masthead.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1094) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
// cna't use comments inside a query
// # mast: file(relativePath: { eq: "bg-masthead.jpg" }) {
//   #   childImageSharp {
//   #     fixed(width: 125, height: 125) {
//   #       ...GatsbyImageSharpFixed
//   #     }
//   #   }
//   # },
export default IndexPage