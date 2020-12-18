import React, { components } from "react";

function Home() {
  return (
    <>
      <div className="fixed-side-navbar">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="#home">
              <span>Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#services">
              <span>Services</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">
              <span>Products</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#our-story">
              <span>Media</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact-us">
              <span>Contact Us</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              <span>Sign in</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="parallax-content baner-content" id="home">
        <div className="container">
          <div className="first-content">
            <h1>SakuraWaave</h1>
            <h2 style={{ color: "white", fontSize: "xx-large" }}>
              Merch|Anime|Culture
            </h2>
            <div className="primary-button">
              <a href="#services">Explore</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
