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
            originally from <span className="purple"> Bulgaria</span>, but I have been living, studying and working
            in <span className="purple"> London, United Kingdom.</span>
            <br />I am a Tech Specialist at QA Ltd.
            <br />
            <br />
            Okay...you are competitive and like to code, we get it, what else?
          </p>
          <ul>
            <li className="about-activity">
              <BsArrowReturnRight /> I code video games! Anything
              from Tic-Tac-Toe, to Snake, and 2D Video Games! They
              are still in progress...stay tuned!
            </li>
            <li className="about-activity">
              <BsArrowReturnRight /> I host bird fighting clubs, I am
              kidding. Back in Bulgaria I like to go up in the mountains
              and ride a bike through the forest. It's peaceful and relaxing.
              I am not always on edge trying to compete, sometimes I want to 
              switch off my brain and relax.
            </li>
            <li className="about-activity">
              <BsArrowReturnRight /> Fly Fishing, Google it!
            </li>
            <li className="about-activity">
              <BsArrowReturnRight /> I like  to draw and sketch, I am generally
              an artistic person I would say.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Earth without "art" is "Eh"!"{" "}
          </p>
          <footer className="blockquote-footer">Wish I came up with this one </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
