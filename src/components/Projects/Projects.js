import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import srWaffle from "../../Assets/Projects/srWaffle.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={srWaffle}
              isBlog={false}
              title="Sr. Waffle"
              description="Personal discord bot that plays music and lots of up coming functionalities."
              link="https://github.com/Brendo-Lino/WaffleBot"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
