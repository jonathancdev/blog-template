import React from "react";

export default function HomeHero({ post }) {
  return (
    <section className="home-hero">
      <img src="" alt="" className="home-hero__img" />
      <p className="home-hero__tag">{post.frontmatter.tags[0]}</p>
      <h4 className="home-hero__heading--primary">{post.frontmatter.title}</h4>
      <p className="home-hero__text">
        Comunidad de Madrid announces guidelines for return to school in the
        official bulletin.
      </p>
    </section>
  );
}
