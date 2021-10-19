import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import useAuth from '../../hooks/useAuth';


const Header = () => {
  const {user,logout} = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/home"> Life-<span className="fs-3 fw-bold text-danger">lab+</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav "  className="justify-content-end">
    <Nav>
      <Nav.Link href="#features">Services</Nav.Link>
      <Nav.Link as={Link} to="/about">About </Nav.Link>
      <span className="text-white">{user.displayName}</span>
      {
        user.email? <button onClick={logout}>logout</button>:
      <Nav.Link as={Link} to="/login">Login</Nav.Link>

      }
     
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;