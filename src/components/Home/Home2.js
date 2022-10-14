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
              Let me <span className="purple"> INTRODUCE </span> myself.
            </h1>
            <p className="home-about-body">
             Born in '96, Bulgaria in a small town called Silistra,
             I have been competitive for as long as I can remember.
             I started competing at age of 7, beginning from drawing and 
             painting, then expanding to English Grammar Competitions to
             Mathematical Competitions. I speak fluently 2 languages,
             unless you count sarcasm, in which case it's 3. Back in my
             teen years, I used to be heavily involved with gaming,
             I used to competitively play multiple games such as CSGO,
             WOW and others. I was invited to compete professionaly,
             to become a "Pro Gamer", but I declined due to my stage
             fright. I do not have regrets. I built my first PC at age of
             14 and that's really when I started falling for technology.
             Before I was interested in the end product, now I am curious
             of what is going on behind the scenes. Couple months ago, 
             I installed
             viruses directly into my System32 folder, to test how
             effective some antivirus products are, some of them found
             a couple, some found none, so I thought I'd make my own
             antivirus program. Ever since then I have been making
             applications mainly for personal use.

              <br />
              <br />I am experienced in coding with
              <i>
                <b className="purple"> Java </b>
              </i>
              and highly interested in getting better with
              <i>
              <b className="purple"> JavaScript and Python </b>
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
            <h1>Want to have a conversation ?</h1>
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
