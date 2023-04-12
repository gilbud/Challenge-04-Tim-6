import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";

function NavbarMovie() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Movies Indonesia</Navbar.Brand>
          <Button variant="warning">Register</Button>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarMovie;
