import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import score from "../../Assets/Projects/score-desc.png";
import cam from "../../Assets/Projects/cam1.png";
import marketing from "../../Assets/Projects/dataset.png";
import ecom from "../../Assets/Projects/musicstore.png";
import clove from "../../Assets/Projects/clove.png";
import Fade from "react-reveal/Fade";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
        <Fade top>
            <ProjectCard
              imgPath={clove}
              isBlog={false}
              title="Language Parser and Lexer"
              description="Built a Lexer and Parser using ANTLR and integrated it into an Evaluator in Java to design a new interpreted programming language to perform basic operations and support functions and Data types"
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
            </Fade>
          </Col>
          <Col md={4} className="project-card">
          <Fade bottom>
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="E-commerce Platform"
              description="Led & constructed an end-to-end development of Music Store application leveraging Agile methodology, JWT, and focusing on NFRs of Angular such as security and performance, where the frontend was hosted on Heroku and the backend on Firebase."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
            </Fade>
          </Col>
          <Col md={4} className="project-card">
          <Fade top>
            <ProjectCard
              imgPath={score}
              isBlog={false}
              title="Online Score Precictor"
              description="Created a portal for students to study and attempt the test by submitting descriptive answers. Utilized machine algorithms: TF-IDF (Term Frequency-Inverse Document Frequency) algorithm to extract keywords from answers and k-NN classifier for score prediction with a proposed similarity measure."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
            </Fade>
          </Col>
          <Col md={4} className="project-card">
          <Fade left>
            <ProjectCard
              imgPath={marketing}
              isBlog={false}
              title="Marketing Dataset Classification"
              description="Trained a model to create an application for classifying marketing datasets using a Support Vector Machine (SVM) algorithm. Discovered strategies to enhance the next marketing campaign and generated a classification report."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
            </Fade>
          </Col>
          <Col md={4} className="project-card">
          <Fade right>
            <ProjectCard
              imgPath={cam}
              isBlog={false}
              title="Android Application"
              description="Generated a custom QR code for each product from Google Search Engine for an ID and stored the ID in the MySQL database to provide the product information after scanning."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
            </Fade>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
