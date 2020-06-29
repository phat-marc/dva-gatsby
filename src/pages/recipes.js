import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Styled components
const BlogLink = styled(Link)`
text-decoration: none;
`
const BlogTitle = styled.h3`
margin-bottom: 1rem;
color: blue;
`


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
		    {data.allMarkdownRemark.edges.map(({ node }) => (
		    		<div	key={node.id}>
		    			<BlogLink to={node.fields.slug}>
			    			<BlogTitle><h3>{node.frontmatter.title}</h3></BlogTitle> 
			    			<p>{node.frontmatter.date}</p>
		    			</BlogLink>
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
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC 	}) {
    edges {
      node {
        id
        frontmatter {
          date
          description
          title
        }
				fields {
					slug
				}
        excerpt
      }
    }
    totalCount
  }
}`
