const escapeStringRegexp = require("escape-string-regexp")

const pagePath = `content`
const indexName = `Pages`

const pageQuery = `{
  pages: allMicrocmsBlog {
    edges {
      node {
        id
        title
        description
        content
        blogId
      }
    }
  }
}`

function pageToAlgoliaRecord({ node: { id, title, blogId, description, content } }) {
  return {
    objectID: id,
    objectTitle: title,
    objectblogId: blogId,
    objectDescription: description,
    objectContent: content
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:120`] },
  },
]

module.exports = queries