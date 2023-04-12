import React from "react";
import { Navbar, Container } from "react-bootstrap";

function NavbarMovie() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Movies Indonesia</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarMovie;
