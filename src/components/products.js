import React from "react";

import "./products.css";
/* ../assets/img/1st-item.jpg */
function Products() {
  return (
    <>
      <div className="parallax-content projects-content" id="portfolio">
        <h1 className="head">Our Instagram</h1>
        <div className="row">
          <a href="https://www.instagram.com/sakurawaave/" target="_blank">
            <img src="../assets/img/bleed.jpg" className="img" />
          </a>
          <a href="https://www.instagram.com/sakurawaave/" target="_blank">
            <img src="../assets/img/jin.png" className="img" />
          </a>
          <a href="https://www.instagram.com/sakurawaave/" target="_blank">
            <img src="../assets/img/golden.jpg" className="img" />
          </a>
        </div>
        <div className="row">
          <a href="https://www.instagram.com/sakurawaave/" target="_blank">
            <img src="../assets/img/wander.png" className="img" />
          </a>
          <a href="https://www.instagram.com/sakurawaave/" target="_blank">
            <img src="../assets/img/pixel itachi.png" className="img" />
          </a>
          <a href="https://www.instagram.com/sakurawaave/" target="_blank">
            <img src="../assets/img/satoru.jpg" className="img" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Products;
