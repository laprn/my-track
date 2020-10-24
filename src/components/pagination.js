import { Link } from "gatsby"
import React from "react"

const Pagination = ({ context }) => {
	// const { pageNumber } = props;
	const { previousPagePath, nextPagePath } = context;

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
          {previousPagePath ? <Link to={previousPagePath}>{'<'} Next</Link> : null }
          </li>
          <li>
		{nextPagePath ? <Link to={nextPagePath}>Previous {'>'}</Link> : null }
          </li>
        </ul>
      </nav>
		// <div className="pagination">
		// 	{previousPagePath ? <Link to={previousPagePath}>← Next</Link> : null }
		// 	{nextPagePath ? <Link to={nextPagePath}>Previous →</Link> : null }
		// </div>
	)
}

export default Pagination