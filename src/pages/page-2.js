import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Image from "../components/image"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> 
      <Image />
    </div>
  </Layout>
)

export default SecondPage
