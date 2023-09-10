import React, { useState } from 'react';

import { Modal, Button } from 'reactstrap';

function AppointmentModal({ show, handleClose, handleSave }) {
  const [appointment, setAppointment] = useState('');

  const handleChange = (e) => {
    setAppointment(e.target.value);
  };

  const handleSaveClick = () => {
    handleSave(appointment);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Book Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label>Appointment Details:</label>
        <input type="text" value={appointment} onChange={handleChange} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveClick}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AppointmentModal;
