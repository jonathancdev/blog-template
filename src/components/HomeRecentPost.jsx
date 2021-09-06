import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

export default function HomeRecentPost({ post }) {
  console.log(post);
  const truncatePost = (str) => {
    let truncated = str.substring(0, 300);
    return truncated + "...";
  };
  return (
    <section className="home-recent">
      <img src="" alt="" className="home-recent__img" />
      <section className="home-recent__content">
        <p className="home-recent__tag">{post.frontmatter.tags[0]}</p>
        <p className="home-recent__text">
          {" "}
          <MDXRenderer>{post.body}</MDXRenderer>
        </p>
      </section>
    </section>
  );
}
