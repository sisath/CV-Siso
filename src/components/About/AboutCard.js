import React from "react";
import Card from "react-bootstrap/Card";
import { BsArrowReturnRight } from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there, I am <span className="purple">Stanislav Angelov </span>
            originally from <span className="purple"> Bulgaria</span>, but I have been living and working
            in <span className="purple"> London, United Kingdom.</span>
            <br />I am a Tech Specialist at QA Ltd.
            <br />
            <br />
            Okay...you like to code, we get it, what else?
          </p>
          <ul>
            <li className="about-activity">
              <BsArrowReturnRight /> I code video games! Anything
              from Tic-Tac-Toe, to Snake, and 2D Video Games! They
              are still in progress...stay tuned!
            </li>
            <li className="about-activity">
              <BsArrowReturnRight /> I host bird fighting clubs, I am
              kidding. I like to ride a bike through the forst.
            </li>
            <li className="about-activity">
              <BsArrowReturnRight /> Drawing/Sketching, generally
              an artistic person I would say.
            </li>
            <li className="about-activity">
              <BsArrowReturnRight /> Fly Fishing, Google it!
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Earth without "art" is "Eh"!"{" "}
          </p>
          <footer className="blockquote-footer">Someone else, not me</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
