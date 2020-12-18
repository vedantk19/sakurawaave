import React, { Component } from "react";
import { Col, Row, Container, Image } from "react-bootstrap";
import { useState } from "react";
import "./contactus.css";

export default function Contactus() {
  return (
    <div className="parallax-content contact-content" id="contact-us">
      <Container>
        <Row style={{ marginBottom: "2rem" }}>
          <Col>
            <Image
              src="../assets/img/imgs/vedant.jpg"
              style={{ width: "20rem", height: "auto" }}
              roundedCircle
            />
            <div>hi</div>
          </Col>
          <Col>
            <Image
              src="../assets/img/imgs/vedant.jpg"
              style={{ width: "20rem", height: "auto" }}
              roundedCircle
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Image
              src="../assets/img/imgs/vedant.jpg"
              style={{ width: "20rem", height: "auto" }}
              roundedCircle
            />
          </Col>
          <Col>
            <Image
              src="../assets/img/imgs/vedant.jpg"
              style={{ width: "20rem", height: "auto" }}
              roundedCircle
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
