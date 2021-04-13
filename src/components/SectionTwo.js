import React from 'react'

import { Container, Row } from 'react-bootstrap'
import ServiceCard from './ServiceCard'


function SectionTwo() {
    return (
        <div>
            <section id="service-section">
                <Container>
                    <h1 className="text-center ">Services</h1>
                    <Row>
                        <ServiceCard value={'Freelancer'}></ServiceCard>
                        <ServiceCard value={'Web Appliction'}></ServiceCard>
                        <ServiceCard value={'Freelancer'}></ServiceCard>
                    </Row>
                </Container>
            </section>
            <section id="exp-section">
                <Container className="container p-3">
                    <h1 className="text-center ">Experience</h1>
                    <Row>
                        <ServiceCard value={'Instagram Service'}></ServiceCard>
                        <ServiceCard value={'Demo'}></ServiceCard>
                        <ServiceCard value={'Demo'}></ServiceCard>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default SectionTwo
