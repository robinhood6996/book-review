import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import aboutImg from '../images/about.png';
const About = () => {
    return (
        <div className="hero-area">
            <Container>
                <Row>
                    <Col md='6' sm='12'>
                        <h1><span className="future">We are Turitor.</span></h1>
                        <h1 className="hero-heading">An online learning community</h1>
                        <p className="hero-text">At Turitor, we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow. With assessments, learning paths and courses authored by industry experts.</p>
                    </Col>
                    <Col md='6' className="hero-img-area">
                        <img className="Hero-img" src={aboutImg} width="600px" alt="" />
                    </Col>
                </Row>
                <Row className="video">
                    <Col md='12' lg="12" className="hero-img-area">
                        <iframe width="850" height="550" src="https://www.youtube.com/embed/PcsVCSKBe04" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default About;