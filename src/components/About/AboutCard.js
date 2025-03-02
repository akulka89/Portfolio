import React from "react";
import Card from "react-bootstrap/Card";
import { FaBookOpen, FaPlane, FaPaintBrush } from "react-icons/fa"; 

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Akshata Vijay Kulkarni </span>
            a passionate software engineer and problem solver based in Tempe, AZ.
            <br />
            I’m currently a grad student at <span className="purple">Arizona State University</span>, pursuing Software Engineering and all things tech. 
            Before this, I spent 3 years as a Senior Software Engineer at Persistent Systems, working on backend systems, AI-powered tools, and cloud technologies. 
            I love solving complex problems and building things that make a difference.
            <br />
            <br />
            When I’m not glued to my laptop, you’ll probably find me:
          </p>
          <ul>
            <li className="about-activity">
              <FaBookOpen /> Reading Books - I love stories, whether they’re tech-related or just a great fiction escape.
            </li>
            <li className="about-activity">
              <FaPlane /> Travelling - Traveling gives me fresh perspectives and endless inspiration.
            </li>
            <li className="about-activity">
              <FaPaintBrush /> Sketching & Painting – There’s something incredibly calming about bringing imagination on paper.
            </li>
          </ul>
          <br />
         <p>I’m always up for learning, collaborating, and working on exciting projects. 
          If you’re passionate about tech (or just want to chat about books and travel), 
          Feel free to reach out via LinkedIn or email (details in the footer)!</p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
