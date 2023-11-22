import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import Toolstack from "./Toolstack";

const AboutSection = () => (
  <Container fluid className="about-section">
    <Particle />
    <Container>
      <AboutContent />
      <ProfessionalSkillset />
      <UsedTechnologies />
      <Github />
    </Container>
  </Container>
);

const AboutContent = () => (
  <Row style={{ justifyContent: "center", padding: "10px" }}>
    <Col md={7} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px" }}>
      <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
        Who Am <strong className="purple">I </strong>?
      </h1>
      <AboutCard />
    </Col>
    <Col md={5} style={{ paddingTop: "120px", paddingBottom: "50px" }} className="about-img"></Col>
  </Row>
);

const ProfessionalSkillset = () => (
  <>
    <h1 className="project-heading">
      Professional <strong className="purple">Skillset </strong>
    </h1>
    <Techstack />
  </>
);

const UsedTechnologies = () => (
  <>
    <h1 className="project-heading">
      <strong className="purple">Technologies</strong> I Have Used
    </h1>
    <Toolstack />
  </>
);

export default AboutSection;
