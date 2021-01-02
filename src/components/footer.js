import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img src="./logo.png" className="logo" alt="logo" />
              <div className="primary-button">
                <a href="#home">Back To Top</a>
              </div>
              <ul>
                <li className="social">
                  <a
                    href="https://twitter.com/sakurawaave?s=09"
                    style={{ backgroundColor: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li className="social">
                  <a
                    href="https://www.instagram.com/sakurawaave/"
                    style={{ backgroundColor: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li className="social">
                  <a
                    href="mailto:sakurawave1311@gmail.com"
                    style={{ backgroundColor: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-google" />
                  </a>
                </li>
                <li className="social">
                  <a
                    href="https://www.youtube.com/channel/UCM07JtxIuKRrEOTXmfULjPQ/featured"
                    style={{ backgroundColor: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-youtube" />
                  </a>
                </li>
              </ul>
              <p>
                <a href="tel:9136544030" className="fa fa-phone">
                  +91 9136544030
                </a>
              </p>
              <p>Copyright © 2020 SakuraWave</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
