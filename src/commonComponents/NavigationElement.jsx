import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const NavigationElement = () => {
  return (

    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/registration">Book Registration</Nav.Link>
          <Nav.Link href="/bookreview">Bookreview</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};