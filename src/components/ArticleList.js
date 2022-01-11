import React from "react";
import Article from "./Article"

function ArticleList ({posts}) {
    const article = posts.map((post) => {
        return (
            <Article
                key={post}
                title={post.title}
                date={post.date}
                preview={post.preview}
            />
        )
    })
    return (
        <div>
            <main>{article}</main>
        </div>
    )
}

export default ArticleList;