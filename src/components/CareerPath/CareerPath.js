import React from "react";
import Container from "react-bootstrap/Container";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";
import Particle from "../Particle";
import Fade from "react-reveal/Fade";

function CareerPath() {
  return (
    <Container fluid className="career-section">
      <Particle />
      <Fade left>
        <EducationCard />
      </Fade>
      <Fade right>
        <ExperienceCard />
      </Fade>
    </Container>
  );
}

export default CareerPath;
