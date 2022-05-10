import React from 'react'
import { Col } from 'react-bootstrap'

const Image = props => {
    return (
        <Col>
            <img
                src={props.src}
                alt=""
            />
        </Col>
    )
}

export default Image