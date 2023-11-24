import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo1 from "../Assets/Logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";

const NavBar = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={() => updateExpanded(false)}>
          <img src={logo1} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(!expand)}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <NavItemLink
              to="/"
              icon={<AiOutlineHome />}
              label="Home"
              updateExpanded={updateExpanded}
            />
            <NavItemLink
              to="/about"
              icon={<AiOutlineUser />}
              label="About"
              updateExpanded={updateExpanded}
            />
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/sisath"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const NavItemLink = ({ to, icon, label, updateExpanded }) => (
  <Nav.Item>
    <Nav.Link as={Link} to={to} onClick={() => updateExpanded(false)}>
      {icon} {label}
    </Nav.Link>
  </Nav.Item>
);

export default NavBar;
