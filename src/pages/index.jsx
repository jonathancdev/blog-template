import React from "react";
import { graphql } from "gatsby";
import "../css/App.css";
import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero";
import HomeRecentPost from "../components/HomeRecentPost";
import Divider from "../components/Divider";

export default function Home({ data }) {
  const posts = data.allMdx.nodes;
  const filter = posts.filter((post) => post.frontmatter.hero === "true");
  const heroPost = filter[0];
  console.log(heroPost);

  return (
    <Layout>
      <section className="home">
        <HomeHero post={heroPost} />
        <Divider text="latest posts" />
        <section className="home-recent-posts">
          <HomeRecentPost post={posts[0]} />
          <HomeRecentPost post={posts[1]} />
          <HomeRecentPost post={posts[0]} />
        </section>
        <Divider text="things to do" />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query homeQuery {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          date
          hero
          title
          tags
          excerpt
          hero_image_alt
          hero_image_credit_link
          hero_image_credit_text
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        slug
        id
        body
      }
    }
  }
`;
