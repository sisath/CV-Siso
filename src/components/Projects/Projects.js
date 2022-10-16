import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import video from "../../Assets/Website-Demo.mp4"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          What Have I Been Up <strong className="purple">To </strong>
        </h1>
        <p style={{ color: "white" }}>
          Things I Personally Find Interesting !
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <video src={video} autoPlay loop muted></video>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Virus & AntiVirus"
              description="In here I have created both a rather 
              harmless virus and a script that deleted the virus.
              The virus opens around 40-50 cmd.exe, leaves a message
              and then activates the second part of the virus which
              is the NotVirusTrustMe.vbs, which leaves certain
              messages and alerts to the target that cannot be closed.
              Ultimately the virus ends by letting the victim know that
              their computer is going to be shut down, but for
              demonstration purposes I have left that part of the script
              out, otherwise I would not be able to record it. Overall
              a harmless virus. The AntiVirus script, being SisoAV.bat
              scans your computer and looks for particular lines of code
              that could be considerated malicious."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
