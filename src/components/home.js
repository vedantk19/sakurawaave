import React, { components } from "react";
import "./home.css";

function Home() {
  return (
    <>
      <div className="fixed-side-navbar">
        <ul className="nav flex-column">
          <li className="item">
            <a className="nav-link" href="#home">
              <span>Home</span>
            </a>
          </li>
          <li className="item">
            <a className="nav-link" href="#services">
              <span>Our Goals</span>
            </a>
          </li>
          <li className="item">
            <a className="nav-link" href="#portfolio">
              <span>Products</span>
            </a>
          </li>

          <li className="item">
            <a className="nav-link" href="#contact-us">
              <span>Meet Us</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="parallax-content baner-content" id="home">
        <div className="container">
          <div className="first-content">
            <h1>SakuraWave</h1>
            <h2 style={{ color: "white", fontSize: "xx-large" }}>
              Merch|Anime|Culture
            </h2>
            <div className="primary-button">
              <a href="#services">Explore</a>
            </div>
            <h2 style={{ color: "white", fontSize: "xx-large" }}>
              Coming Soon.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
