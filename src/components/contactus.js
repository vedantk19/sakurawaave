import React, { Component } from "react";
import { Card, Button, Toast, CardDeck } from "react-bootstrap";
import { useState } from "react";
import "./contactus.css";

export default function Contactus() {
  return (
    <div className="parallax-content contact-content" id="contact-us">
      <CardDeck style={{ margin: "6rem" }}>
        <Card className="cardhov">
          <div className="exp">
            <Card.Img
              variant="top"
              src="../assets/img/imgs/vedant.jpg"
              className="face"
            />
          </div>
          <Card.Body>
            <Card.Title>Vedant Kunte</Card.Title>
            <Card.Text>
              Give a man a fish and you feed him for a day. Teach him how to
              fish and you feed him for a lifetime.
            </Card.Text>
            <a href="https://www.instagram.com/shibuibeats_/" target="_blank">
              <Button variant="primary">@shibuibeats_</Button>
            </a>
          </Card.Body>
        </Card>
        <Card className="cardhov">
          <div className="exp">
            <Card.Img
              variant="top"
              src="../assets/img/imgs/parab.jpg"
              className="face"
            />
          </div>
          <Card.Body>
            <Card.Title>Aryan Parab</Card.Title>
            <Card.Text>
              In the end we only regret the chances we dont take.
            </Card.Text>
            <a href="https://www.instagram.com/aryanparab_/" target="_blank">
              <Button variant="primary">@aryanparab_</Button>
            </a>
          </Card.Body>
        </Card>
        <Card className="cardhov">
          <div className="exp">
            <Card.Img
              variant="top"
              src="../assets/img/imgs/sam.jpg"
              className="face"
            />
          </div>
          <Card.Body>
            <Card.Title>Samuel Daniell</Card.Title>
            <Card.Text>
              Life's a bore, if you don't challenge yourself.
            </Card.Text>
            <a href="https://www.instagram.com/samuel_d26/" target="_blank">
              <Button variant="primary">@samuel_d26</Button>
            </a>
          </Card.Body>
        </Card>
        <Card className="cardhov">
          <div className="exp">
            <Card.Img
              variant="top"
              src="../assets/img/imgs/piyush.jpg"
              className="face"
            />
          </div>
          <Card.Body>
            <Card.Title>Piyush Chaudhary</Card.Title>
            <Card.Text>
              Perceive that which cannot be seen with the eye.
            </Card.Text>
            <a href="https://www.instagram.com/piyusssshhhh/" target="_blank">
              <Button variant="primary">@piyusssshhhh</Button>
            </a>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}
