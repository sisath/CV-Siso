import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Introduction = () => (
  <Col md={8} className="home-about-description">
    <h1 style={{ fontSize: "2.6em" }}>
      Introduction <span className="purple"> Time</span>...
    </h1>
    <p className="home-about-body">
      Hey there! Currently, I would describe myself as a{" "}
      <i>
        <b className="purple"> Java Software Engineer </b>
      </i>
      , however my interesting and spark for coding does not stop there!

      <br /><br />

      At  <i><b className="purple"> GlobalLogic </b></i> I had a blast working on the Spatial Explorer, which
      you could describe as an interactive heatmap, where users can input their data, watch it come to life on the map,
       and analyse it however you see fit. Perhaps you would want to find out what would be the best place to build
       a hospital based on population density and demographics? Hmm? I also worked alongside
       <i><b className="purple"> NatWest </b></i>, working with Splunk, more specifically building SPL rules
       involving search queries which purpose is to extract, analyse, and visualise data within the Splunk platform.
       Perhaps you would want to have a specific SPL rule that searches for errors in a web server log and count the
       occurrences of each unique message.

       <br /><br />

       This adventure began not long ago, I started off as a Software Development Trainee at
       <i><b className="purple"> QA Consulting </b></i>.

       <br /><br />
       But before my coding adventures, I worked as an Associate Practitioner in Microbiology at St George's
       University Hospitals NHS Trust. There, I supervised and trained Biomedical Support Workers, ensuring the
       department ran like a well-oiled machine during the wild times of Virology & COVID-19.

    </p>
  </Col>
);

const SocialLinks = () => (
  <Col md={12} className="home-about-social">
    <h1>Want to have a conversation?</h1>
    <p>
      Do not hesitate to <span className="purple">connect </span>with me on either
    </p>
    <ul className="home-about-social-links">
      <li className="social-icons">
        <a
          href="https://github.com/sisath"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <AiFillGithub />
        </a>
      </li>
      or
      <li className="social-icons">
        <a
          href="https://www.linkedin.com/in/stanislav-angelov/"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <FaLinkedinIn />
        </a>
      </li>
    </ul>
  </Col>
);

const Home2 = () => (
  <Container fluid className="home-about-section" id="about">
    <Container>
      <Row>
        <Introduction />
      </Row>
      <Row>
        <SocialLinks />
      </Row>
    </Container>
  </Container>
);

export default Home2;
