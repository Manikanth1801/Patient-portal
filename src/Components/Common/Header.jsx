import React from "react";
import "./Header.css"

export default function Header() {
  return (
    <div>
      <nav className="navbar  navbar-light bg-light ">
        <a className="navbar-brand" href="#">
          <img
            src="/docs/4.5/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
            loading="lazy"
          />
          Welcome "Patient Name"
        </a>

        <button className="logout_btn">Sign out</button>
      </nav>
    </div>
  );
}
