import React, { components } from "react";
import { useState, useEffect } from "react";
import { Card, Button, Toast, CardDeck } from "react-bootstrap";

function Products() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="parallax-content projects-content" id="portfolio">
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Hey!</strong>
          </Toast.Header>
          <Toast.Body>Store will be opening soon.</Toast.Body>
        </Toast>
        <CardDeck style={{ marginLeft: "5rem", marginRight: "15rem" }}>
          <Card style={{ backgroundColor: "yellow" }}>
            <Card.Img variant="top" src="../assets/img/1st-item.jpg" />
            <Card.Body>
              <Card.Title>Rs. 600</Card.Title>
              <Card.Text>Premium T-shirt</Card.Text>
              <Button variant="primary" onClick={() => setShow(true)}>
                Buy Now
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="../assets/img/1st-item.jpg" />
            <Card.Body>
              <Card.Title>Rs. 600</Card.Title>
              <Card.Text>Premium T-shirt</Card.Text>
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="../assets/img/1st-item.jpg" />
            <Card.Body>
              <Card.Title>Rs. 600</Card.Title>
              <Card.Text>Premium T-shirt</Card.Text>
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    </>
  );
}

export default Products;
