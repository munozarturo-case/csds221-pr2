import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function TaskDialog({ show, title, dialogIcon, body, onConfirm, onCancel }) {
    return (
        <Modal show={show} onHide={onCancel} centered>
            <Modal.Header closeButton>
                {dialogIcon && <Modal.Title style={{ marginRight: '10px' }}>{dialogIcon}</Modal.Title>}
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onCancel}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={onConfirm}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    );
};