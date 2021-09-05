import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";

export default function Blog({ data }) {
  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <div>
        <h1>Da Blog</h1>
        <div>
          {posts.map((post) => (
            <Link to={"/blog/" + post.slug} key={post.id}>
              <h3>{post.frontmatter.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

//export page query
export const query = graphql`
  query MyQuery {
    allMdx {
      nodes {
        slug
        frontmatter {
          date(formatString: "DD MM YYYY")
          title
        }
        id
      }
    }
  }
`;
