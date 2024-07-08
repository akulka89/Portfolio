import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Akshata Vijay Kulkarni </span>
            from <span className="purple"> Tempe, AZ.</span>
            <br />
            I am currently a graduate studnet at Arizona State University
            <br />
            I have three years of experience as a Senior Software Engineer from Persistent Systems.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive for your dreams!"{" "}
          </p>
          <footer className="blockquote-footer">Akshata</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
