import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import heroImg from '../images/hero-img.jpg';
import useCourse from '../Hooks/useCourse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faStar, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';

const Home = () => {
    //use custom course hook
    const [courses] = useCourse();

    //use history hook
    const history = useHistory();

    //Function for navigate to all course page by history hook
    const handleAllCourse = () => {
        history.push('/all-course');
    }

    //Single Course
    const handleCourse = id => {
        history.push(`/course/${id}`)
    }

    //Learn more button navigate to about us page
    const handleLearnBtn = () => {
        history.push('/about')
    }
    //return ui
    return (
        <div className="hero-area">
            <Container>
                <Row>
                    <Col md='6'>
                        <h1><span className="future">FUTURE OF</span></h1>
                        <h1 className="hero-heading"> Online Education</h1>
                        <p className="hero-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta non molestiae consequatur quod aperiam commodi veniam sunt doloribus, iste repellat, natus facilis possimus iusto nostrum quasi cumque maiores porro vero.</p>
                        <Button className="button" onClick={handleLearnBtn}>Learn More <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Col>
                    <Col md='6' className="hero-img-area">
                        <img className="Hero-img" src={heroImg} width="600px" alt="" />
                    </Col>
                </Row>
            </Container>

            <Container>
                <h2 className="courses-heading">Our Courses</h2>
                <Row>

                    {/* Map on data coming from useCourse custom hook and sliced by 4 to show 4 course in home page  */}
                    {
                        courses.slice(0, 4).map(course => <Col md="3" key={course.id}>
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
                    <div className="btn-div">
                        <Button className="button course-btn" onClick={handleAllCourse}>View All Courses</Button>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Home;