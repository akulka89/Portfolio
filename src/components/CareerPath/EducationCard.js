import React from "react";
import Card from "react-bootstrap/Card";
import { FaGraduationCap } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function EducationCard() {
  return (
    <Card className="education-card-view text-white" style={{ backgroundColor: 'transparent', border: 'none' }}>
      <Card.Body>
        <h3 className="purple"><FaGraduationCap /> Education</h3>
        <hr />
        <Row>
          <Col md={6}>
            <div className="education-item-box">
              <h5>Arizona State University, Tempe, AZ</h5>
              <p><b className="purple">Master of Science in Software Engineering (GPA: 3.89 / 4.0)</b></p>
              <p>Jan 2024 - Dec 2025</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="education-item-box">
              <h5>Savitribai Phule Pune University, Pune, India</h5>
              <p><b className="purple">Bachelor of Engineering in Computer (GPA: 3.8 / 4.0)</b></p>
              <p>Aug 2017 - May 2020</p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col md={8}>
            <div className="education-item-box">
              <h5>Government Polytechnic, Pune, India</h5>
              <p><b className="purple">Diploma in Computer Engineering</b> (GPA: 3.8 / 4.0)</p>
              <p>Aug 2014 - May 2017</p>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default EducationCard;
