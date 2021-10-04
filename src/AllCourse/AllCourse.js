import { faStar, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useCourse from '../Hooks/useCourse';
import './AllCourse.css'
const AllCourse = () => {

    const [courses] = useCourse();
    const history = useHistory();

    //Single Course
    const handleCourse = id => {
        history.push(`/course/${id}`)
    }

    return (
        <div>
            <Container>
                <h2 className="courses-heading">Our All Courses</h2>
                <Row>
                    {
                        courses.map(course => <Col md="3" key={course.id}>
                            <Card>
                                <Card.Img variant="top" src={course.img} />
                                <Card.Body>
                                    <Card.Title>{course.name}</Card.Title>
                                    <Card.Text>
                                        <p> {course.desc.slice(0, 130)}</p>
                                        <div className="course-details">
                                            <p> <FontAwesomeIcon icon={faStar} /> {course.rating}</p>
                                            <p><FontAwesomeIcon icon={faUsers} /> {course.student}</p>
                                        </div>
                                        <Button className="button buy-btn" onClick={() => handleCourse(course.id)}>Enroll Now At: ${course.price}</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default AllCourse;