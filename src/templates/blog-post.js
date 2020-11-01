import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import marked from "marked"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.microcmsBlog
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const html = marked(post.content)
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.title}
        // description={post.frontmatter.description || post.excerpt}
      />
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
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
          {next && (
              <Link to={`/${next.blogId}`} rel="next">
                {'<'} {next.title}
              </Link>
            )}
          </li>
          <li>
          {previous && (
              <Link to={`/${previous.blogId}`} rel="prev">
                 {previous.title} {'>'}
              </Link>
            )}
          </li>
        </ul>
      </nav>
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
