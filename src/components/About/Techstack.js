import React from "react";
import { Col, Row, OverlayTrigger, Tooltip, Container } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiDocker, DiJava,
} from "react-icons/di";
import {
  SiAmazonaws, SiMysql, SiTypescript, SiPostgresql, SiCsharp, SiNextdotjs, SiExpress,
  SiSpringboot, SiFlask, SiDjango, SiTensorflow, SiPytorch, SiKeras, SiScikitlearn,
  SiPandas, SiNumpy, SiFirebase, SiAmazondynamodb, SiApachecassandra, SiAnsible, SiJenkins,
  SiLinux, SiBootstrap, SiJunit5, SiFastapi
} from "react-icons/si";
import { TbBrandAngular, TbBrandGithub } from "react-icons/tb";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { icon: <CgCPlusPlus />, name: "C++" },
      { icon: <DiJava />, name: "Java" },
      { icon: <DiPython />, name: "Python" },
      { icon: <DiJavascript1 />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiCsharp />, name: "C#" },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { icon: <DiReact />, name: "ReactJS" },
      { icon: <SiNextdotjs />, name: "NextJS" },
      { icon: <TbBrandAngular />, name: "Angular" },
      { icon: <SiBootstrap />, name: "Bootstrap" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { icon: <SiExpress />, name: "ExpressJS" },
      { icon: <DiNodejs />, name: "NodeJS" },
      { icon: <SiSpringboot />, name: "Spring Boot" },
      { icon: <SiFastapi />, name: "FastAPI" },
      { icon: <SiDjango />, name: "Django" },
      { icon: <SiFlask />, name: "Flask" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { icon: <DiMongodb />, name: "MongoDB" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiFirebase />, name: "Firebase" },
      { icon: <SiAmazondynamodb />, name: "DynamoDB" },
      { icon: <SiApachecassandra />, name: "Cassandra" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { icon: <SiAmazonaws />, name: "AWS" },
      { icon: <DiDocker />, name: "Docker" },
      { icon: <SiAnsible />, name: "Ansible" },
      { icon: <SiJenkins />, name: "Jenkins" },
      { icon: <SiLinux />, name: "Linux" },
      { icon: <TbBrandGithub />, name: "GitHub" },
      { icon: <SiJunit5 />, name: "JUnit" },
      {}
    ],
  },
  {
    title: "AI/ML & Data Science",
    skills: [
      { icon: <SiTensorflow />, name: "TensorFlow" },
      { icon: <SiPytorch />, name: "PyTorch" },
      { icon: <SiKeras />, name: "Keras" },
      { icon: <SiScikitlearn />, name: "Scikit-Learn" },
      { icon: <SiPandas />, name: "Pandas" },
      { icon: <SiNumpy />, name: "NumPy" },
    ],
  },
];

function Techstack() {
  return (
    <Container>
      {skillCategories.map((category, index) => (
        <div key={index} style={{ marginBottom: "30px" }}>
          <h5 className="text-center mb-3">{category.title}</h5>
          <Row style={{ justifyContent: "center" }}>
            {category.skills.map((skill, i) => (
              <Col xs={4} md={2} className="tech-icons" key={i}>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id={`tooltip-${index}-${i}`}>{skill.name}</Tooltip>}
                >
                  <span className="icon-container">{skill.icon}</span>
                </OverlayTrigger>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
}

export default Te