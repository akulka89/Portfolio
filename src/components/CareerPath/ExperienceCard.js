import React from "react";
import Card from "react-bootstrap/Card";
import { FaBriefcase } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ExperienceCard() {
  return (
    <Card className="experience-card-view text-white" style={{ backgroundColor: 'transparent', border: 'none' }}>
      <Card.Body>
        <h3 className="purple"><FaBriefcase /> Experience</h3>
        <hr />
        <Row>
          <Col md={12}>
            <div className="experience-item-box">
              <h5>Persistent Systems, Pune, India</h5>
              <p>Senior Software Engineer</p>
              <p>Nov 2020 - Dec 2023</p>
              <p style={{ textAlign: 'justify' }}>
              At Persistent Systems Ltd, I worked for 3 years where I developed a static analysis tool for AWS clients (CodeGuru Service) to enhance code quality and security using AWS and Agile methodologies. I expanded its support to multiple languages, including Java, Python, JavaScript, TypeScript, and C#, and led the design of a TypeScript parser, boosting productivity by 20%. Managing CI/CD pipelines, I ensured seamless deployment and SDLC compliance. By resolving a TimeOut Exception in CloudWatch logs, I improved tool efficiency by 70% in a week. I also built performance and memory tracking tools, reducing code defects by up to 70%, and improved tool accuracy to 85% through feedback analysis. Additionally, I developed a central database system using React, Amazon RDS, EC2, and S3 for performance tracking and trained an LLM model with a custom dataset, automating code analysis with 90% efficiency. Regularly presenting progress and resolving blockers, I played a key role in project success.              </p>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
