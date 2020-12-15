import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Post from "../components/post"
import Pagination from "../components/pagination"

import "typeface-open-sans"

const BlogIndex = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMicrocmsBlog.edges
  const Posts = posts.map(({node}) => (
    <Post
      blogId = {node.blogId}
      title = {node.title}
      date = {node.date}
      excerpt = {node.description}
    />
  ))

  return (
    <Layout location={location} title={siteTitle} >
      <SEO title="All posts" />
      <Pagination context={pageContext} />
      <ol style={{ listStyle: `none`}}>
      {Posts}
      </ol>
      <Pagination context={pageContext} />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query MyQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMicrocmsBlog(
      sort: { fields: date, order: DESC},
      limit: $limit,
      skip: $skip
      ) {
      edges {
        node {
          blogId
          title
          date(formatString: "MMMM DD, YYYY")
          content
          description
        }
      }
    }
  }
`
