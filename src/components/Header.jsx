import React from "react";
import { Link } from "gatsby";

export default function Header() {
  return (
    <div className="header">
      <Link className="header__link" to="/">
        <h1 className="header__heading--primary">madridness</h1>
      </Link>
    </div>
  );
}
