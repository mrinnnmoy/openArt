import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import "./step-section.css";

const StepSection = () => {
    const STEP__DATA = [
        {
            index: 1,
            title: "Setup your wallet",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi, facilis voluptatum fugit illum ",
            icon: "ri-wallet-line",
        },
        {
            index: 2,
            title: "Create your collection",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi, facilis voluptatum fugit illum ",
            icon: "ri-layout-masonry-line",
        },
        {
            index: 3,
            title: "Add your NFTs",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi, facilis voluptatum fugit illum ",
            icon: "ri-image-line",
        },
        {
            index: 4,
            title: "List them for sale",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi, facilis voluptatum fugit illum ",
            icon: "ri-list-check",
        },
    ];
    
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12" className="mb-4">
                        <h3 className="step__title">Create and sell your NFTs</h3>
                    </Col>

                    {STEP__DATA.map((item, index) => (
                        <Col lg="3" md="4" sm="6" key={index} className="mb-4">
                            <div className="single__step__item">
                                <span>
                                    <i class={item.icon}></i>
                                </span>
                                <div className="step__item__content">
                                    <h5>
                                        <Link to="/wallet">{item.title}</Link>
                                    </h5>
                                    <p className="mb-0">{item.desc}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default StepSection;