import React from 'react';
import { Navbar, Container, Nav, Button, Table } from 'react-bootstrap';
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
      <Container className="my-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="table-header">Task</th>
              <th className="table-header">Description</th>
              <th className="table-header">Deadline</th>
              <th className="table-header">Priority</th>
              <th className="table-header">Is Complete</th>
              <th className="table-header">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Add your task items here */}
          </tbody>
        </Table>
      </Container>
    </>
  );
};