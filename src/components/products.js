import React, { components } from "react";
import { useState, useEffect } from "react";
import { Card, Button, Toast, CardDeck } from "react-bootstrap";
import "./products.css";
/* ../assets/img/1st-item.jpg */
function Products() {
  return (
    <>
      <div className="parallax-content projects-content" id="portfolio">
        <h1 className="head">Our Instagram</h1>
        <div className="row">
          <img src="../assets/img/kenma.png" className="img" />
          <img src="../assets/img/jin.png" className="img" />
          <img src="../assets/img/wander.png" className="img" />
        </div>
        <div className="row">
          <img src="../assets/img/1st-item.jpg" className="img" />
          <img src="../assets/img/1st-item.jpg" className="img" />
          <img src="../assets/img/1st-item.jpg" className="img" />
        </div>
      </div>
    </>
  );
}

export default Products;
