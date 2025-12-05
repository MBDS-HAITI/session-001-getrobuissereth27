import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar bg="light" variant="light" expand="lg" fixed="top" className="w-100">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
        <img
            src="/logo.jpg"
            width="40"
            height="40"
            className="d-inline-block align-top me-4"
            alt="Logo"
          />
        
        Student Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/students">Students</Nav.Link>
            <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
            <Nav.Link as={Link} to="/grades">Grades</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
