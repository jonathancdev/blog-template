import React from "react";
import "../css/App.css";
import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero";
import HomeRecentPost from "../components/HomeRecentPost";

export default function Home() {
  return (
    <Layout>
      <section className="home">
        <HomeHero />
        <section className="home-recent-posts">
          <HomeRecentPost />
          <HomeRecentPost />
          <HomeRecentPost />
        </section>
      </section>
    </Layout>
  );
}
