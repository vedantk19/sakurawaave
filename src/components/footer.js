import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="primary-button">
                  <a href="#home">Back To Top</a>
                </div>
                <ul>
                  <li>
                    <a href="#" style={{ backgroundColor: "white" }}>
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ backgroundColor: "white" }}>
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ backgroundColor: "white" }}>
                      <i className="fa fa-google" />
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ backgroundColor: "white" }}>
                      <i className="fa fa-youtube" />
                    </a>
                  </li>
                </ul>
                <p>Copyright © 2020 SakuraWave</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
