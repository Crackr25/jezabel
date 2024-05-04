import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import Aboutcard2 from "./AboutCard2";
import Aboutcard3 from "./AboutCard3";
import Aboutcard4 from "./AboutCard4";
import laptopImg from "../../Assets/5495.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Bookkeeping <strong className="purple">Services </strong>
            </h1>
            <Aboutcard />
            <h1
              style={{
                fontSize: "2.1em",
                paddingBottom: "20px",
                paddingTop: "20px",
              }}
            >
              Financial Reporting <strong className="purple">Services </strong>
            </h1>

            <Aboutcard2 />

            <h1
              style={{
                fontSize: "2.1em",
                paddingBottom: "20px",
                paddingTop: "20px",
              }}
            >
              Budgeting and Forecasting{" "}
              <strong className="purple">Services </strong>
            </h1>

            <Aboutcard3 />

            <h1
              style={{
                fontSize: "2.1em",
                paddingBottom: "20px",
                paddingTop: "20px",
              }}
            >
              Tax Preparation <strong className="purple">Services </strong>
            </h1>

            <Aboutcard4 />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "240px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
