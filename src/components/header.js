import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: 0
    }}
  >
    <div
      style={{
        display: `flex`,
        flexDirection: `row`,
        alignItems: `flex-end`,
        justifyContent: `space-between`,
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}>{siteTitle}</Link>
      </h1>
      <div>
        <Link to="/page-2/"
          style={{
            color: `white`,
            textDecoration: `none`,
            margin: `0 1rem`
          }}>Go to page 2</Link>
        <Link to="/recipes/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}>Recipes</Link> 
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
