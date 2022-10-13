import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Jokes aside, let me <span className="purple"> INTRODUCE </span> myself.
            </h1>
            <p className="home-about-body">
              Originally from Bulgaria, I moved to London at the age 
              of 11. I built my first personal computer at the age of 14
              and ever since then I was addicted to technology. I was 
              generally dissatisfied with the antivirus software 
              on the market. Once, I purposly installed viruses 
              directly into my System32 folder to test how reliable
              these software would be, some did not even detect
              one virus. So, I decided to create my own antivirus 
              software in Java. Ever since then I have been making 
              programs and applications.
              <br />
              <br />I am proficient in
              <i>
                <b className="purple"> Java, JavaScript and Python </b>
              </i>
              <br />
              <br />
              I am mainly involved in designing & building &nbsp;
              <i>
                <b className="purple">RESTful APIs </b> ,my products
                are all about {" "}
                <b className="purple">
                  optimal performance and high quality
                </b>
              </i>
              <br />
              <br />
              Moreover, occasionaliy I like to get involved with
              <b className="purple"> NodeJS & ExpressJS</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; such as
              <i>
                <b className="purple"> ReactJS and NextJS</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Impressed ?</h1>
            <p>
              Don't be shy to <span className="purple">connect </span>with me on
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
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/stanislav-angelov-/
                  "
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
          
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
