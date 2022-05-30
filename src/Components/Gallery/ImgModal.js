import React from 'react';
import { Col, Modal, Button } from 'react-bootstrap'

const ImgModal = props => {
    return (
        <Modal
            show={props.isActive}
            onHide={props.handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='img-modal'
        >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <img
                    src={props.src}
                    alt=""
                    style={{
                        width: '100%'
                    }}
                />
            </Modal.Body>

        </Modal>)
}

export default ImgModal