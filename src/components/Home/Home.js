import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

const HomeSection = () => (
  <Container fluid className="home-section" id="home">
    <Particle />
    <HomeContent />
  </Container>
);

const HomeContent = () => (
  <Container className="home-content">
    <Row>
      <Col md={7} className="home-header">
        <HomeHeader />
        <TypeComponent />
      </Col>
      <Col md={5} style={{ paddingBottom: 20 }}></Col>
    </Row>
  </Container>
);

const HomeHeader = () => (
  <>
    <h1 style={{ paddingBottom: 15 }} className="heading">
      Hello!{" "}
    </h1>
    <h1 className="heading-name">
      My name is
      <strong className="main-name"> Stanislav Angelov</strong>
    </h1>
  </>
);

const TypeComponent = () => (
  <div style={{ padding: 50, textAlign: "left" }}>
    <Type />
  </div>
);

const Home = () => (
  <section>
    <HomeSection />
    <Home2 />
  </section>
);

export default Home;

