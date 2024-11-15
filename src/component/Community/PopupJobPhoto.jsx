import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const MyPopupJobPhoto = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Open Modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Modal content goes here...</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* Add additional buttons here if needed */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyPopupJobPhoto;
