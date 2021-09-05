import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header></Header>
      <div className="content">{children}</div>
      <Navbar />
    </div>
  );
}
