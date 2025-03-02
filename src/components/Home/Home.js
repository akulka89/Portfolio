import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import Home2 from "./Home2";
import Type from "./Type";
import myImg from "../../Assets/AK.jpeg";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Akshata Vijay Kulkarni</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={myImg}
                alt="avatar"
                className="img-fluid"
                style={{ maxHeight: "450px", borderRadius: "50%" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Row>
                <Col md={12} className="home-about-social">
                  <h1>FIND ME ON</h1>
                  <p>
                    Feel free to <span className="purple">connect </span>with me
                  </p>
                  <ul className="home-about-social-links">
                    <li className="social-icons">
                      <a
                        href="https://github.com/kulkarniakshata1998"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                      >
                        <AiFillGithub />
                      </a>
                    </li>
                    <li className="social-icons">
                      <a
                        href="www.linkedin.com/in/akshata-kulkarni-40677b14a"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li className="social-icons">
                      <a
                        href="mailto:akulka89@asu.edu"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                      >
                        <AiTwotoneMail />
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
      
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;
