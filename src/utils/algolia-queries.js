const escapeStringRegexp = require("escape-string-regexp")

const pagePath = `content`
const indexName = `Pages`

const pageQuery = `{
  pages: allMicrocmsBlog {
    edges {
      node {
        id
        title
        blogId
      }
    }
  }
}`

function pageToAlgoliaRecord({ node: { id, title, blogId } }) {
  return {
    objectID: id,
    objectTitle: title,
    objectblogId: blogId,
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries