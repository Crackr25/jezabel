import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Image from "../../Assets/bg-chart.png";
import Tilt from "react-parallax-tilt";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <h1 className="project-heading">Mission</h1>
            <p style={{ color: "white" }}>
              We meticulously navigate the financial journey for our clients,
              empowering informed decisions through strategic accounting and
              bookkeeping. Together, we chart a course for sustainable growth.
            </p>
          </Col>
          <Col md={12} className="text-center myAvtar">
            {" "}
            <img
              src={Image}
              alt="Your Alt Text"
              className="centered-image mt-0 w-100 h-90"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
