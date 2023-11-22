import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright"></Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {getCurrentYear()} SA</h3>
        </Col>
        <Col md="4" className="footer-body">
          <FooterIcons />
        </Col>
      </Row>
    </Container>
  );
};

const FooterIcons = () => (
  <ul className="footer-icons">
    <FooterIcon
      href="https://github.com/sisath"
      icon={<AiFillGithub />}
    />
    <FooterIcon
      href="https://www.linkedin.com/in/stanislav-angelov-/"
      icon={<FaLinkedinIn />}
    />
  </ul>
);

const FooterIcon = ({ href, icon }) => (
  <li className="social-icons">
    <a
      href={href}
      style={{ color: "white" }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  </li>
);

export default Footer;
