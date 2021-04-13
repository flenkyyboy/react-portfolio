import React from 'react'
import { Col,Container, Row} from 'react-bootstrap'


function Section() {
    return (
        <div>
            <section className='p-4' id="home-section">
                <div>
                    <Container>
                        <Row>
                            <Col md={6}>
                            <img src="rameez.jpg" alt="" className="img-thumbnail img-fluid rounded-circle border border-dark" width="350" height="350"></img>
                            </Col>
                            <Col md={6}>
                            <h4 className="pt-3">Beginner to ProgrammingMalappuram,Kerala,India</h4>
                            <p>“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </div>
    )
}

export default Section
