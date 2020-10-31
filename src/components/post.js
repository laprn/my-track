import React from "react"
import { Link } from "gatsby"
import marked from "marked"

const Post = ({blogId, title, date, excerpt}) => {
    return (
        <li key={blogId}>
        <article
            className="post-list-item"
            itemScope
            itemType="http://schema.org/Article"
        >
            <header>
                    <h2>
                        <Link to={`/${blogId}`} itemProp="url"/>                        
                        <span itemProp="headline">{title}</span>
                    </h2>
                    <small>{date}</small>
            </header>
            <section
            dangerouslySetInnerHTML={{ __html: marked(excerpt) }}
            />
        </article>
        </li>
    )
}
export default Post