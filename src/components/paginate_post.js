import { Link } from "gatsby"
import React from "react"

const Paginationpost = ({ data }) => {
	const { next, previous } = data;

	return (
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
	)
}

export default Paginationpost