import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroImage from "../components/HeroImage"

// STYLED COMPONENTS
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
			<HeroImage
				title="recipes-hero"
				fluid={data.hero.childImageSharp.fluid}
				overlayColor="#04040454">
			<header style={{
				display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
				margin: `0 auto`,
				padding: 16,
				maxWidth: 960,
				minWidth: 360,
				height: `100%`
			}}>
				<p style={{marginBottom: 0, color: `white` }}><strong>WELCOME TO</strong></p>
				<h2 style={{ fontSize: `4rem`, color: `white` }}>DA VINCI COOKING</h2>
				<p style={{ color: `white` }}>This is where you will learn to cook Mediterranean style food at home</p>
			</header>
			</HeroImage>

	    <section style={{
				margin: `0 auto`,
				padding: 16,
				maxWidth: 960,
				minWidth: 360,
			}}>
		    <h4>{data.posts.totalCount} Posts</h4>
		    {data.posts.edges.map(({ node }) => (
					<div	key={node.id}>
						<BlogLink to={node.fields.slug}>
							<BlogTitle>{node.frontmatter.title}</BlogTitle> 
							<p>{node.frontmatter.date}</p>
						</BlogLink>
						<p>{node.excerpt}</p>
					</div>
		    ))}
				<Link to="/">Go back to the homepage</Link>
		  </section>
			
	  </Layout>
)}

export const query = graphql`
query {
  posts: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC 	}) {
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
  },
	hero: file(relativePath: { eq: "recipes-hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
