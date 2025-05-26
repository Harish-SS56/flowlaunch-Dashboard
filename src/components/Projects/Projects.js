import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Public image URLs for each project
const images = {
  expense: "https://cdn-icons-png.flaticon.com/512/1170/1170576.png",
  humanRobot: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
  stroke: "https://cdn-icons-png.flaticon.com/512/3524/3524374.png",
  jobCV: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=60",
  realTimeChat: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=800&q=60"
};

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Below are some of the major projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={images.expense}
              isBlog={false}
              title="Expense Tracker Management System"
              description="Full-stack Java web app for managing expenses and billing with role-based access for Admin, Users, and Money Exchangers."
              ghLink="https://github.com/Harish-SS56?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={images.humanRobot}
              isBlog={false}
              title="Human-Following Robot"
              description="Robot with YOLOv8, MediaPipe, PID control, and gesture recognition. Supports autonomous/manual control via web UI."
              ghLink="https://github.com/Harish-SS56?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={images.stroke}
              isBlog={false}
              title="AI Stroke Early Warning System"
              description="React + Flask app with IoT (MAX30102 + ESP8266) for real-time stroke alerts using MQTT, buzzer, LCD, and email notifications."
              ghLink="https://github.com/Harish-SS56?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={images.jobCV}
              isBlog={false}
              title="Job Recommendation & CV Matching"
              description="Smart job portal using NLP and TF-IDF to rank CVs and match them to job listings. Supports parsing and export."
              ghLink="https://github.com/Harish-SS56?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={images.realTimeChat}
              isBlog={false}
              title="Real-Time Chat + Audio Communication"
              description="Real-time chat app built with HTML/CSS and GUI-based audio communication using PyAudio for seamless interaction."
              ghLink="https://github.com/Harish-SS56?tab=repositories"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
