import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import marked from "marked"
import Paginationpost from "../components/paginate_post"

const BlogPostTemplate = ({ data, location, pageContext }) => {
  const post = data.microcmsBlog
  const siteTitle = data.site.siteMetadata?.title || `Title`
  // const { previous, next } = data
  const html = marked(post.content)
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.title}
      />
      <Paginationpost data={data}/>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h2 itemProp="headline">{post.title}</h2>
          <p>{post.date}</p>
        </header>
        
        <section
          dangerouslySetInnerHTML={{ __html: html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
        </footer>
      </article>
      <Paginationpost data={data}/>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    microcmsBlog(blogId: { eq: $id }) {
      blogId
      title
      date(formatString: "DD MMMM, YYYY")
      content
    }
    previous: microcmsBlog(blogId: { eq: $previousPostId }) {
      blogId
      title
    }
    next: microcmsBlog(blogId: { eq: $nextPostId }) {
      blogId
      title
    }
  }
`
