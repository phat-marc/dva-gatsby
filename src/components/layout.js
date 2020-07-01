/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import Hero from "./Hero"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      {/*<Hero><div></div></Hero>  my old hero*/}

      {/* the section wrapper will be removed later
      <section
        style={{
          margin: `0 auto`,
          padding: 16,
          maxWidth: 960,
          minWidth: 360,
        }}
      ></section>*/}
      <main>{children}</main>      
      <footer
        style={{
          padding: `1rem`,
          backgroundColor: `#555`,
          textAlign: `center`,
          color: `#f8f8ff` 
        }}>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://webstorm.app">Mr Mewsby</a>
      </footer>      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
