import React from "react"
import { Link } from "gatsby"


const Post = ({slug, title, date, excerpt}) => {
    return (
        <li key={slug}>
        <article
            className="post-list-item"
            itemScope
            itemType="http://schema.org/Article"
        >
            <header>
                    <h2>
                        <Link to={slug} itemProp="url">
                        
                        </Link>
                        <span itemProp="headline">{title}</span>
                    </h2>
                    <small>{date}</small>
            </header>
            <section>
                <p itemProp="description">
                {excerpt}
                </p>
                    
            </section>
        </article>
        </li>
    )
}
export default Post