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
                Developed a Static Analysis Tool for an AWS client, leveraging Java, Python, and JavaScript as a polyglot programmer. Expanded the tool’s capabilities by incorporating infrastructure support for a new programming language and enhancing existing code to improve efficiency. Managed the release deployment process using the CI/CD pipeline, ensuring seamless integration and continuous delivery of new features and updates. Performed strategic optimizations to streamline the tool’s performance, reducing excess evaluation time and boosting overall efficiency. Engaged in weekly status review meetings, presenting project deliverables and progress reports, and addressing blockers and challenges to stakeholders. Interacted with clients during review meetings, addressing queries promptly and ensuring clear communication of project status and next steps. Generated and organized data for training a model to accomplish a generative AI approach for project development. Gained hands-on experience in training and utilizing generative AI models to enhance software development processes.
              </p>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
