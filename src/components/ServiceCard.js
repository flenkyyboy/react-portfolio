import React from 'react'
import { Col} from 'react-bootstrap'


function ServiceCard({value}) {
    return (
        <Col md={4} my={2}>
            <div className="card text-center p-3 bg-white" >
                <i className="fas fa-business-time display-1"></i>
                <div className="card-body">
                    <h5 className="Marketting font-weight-bold">{value}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </Col>
    )
}

export default ServiceCard
