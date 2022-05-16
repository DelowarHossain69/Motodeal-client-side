import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "./../../../firebase.init";
import {signOut} from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="https://i.ibb.co/nbcYJ6P/logo-red.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>

            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>

            {user ? (
              <>
                <Nav.Link as={Link} to="/manageInventory">
                  Manage inventory
                </Nav.Link>

                <Nav.Link as={Link} to="/addItems">
                  Add Items
                </Nav.Link>

                <Nav.Link as={Link} to="/myItems">
                  My Items
                </Nav.Link>

                <button 
                className="border-0 rounded"
                onClick={()=> signOut(auth)}
                >Log out</button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
