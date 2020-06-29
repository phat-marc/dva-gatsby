import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Homestyle Mediterranean Cuisine</h2>
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
      <hr />
      <p>Make sure to book in advance as we are often full.</p>
      <a id="telephone" href="tel:+27 74 103 8322"><strong>+27 74 103 8322</strong></a>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/recipes/">Recipes</Link> <br />
  </Layout>
)

export default IndexPage