import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/bg-people.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET US <span className="purple"> INTRODUCE </span> OURSELVES
            </h1>
            <p className="home-about-body">
              Numbers stressing you out? We can help!
              <br />
              <br />
              IBT3A Accounting provides &nbsp;
              <i>
                <b className="purple">
                  clear and efficient solutions to keep your finances organized
                  and reports up-to-date.{" "}
                </b>
              </i>
              <br />
              <br />
              Explore our website for premium solutions and let us handle your
              books so you can focus on what matters - running your business.
              &nbsp;
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
