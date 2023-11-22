import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

const Github = () => (
  <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
    <GithubActivityHeading />
    <GithubActivityCalendar />
  </Row>
);

const GithubActivityHeading = () => (
  <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
    When Am I <strong className="purple">Active?</strong>
  </h1>
);

const GithubActivityCalendar = () => (
  <GitHubCalendar
    username="sisath"
    blockSize={15}
    blockMargin={5}
    color="#c084f5"
    fontSize={16}
  />
);

export default Github;
