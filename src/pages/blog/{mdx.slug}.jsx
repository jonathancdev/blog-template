import { graphql } from "gatsby";
import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/Layout";
import PostPage from "../../components/PostPage";

export default function BlogPost({ data }) {
  console.log(data);
  return (
    <Layout>
      <PostPage>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </PostPage>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "DD MM YYYY")
        title
      }
      body
    }
  }
`;
