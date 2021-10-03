import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './Contact.css';
import contactImg from '../images/contact.png';

//Made contact us page ui
const Contact = () => {
    return (
        <div className="form">
            <Container>
                <Row className="contact-text">
                    <Col md='6' className="contact-txt-one">
                        <div>
                            <h5>#Contact</h5>
                            <h1>Get in touch with us</h1>
                        </div>
                    </Col>
                    <Col md='6'>
                        <p>Let us know what you want to know. We want to help people learn, grow and achieve more in life.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src={contactImg} alt="" />
                    </Col>

                    {/* Contact Form  */}
                    <Col md="6">
                        <h2 className="form-heading">Contact Us For Any Query</h2>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Enter Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your Name" />
                                <Form.Label>Write Your Subject of Query</Form.Label>
                                <Form.Control type="text" placeholder="Subject" />
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <button className="button">Send Message</button>
                        </Form>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;