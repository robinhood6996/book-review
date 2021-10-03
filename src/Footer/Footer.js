import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import { Link } from 'react-router-dom';


//Made the footer area and return the ui
const Footer = () => {
    return (
        <div className="footer-area">
            <Container className="footer-container">
                <Row>
                    <Col sm className="Footer_section">
                        <h4 className="footer-header">ABOUT</h4>
                        <div className="about">
                            <h2>Online <span className="education">Education</span> at your fingertips</h2>
                            <p>All in one academy for your corporate management system.</p>
                        </div>
                    </Col>
                    <Col sm className="Footer_section">
                        <h4 className="footer-header">LINKS</h4>
                        <ul className="footer_links">
                            <li className="footer_link"><Link to="/">Members Directory</Link></li>
                            <li className="footer_link"><Link to="/">Groups Directory</Link></li>
                            <li className="footer_link"><Link to="/all-course">All Course</Link></li>
                            <li className="footer_link"><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </Col>
                    <Col sm className="Footer_section">
                        <h4 className="footer-header">INSTRUCTORS</h4>
                        <ul className="footer_links">
                            <li className="footer_link"><Link to="/">Members Directory</Link></li>
                            <li className="footer_link"><Link to="/">Groups Directory</Link></li>
                            <li className="footer_link"><Link to="/all-course">All Course</Link></li>
                            <li className="footer_link"><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;