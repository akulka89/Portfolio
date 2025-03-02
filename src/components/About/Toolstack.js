import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiMacos,
  SiIntellijidea,
  SiPycharm,
} from "react-icons/si";
import { DiWindows } from "react-icons/di";

const tools = [
  { icon: <SiMacos />, name: "macOS" },
  { icon: <SiVisualstudiocode />, name: "VS Code" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiSlack />, name: "Slack" },
  { icon: <DiWindows />, name: "Windows" },
  { icon: <SiIntellijidea />, name: "IntelliJ IDEA" },
  { icon: <SiPycharm />, name: "PyCharm" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "0px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${index}`}>{tool.name}</Tooltip>}
          >
            <span className="icon-container">{tool.icon}</span>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
