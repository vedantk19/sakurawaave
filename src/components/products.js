import React from "react";
import jin from "../img/jin.png";
import bleed from "../img/bleed.jpg";
import Satoru from "../img/Satoru.jpg";
import itachi from "../img/pixel itachi.png";
import wander from "../img/wander.png";
import golden from "../img/golden.jpg";
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
            <img src={bleed} className="img" alt="bleed" />
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
            <img src={golden} className="img" alt="goldenboy" />
          </a>
        </div>
        <div className="row">
          <a
            href="https://www.instagram.com/sakurawaave/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={wander} className="img" alt="wander" />
          </a>
          <a
            href="https://www.instagram.com/sakurawaave/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={itachi} className="img" alt="itachi" />
          </a>
          <a
            href="https://www.instagram.com/sakurawaave/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Satoru} className="img" alt="satoru" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Products;
