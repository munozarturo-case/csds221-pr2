import React from 'react';
import { Nav, Button, Navbar, Container } from 'react-bootstrap';
import { FaBars, FaPlus } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" className="mb-4">
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FaBars className="align-middle" />
        </Navbar.Toggle>
        <Container className="d-flex justify-content-center">
          <Navbar.Brand className="d-flex align-items-center">
            <FaBars className="mr-2 align-middle" />
            FRAMEWORKS
          </Navbar.Brand>
        </Container>
        <Nav className="ml-auto mr-2">
          <Button variant="primary" style={{"margin-right": "10px"}}>
            <FaPlus className="align-middle" /> Add
          </Button>
        </Nav>
      </Navbar>
      {/* Add your table code here */}
    </>
  );
};