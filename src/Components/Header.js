import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" >
    <Container>
    <Navbar.Brand href="#home">RESTUARENT</Navbar.Brand>
    <Nav className="ms-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}
