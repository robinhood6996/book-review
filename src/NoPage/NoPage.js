import React from 'react';
import './NotFound.css';
import img from '../images/notfound.jpg';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
const NoPage = () => {
    return (
        <div className="nopage-area">
            <Container>
                <Row>
                    <Col md="12">
                        <img src={img} alt="" />
                    </Col>
                    <Col>
                        <Link className="no-page-link" to="/"> Home</Link>
                        <Link className="no-page-link" to="/contact">Contact Us</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NoPage;