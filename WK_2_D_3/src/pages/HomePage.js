import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import image1 from "../assests/fronx-exterior-right-front-three-quarter-109.webp";
import image2 from "../assests/images.jpeg";
import image3 from "../assests/ran8rbb_1694147.webp";
import "./HomePage.css";

const HomePage = () => {
    return (
        <Container>
            <h1 className=' mt-5 mb-3'>Welcome to ABC Automobiles</h1>
            <Row>
                <Col>
                    <Card className='custom-card'>
                        <Card.Img
                            variant='top'
                            src={image1}
                            className='card-img'
                        />
                        <Card.Body>
                            <Card.Title>Maruti Fronx</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </Card.Text>
                            <Card.Footer>
                                <small className='text-muted'>
                                    Last updated 3 mins ago
                                </small>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='custom-card'>
                        <Card.Img
                            variant='top'
                            src={image2}
                            className='card-img'
                        />
                        <Card.Body>
                            <Card.Title>Tata nexon</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </Card.Text>
                            <Card.Footer>
                                <small className='text-muted'>
                                    Last updated 3 mins ago
                                </small>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='custom-card'>
                        <Card.Img
                            variant='top'
                            src={image3}
                            className='card-img'
                        />
                        <Card.Body>
                            <Card.Title>
                                Maruti Fronx (Black Edition)
                            </Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </Card.Text>
                            <Card.Footer>
                                <small className='text-muted'>
                                    Last updated 3 mins ago
                                </small>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
