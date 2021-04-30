import React from "react";
import {Row, Col, Card, Button } from "react-bootstrap";

const Home = () => {
  return (
    <div style={{ padding: "4rem" }}>
      <div style={{ margin: "1rem", marginBottom: "4rem", marginTop: "4rem" }}>
        <Row xl={4} lg={4} md={2} sm={1}>
          <Col>
            <Card className="my-3 p-3 rounded cardHome">
              <Card.Body>
                <Card.Title>Data Structure</Card.Title>
                <Card.Text>Explanation</Card.Text>
                <Button variant="primary">Click Here</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="my-3 p-3 rounded cardHome">
              <Card.Body>
                <Card.Title>Daily-Contest</Card.Title>
                <Card.Text>Solve</Card.Text>
                <Button variant="primary">Click Here</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="my-3 p-3 rounded cardHome">
              <Card.Body>
                <Card.Title>Weekly-Contest</Card.Title>
                <Card.Text>Coding-Contest</Card.Text>
                <Button variant="primary">Register</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="my-3 p-3 rounded cardHome">
              <Card.Body>
                <Card.Title>Weekly-Contest</Card.Title>
                <Card.Text>Coding-Contest</Card.Text>
                <Button variant="primary">Register</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
