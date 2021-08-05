import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="light" sticky="top">
      <Container>
        <Navbar.Brand className>PM-Demo</Navbar.Brand>
      </Container>
      <Nav>
        <Container className="justify-content-end cursor-pointer">
          <Link to="/" className="px-4 py-2 rounded">
            Home
          </Link>
        </Container>
      </Nav>
    </Navbar>
  );
};

export default Header;
