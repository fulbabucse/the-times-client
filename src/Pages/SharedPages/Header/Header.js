import React from "react";
import "./Header.css";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import LeftSide from "../LeftSide/LeftSide";
import UserThumb from "../../../assets/user.png";
import { Image, NavDropdown } from "react-bootstrap";

const Header = () => {
  const { user, userSignOut } = useContext(AuthContext);

  const handleSignOut = () => {
    userSignOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="mb-2"
    >
      <Container>
        <NavLink
          to="/"
          className="fs-1 text-white fw-bold text-decoration-none"
        >
          The Times
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex gap-3 ms-2">
            <NavLink
              to="/home"
              className="text-decoration-none text-white mt-2"
            >
              Home
            </NavLink>
            <NavLink
              to="/home"
              className="text-decoration-none text-white mt-2"
            >
              Contact Us
            </NavLink>
          </Nav>

          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={user?.displayName || user?.email || `User Name`}
              menuVariant="dark"
            >
              {user?.uid && (
                <div className="user-profile">
                  <Link to="/profile">Profile</Link>
                </div>
              )}
              {user?.uid ? (
                <button
                  onClick={handleSignOut}
                  className="btn btn-warning w-100 fw-semibold"
                >
                  Sign out
                </button>
              ) : (
                <Link
                  className="text-decoration-none text-white d-inline-block w-100 text-center"
                  to="/signin"
                >
                  <button className="btn btn-secondary w-100 fw-semibold">
                    Sign In
                  </button>
                </Link>
              )}
              <Link
                className="text-decoration-none text-white d-inline-block w-100 text-center"
                to="/signup"
              >
                <button className="btn btn-info w-100 text-white my-2 fw-semibold">
                  Sign Up
                </button>
              </Link>
            </NavDropdown>
          </Nav>
          <Nav className="user-img">
            <Image
              className="text-white"
              src={user?.photoURL || UserThumb}
              alt={user?.displayName}
            />
          </Nav>
          <div className="d-lg-none">
            <LeftSide></LeftSide>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
