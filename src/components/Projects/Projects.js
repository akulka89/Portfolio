import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import score from "../../Assets/Projects/score-desc.png";
import cam from "../../Assets/Projects/cam1.png";
import marketing from "../../Assets/Projects/dataset.png";
import ecom from "../../Assets/Projects/musicstore.png";
import clove from "../../Assets/Projects/clove.png";
import notes from "../../Assets/Projects/NotesOrganizer.png";
import smartHabitat from "../../Assets/Projects/smarthabitat.png";
import cert from "../../Assets/Projects/CERT.png";
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
            <Fade left>
              <a href="https://github.com/SER-401-Team-15/SER401Team15">
              <ProjectCard
                imgPath={cert}
                isBlog={false}
                title="Expo-Emergency Operations Center Application"
                description="Associated with a team to build a cross-platform disaster response app (Web, Android, iOS) using React, Node.js, Express.js, and SQLite, reducing report management time by 40%.
Spearheaded development of functionalities for submitting, saving, and exporting reports, collaborating with team to enable efficient tracking of over 500 emergency incidents."
                ghLink="https://github.com/SER-401-Team-15/SER401Team15"
                // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
              />
              </a>
            </Fade>
          </Col>
        <Col md={4} className="project-card">
          <Fade top>
            <a href="https://github.com/akulka89/SmartHabitat_Backend">
              <ProjectCard
                imgPath={smartHabitat}
                isBlog={false}
                title="Smart Habitat Ranking for Urban Relocation"
                description="Developed a web platform using React.js, Spring Boot, and GraphDB to rank communities for urban relocation based on environmental and crime data to host on the Azure platform.
Analyzed 10,000+ records showcasing innovative data integration and counting algorithms. Achieved 91.7% user satisfaction with personalized recommendations and rapid data retrieval.
"
                ghLink="https://github.com/akulka89/SmartHabitat_Backend"
                demoLink="https://purple-mushroom-050a3aa1e.4.azurestaticapps.net/" //<--------Please include a demo link here
              />
              </a>
            </Fade>
          </Col>
        <Col md={4} className="project-card">
          <Fade right>
            <a href="https://github.com/akulka89/NotesOrganizerApp">
              <ProjectCard
                imgPath={notes}
                isBlog={false}
                title="Notes Organizer App"
                description="Created a full-stack web application to organize and manage notes, allowing users to create, edit, categorize, and search notes efficiently with a responsive frontend and a robust backend for handling data and authentication."
                ghLink="https://github.com/akulka89/NotesOrganizerApp"
                // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
              />
              </a>
            </Fade>
          </Col>
        <Col md={4} className="project-card">
          <Fade left>
            <a href="https://github.com/akulka89/SER502-clove-Team10">
              <ProjectCard
                imgPath={clove}
                isBlog={false}
                title="Language Parser and Lexer"
                description="Built a Lexer and Parser using ANTLR and integrated it into an Evaluator in Java to design a new interpreted programming language to perform basic operations and support functions and Data types"
                ghLink="https://github.com/akulka89/SER502-clove-Team10"
                // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
              />
              </a>
            </Fade>
          </Col>
          <Col md={4} className="project-card">
            <Fade bottom>
              <a href="https://github.com/akulka89/MusicStore">
              <ProjectCard
                imgPath={ecom}
                isBlog={false}
                title="E-commerce Platform"
                description="Led & constructed an end-to-end development of Music Store application leveraging Agile methodology, JWT, and focusing on NFRs of Angular such as security and performance, where the frontend was hosted on Heroku and the backend on Firebase."
                ghLink="https://github.com/akulka89/MusicStore"
                // demoLink="https://plant49-ai.herokuapp.com/"
              />
              </a>
            </Fade>
          </Col>
          <Col md={4} className="project-card">
            <Fade right>
              <a href="https://github.com/akulka89/Online-Score-Predoction-with-Descriptive-Answers">
              <ProjectCard
                imgPath={score}
                isBlog={false}
                title="Online Score Precictor"
                description="Created a portal for students to study and attempt the test by submitting descriptive answers. Utilized machine algorithms: TF-IDF (Term Frequency-Inverse Document Frequency) algorithm to extract keywords from answers and k-NN classifier for score prediction with a proposed similarity measure."
                ghLink="https://github.com/akulka89/Online-Score-Predoction-with-Descriptive-Answers"
                // demoLink="https://editor.soumya-jit.tech/"              
              />
              </a>
            </Fade>
          </Col>
          <Col md={4} className="project-card">
            <Fade left>
              <a href="https://github.com/akulka89/ML-project">
              <ProjectCard
                imgPath={marketing}
                isBlog={false}
                title="Marketing Dataset Classification"
                description="Trained a model to create an application for classifying marketing datasets using a Support Vector Machine (SVM) algorithm. Discovered strategies to enhance the next marketing campaign and generated a classification report."
                ghLink="https://github.com/akulka89/ML-project"
                // demoLink="https://blogs.soumya-jit.tech/"
              />
              </a>
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
