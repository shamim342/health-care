import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import useAuth from '../../hooks/useAuth';
import './header.css'


const Header = () => {
  const {user,logout} = useAuth();
    return (
        <div>
            <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/"> Life-<span className="fs-3 fw-bold text-danger">lab+</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav "  className="justify-content-end">
    <Nav>
      <Nav.Link as={Link} className="custom-nav" to="/home">Home </Nav.Link>
      <Nav.Link as={Link} to="/about">About </Nav.Link>
      <Nav.Link as={Link} to="/blogs"> Blogs</Nav.Link>
      <Nav.Link>{user.displayName}</Nav.Link>
      {
        user.email? <button className="bg-danger" onClick={logout}>logout</button>:
      <Nav.Link as={Link}  to="/login">Login</Nav.Link>

      }
     
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;