import React from "react";
import Card from "react-bootstrap/Card";
import { BsArrowReturnRight } from "react-icons/bs";

const AboutCard = () => (
  <Card className="quote-card-view">
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <AboutCardContent />
        <AboutTestimonial />
      </blockquote>
    </Card.Body>
  </Card>
);

const AboutCardContent = () => (
  <p style={{ textAlign: "justify" }}>
    Hey there, I am <span className="purple">Stanislav Angelov </span>
    originally from <span className="purple"> Bulgaria</span>, but I have been living, studying and working
    in <span className="purple"> London, United Kingdom.</span>
    <br /><br />Placeholder
    <br />
    <br />
  </p>
);

const AboutTestimonial = () => (
  <div>
    <p style={{ color: "rgb(155 126 172)" }}>
      "Both unit tests and Integration tests are important"{" "}
    </p>
    <footer className="blockquote-footer">
      Integration test helps to identify any issue for end-to-end calls
      while unit test gives a quicker response as it’s able to identify the issue within a specific function.
    </footer>
  </div>
);

export default AboutCard;
