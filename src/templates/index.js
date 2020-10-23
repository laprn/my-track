import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Post from "./components/post"
import Pagination from "./components/pagination"

const BlogIndex = ({ data, location, props }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = props.data.allMarkdownRemark.edges
  const Posts = posts.map(({node}) => (
    <Post
      slug = {node.fields.slug}
      title = {node.frontmatter.title}
      date = {node.frontmatter.date}
      excerpt = {node.excerpt}
    />
  ))

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <ol style={{ listStyle: `none` }}>
      {Posts}
      </ol>
      <Pagination props={props} />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
