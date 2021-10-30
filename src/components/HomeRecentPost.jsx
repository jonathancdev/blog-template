import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import truncateString from "../utilities/truncateString";
import { Link } from "gatsby";

export default function HomeRecentPost({ post }) {
  const heroImage = getImage(post.frontmatter.hero_image);
  console.log(post.slug);
  return (
    <Link to={"/blog/" + post.slug}>
      <section className="home-recent">
        <GatsbyImage
          image={heroImage}
          alt={post.frontmatter.hero_image_alt}
          className="home-recent__img"
        />
        <section className="home-recent__content">
          <p className="home-recent__tag">{post.frontmatter.tags[0]}</p>
          <p className="home-recent__text">
            {truncateString(post.frontmatter.excerpt, 100, "...")}
          </p>
        </section>
      </section>
    </Link>
  );
}
