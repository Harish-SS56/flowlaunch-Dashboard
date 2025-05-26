import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight, ImLinkedin, ImGithub } from "react-icons/im";
import { FaCode, FaTools, FaLanguage, FaBrain, FaTrophy, FaEnvelope, FaMobileAlt } from "react-icons/fa";
import { DiReact } from "react-icons/di";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutCard() {
  return (
    <Card className="quote-card-view shadow-lg">
      <Card.Body className="p-4">
        <section className="mb-4">
          <h2 className="text-purple mb-3">About Me</h2>
          <div className="d-flex align-items-center mb-3">
            <div className="flex-grow-1">
              <p className="lead mb-1"><strong>Harish S.S.</strong></p>
              <p className="text-muted">AIoT Engineer at Intel IoT Club</p>
            </div>
          </div>
          
          <Row>
            <Col md={6}>
              <p className="text-justify">
                Computer Science Engineer specializing in AI from Amrita Vishwa Vidyapeetham, India. 
                Passionate about creating intelligent systems and conducting tech knowledge-sharing sessions.
              </p>
            </Col>
            <Col md={6}>
              <div className="bg-light p-3 rounded">
                <h6 className="text-purple mb-2"><ImPointRight className="me-2" />Interests</h6>
                <ul className="list-unstyled">
                  <li className="mb-2">Conducting tech workshops</li>
                  <li className="mb-2">Research & Development</li>
                  <li>Exploring emerging technologies</li>
                </ul>
              </div>
            </Col>
          </Row>
        </section>

        <section className="mb-4">
          <h5 className="text-purple mb-3"><FaCode className="me-2" />Technical Skills</h5>
          <Row>
            <Col md={6}>
              <div className="mb-3">
                <strong>Languages:</strong>
                <div className="d-flex flex-wrap gap-2 mt-1">
                  <span className="badge bg-purple">C++</span>
                  <span className="badge bg-purple">Python</span>
                  <span className="badge bg-purple">Java</span>
                  <span className="badge bg-purple">MATLAB</span>
                </div>
              </div>
              
              <div className="mb-3">
                <strong>Web Development:</strong>
                <div className="d-flex flex-wrap gap-2 mt-1">
                  <span className="badge bg-purple">MERN Stack</span>
                  <span className="badge bg-purple">Flask</span>
                  <span className="badge bg-purple">Tailwind</span>
                </div>
              </div>
            </Col>
            
            <Col md={6}>
              <div className="mb-3">
                <strong>Frameworks:</strong>
                <div className="d-flex flex-wrap gap-2 mt-1">
                  <span className="badge bg-purple">OpenCV</span>
                  <span className="badge bg-purple">TensorFlow</span>
                  <span className="badge bg-purple">Arduino</span>
                </div>
              </div>
              
              <div className="mb-3">
                <strong>Tools:</strong>
                <div className="d-flex flex-wrap gap-2 mt-1">
                  <span className="badge bg-purple">Git</span>
                  <span className="badge bg-purple">VS Code</span>
                  <span className="badge bg-purple">Android Studio</span>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        <section className="mb-4">
          <Row>
            <Col md={4}>
              <div className="bg-light p-3 rounded mb-3">
                <h6 className="text-purple"><FaLanguage className="me-2" />Languages</h6>
                <p className="mb-0">English (Professional)<br/>Tamil (Native)</p>
              </div>
            </Col>
            
            <Col md={8}>
              <div className="bg-light p-3 rounded">
                <h6 className="text-purple"><FaBrain className="me-2" />Technical Interests</h6>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-secondary">ML</span>
                  <span className="badge bg-secondary">Cloud Computing</span>
                  <span className="badge bg-secondary">Quantum Computing</span>
                  <span className="badge bg-secondary">IoT</span>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        <section className="mb-4">
          <h5 className="text-purple mb-3"><FaTrophy className="me-2" />Achievements</h5>
          <div className="timeline">
            <div className="timeline-item">
              <h6>AIoT Engineer (2024-Present)</h6>
              <p className="text-muted mb-0">Conducted IoT workshops/hackathons at Intel IoT Club</p>
            </div>
            <div className="timeline-item">
              <h6>Tech Team Lead</h6>
              <p className="text-muted mb-0">Organized AI events for IETE Club</p>
            </div>
            <div className="timeline-item">
              <h6>R&D Member</h6>
              <p className="text-muted mb-0">Led ML workshops at Tensor Club</p>
            </div>
          </div>
        </section>

        <section className="contact-info">
          <h5 className="text-purple mb-3">Contact</h5>
          <div className="d-flex flex-wrap gap-4">
            <div className="d-flex align-items-center">
              <FaEnvelope className="me-2 text-purple" />
              <a href="mailto:harishdeepikassdeepikass@gmail.com" className="text-decoration-none">
                harishdeepikassdeepikass@gmail.com
              </a>
            </div>
            <div className="d-flex align-items-center">
              <FaMobileAlt className="me-2 text-purple" />
              <span>+91-7339654701</span>
            </div>
            <div className="d-flex align-items-center gap-3">
              <a href="[Your LinkedIn URL]" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <ImLinkedin className="text-purple" size={24} />
              </a>
              <a href="[Your GitHub URL]" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <ImGithub className="text-purple" size={24} />
              </a>
            </div>
          </div>
        </section>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;