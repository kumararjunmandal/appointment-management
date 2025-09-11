import React from 'react';
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  Form,
} from 'react-bootstrap';
import './App.css';

function App() {
  async function onSubmitClick(e) {
    e.preventDefault();
    const formData = {
      name: document.getElementById('input-name').value,
      speciality: document.getElementById('input-speciality').value,
      location: document.getElementById('input-location').value,
      slots: [
        {
          time: document.getElementById('slot_1').value,
          available: document.getElementById('slot_1_checkbox').checked,
        },
        {
          time: document.getElementById('slot_2').value,
          available: document.getElementById('slot_2_checkbox').checked,
        },
        {
          time: document.getElementById('slot_3').value,
          available: document.getElementById('slot_3_checkbox').checked,
        },
        {
          time: document.getElementById('slot_4').value,
          available: document.getElementById('slot_4_checkbox').checked,
        },
        {
          time: document.getElementById('slot_5').value,
          available: document.getElementById('slot_5_checkbox').checked,
        },
        {
          time: document.getElementById('slot_6').value,
          available: document.getElementById('slot_6_checkbox').checked,
        },
      ],
    };
    const res = await fetch('http://localhost:8000/modify', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    });
  }
  return (
    <>
      <div className="bg-dark text-light min-vh-100">
        {/* Header */}
        <Navbar bg="primary" variant="dark" expand="lg" className="mb-4 shadow">
          <Container>
            <Navbar.Brand>APT MGMT</Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="#">HOME</Nav.Link>
              <Nav.Link href="#">ABOUT</Nav.Link>
              <Nav.Link href="#">CONTACT US</Nav.Link>
              <Button variant="outline-light" className="ms-2">
                LOGIN
              </Button>
            </Nav>
          </Container>
        </Navbar>

        {/* Form Section */}
        <Container>
          <Form>
            <Row className="mb-4">
              <Col md={4}>
                <Form.Group controlId="input-name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    className="bg-dark text-light border-light"
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="input-speciality">
                  <Form.Label>Speciality</Form.Label>
                  <Form.Control
                    type="text"
                    name="speciality"
                    className="bg-dark text-light border-light"
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="input-location">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    name="location"
                    className="bg-dark text-light border-light"
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Time Slots */}
            <Row>
              {[1, 2, 3, 4, 5, 6].map((slot) => (
                <Col md={4} key={slot} className="mb-4">
                  <Form.Group controlId={`slot_${slot}`}>
                    <Form.Label>{`Slot ${slot}`}</Form.Label>
                    <Form.Control
                      type="time"
                      name={`slot_${slot}`}
                      className="bg-dark text-light border-light"
                    />
                  </Form.Group>
                  <Form.Check
                    type="checkbox"
                    label="Availability"
                    name={`slot_${slot}_checkbox`}
                    id={`slot_${slot}_checkbox`}
                    className="text-light"
                  />
                </Col>
              ))}
            </Row>

            <Button variant="outline-light" onClick={onSubmitClick}>
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default App;
