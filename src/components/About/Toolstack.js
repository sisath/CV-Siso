import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiPostman, SiIntellijidea } from "react-icons/si";

const ToolIcon = ({ icon: Icon }) => (
  <Col xs={4} md={2} className="tech-icons">
    <Icon />
  </Col>
);

const Toolstack = () => (
  <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <ToolIcon icon={SiIntellijidea} />
    <ToolIcon icon={SiPostman} />
  </Row>
);

export default Toolstack;
