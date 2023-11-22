import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiJava,
  SiSpringboot,
  SiPostgresql,
  SiApachemaven,
  SiKubernetes
} from "react-icons/si";
import { FaAws, FaDocker } from "react-icons/fa";

const TechIcon = ({ icon: Icon }) => (
  <Col xs={4} md={2} className="tech-icons">
    <Icon />
  </Col>
);

const Techstack = () => (
  <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <TechIcon icon={SiJava} />
    <TechIcon icon={SiSpringboot} />
    <TechIcon icon={FaAws} />
    <TechIcon icon={FaDocker} />
    <TechIcon icon={SiPostgresql} />
    <TechIcon icon={SiApachemaven} />
    <TechIcon icon={SiKubernetes} />
  </Row>
);

export default Techstack;
