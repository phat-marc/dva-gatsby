import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
	console.log(data)
	return(
	  <Layout>
	    <SEO title="Recipes" />
	    <div>
	    	<p><strong>WELCOME TO</strong></p>
		    <h2>Da Vinci Cooking</h2>
		    <p>This is where you will learn to cook Mediterranean style food at home</p>
		    <h4>{data.allMarkdownRemark.totalCount}</h4>
		    {
		    	data.allMarkdownRemark.edges.map(({node}) => (
		    		<div	key={node.id}>
		    			<h3>{node.frontmatter.title}</h3> 
		    			<h4>{node.frontmatter.date}</h4>
		    			<p>{node.excerpt}</p>
		    		</div>
		    		))
		    }
	    </div>
	    <Link to="/">Go back to the homepage</Link>
	  </Layout>
)}

export const query = graphql`
query {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          date
          description
          title
        }
        excerpt
      }
    }
    totalCount
  }
}`
