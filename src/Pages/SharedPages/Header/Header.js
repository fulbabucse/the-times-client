import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import LeftSide from "../LeftSide/LeftSide";

const Header = () => {
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
            <NavLink>
              <button className="btn btn-secondary">+ Advertise</button>
            </NavLink>
            <NavLink
              to="/home"
              className="text-decoration-none text-white mt-2 ms-2"
            >
              User
            </NavLink>
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
