import React from 'react'

import { Col, Container, Row} from 'react-bootstrap'


function SectionTwo() {
    return (
        <div>
            <section id="service-section">
                <Container>
                    <h1 className="text-center ">Services</h1>
                    <Row>
                        <Col md={4} my={2}>
                            <div className="card text-center p-3 bg-white" >
                                <i className="fas fa-business-time display-1"></i>
                                <div className="card-body">
                                    <h5 className="Marketting font-weight-bold">Content Marketing</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} my={2}>
                            <div className="card text-center p-3 bg-white" >
                                <i className="fas fa-business-time display-1"></i>
                                <div className="card-body">
                                    <h5 className="Marketting font-weight-bold">Content Marketing</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} my={2}>
                            <div className="card text-center p-3 bg-white" >
                                <i className="fas fa-business-time display-1"></i>
                                <div className="card-body">
                                    <h5 className="Marketting font-weight-bold">Content Marketing</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </section>
                    <section id="exp-section">
                <Container className="container p-3">
                    <h1 className="text-center ">Services</h1>
                    <Row>
                        <Col md={4} my={2}>
                            <div className="card text-center p-3 bg-white" >
                                <i className="fas fa-business-time display-1"></i>
                                <div className="card-body">
                                    <h5 className="Marketting font-weight-bold">Content Marketing</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} my={2}>
                            <div className="card text-center p-3 bg-white" >
                                <i className="fas fa-business-time display-1"></i>
                                <div className="card-body">
                                    <h5 className="Marketting font-weight-bold">Content Marketing</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} my={2}>
                            <div className="card text-center p-3 bg-white" >
                                <i className="fas fa-business-time display-1"></i>
                                <div className="card-body">
                                    <h5 className="Marketting font-weight-bold">Content Marketing</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default SectionTwo
