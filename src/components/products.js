import React from "react";
import jin from "../img/jin.png";
import "./products.css";
/* ../assets/img/1st-item.jpg */
function Products() {
  return (
    <>
      <div className="parallax-content projects-content" id="portfolio">
        <h1 className="head">Our Instagram</h1>
        <div className="row">
          <a
            href="https://www.instagram.com/sakurawaave/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../assets/img/bleed.jpg" className="img" alt="bleed" />
          </a>
          <a
            href="https://www.instagram.com/sakurawaave/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={jin} className="img" alt="jin" />
          </a>
          <a
            href="https://www.instagram.com/sakurawaave/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../assets/img/golden.jpg"
              className="img"
              alt="goldenboy"
            />
          </a>
        </div>
        <div className="row">
          <a
            href="https://www.instagram.com/sakurawaave/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../assets/img/wander.png" className="img" alt="wander" />
          </a>
          <a
            href="https://www.instagram.com/sakurawaave/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../assets/img/pixel itachi.png"
              className="img"
              alt="itachi"
            />
          </a>
          <a
            href="https://www.instagram.com/sakurawaave/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../assets/img/Satoru.jpg" className="img" alt="satoru" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Products;
