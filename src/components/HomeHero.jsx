import React from "react";
import truncateString from "../utilities/truncateString";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export default function HomeHero({ post }) {
  const heroImage = getImage(post.frontmatter.hero_image);
  return (
    <Link to={"/blog/" + post.slug}>
      <section className="home-hero">
        <GatsbyImage
          image={heroImage}
          alt={post.frontmatter.hero_image_alt}
          className="home-hero__img"
        />
        <p className="home-hero__tag">{post.frontmatter.tags[0]}</p>
        <h4 className="home-hero__heading--primary">
          {post.frontmatter.title}
        </h4>
        <p className="home-hero__text">
          {truncateString(post.frontmatter.excerpt, 150, "...")}
        </p>
      </section>
    </Link>
  );
}
