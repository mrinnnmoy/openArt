import React from 'react';
import "./Footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from 'react-router-dom';

const Footer = () => {
    const MY__ACCOUNT = [
        {
            index: 1,
            display: "Author Profile",
            url: "/seller-profile",
        },
        {
            index: 2,
            display: "Create Item",
            url: "/create",
        },
        {
            index: 3,
            display: "Collection",
            url: "/market",
        },
        {
            index: 4,
            display: "Edit Profile",
            url: "/edit-profile",
        },
    ];

    const RESOURCES = [
        {
            index: 1,
            display: "Help Center",
            url: "#",
        },
        {
            index: 2,
            display: "Partner",
            url: "#",
        },
        {
            index: 3,
            display: "Community",
            url: "#",
        },
        {
            index: 4,
            display: "Activity",
            url: "#",
        },
    ];

    const COMPANY = [
        {
            index: 1,
            display: "About",
            url: "#",
        },
        {
            index: 2,
            display: "Career",
            url: "#",
        },
        {
            index: 3,
            display: "Ranking",
            url: "#",
        },
        {
            index: 4,
            display: "Contact Us",
            url: "/contact",
        },
    ];

    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="3" md="6" sm="6" className="mb-4">
                        <div className="logo">
                            <h2 className="d-flex gap-2 align-items-center">
                                <span>
                                    <i className="ri-fire-fill"></i>
                                </span>
                                OpenArt
                            </h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Error non veniam quia
                                laudantium earum cupiditate.
                            </p>
                        </div>
                    </Col>

                    <Col lg="2" md="3" sm="6" className="mb-4">
                        <h5>My Account</h5>
                        <ListGroup className="list__group">
                            {MY__ACCOUNT.map((item, index) => (
                                <ListGroupItem key={index} className="list__item">
                                    <Link to={item.url}> {item.display} </Link>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>

                    <Col lg="2" mb="3" sm="6" className="mb-4">
                        <h5>Resources</h5>
                        <ListGroup className="list__group">
                            {RESOURCES.map((item, index) => (
                                <ListGroupItem key={index} className="list__item">
                                    <Link to={item.url}> {item.display} </Link>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>

                    <Col lg="2" md="3" sm="6" className="mb-4">
                        <h5>Company</h5>
                        <ListGroup className="list__group">
                            {COMPANY.map((item, index) => (
                                <ListGroupItem key={index} className="list__item">
                                    <Link to={item.url}> {item.display} </Link>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>

                    <Col lg="3" md="6" sm="6" className="mb-4">
                        <h5>Newsletter</h5>
                        <input type="text" className="newsletter" placeholder="Email" />
                        <div className="social__links d-flex gap-3 align-items-center ">
                            <span>
                                <Link to="#">
                                    <i class="ri-facebook-line"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to="#">
                                    <i class="ri-instagram-line"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to="#">
                                    <i class="ri-twitter-line"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to="#">
                                    <i class="ri-telegram-line"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to="#">
                                    <i class="ri-discord-line"></i>
                                </Link>
                            </span>
                        </div>
                    </Col>

                    <Col lg="12" className=" mt-4 text-center">
                        <p className="copyright">
                            {" "}
                            Developed by Mrinmoy Porel. Copyrights 2022	&#169;
                            <br />
                            All Rights Reserved.{" "}
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;