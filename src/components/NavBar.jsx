import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <Navbar expand="lg" className="bg-body-tertiary w-full">
      <Container fluid>
        <Navbar.Brand href="#" className="font-bold text-2xl">
          ChicHaven
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/">
            Products
          </Nav.Link>

          {/* Category Dropdown */}
          <NavDropdown title="Categories" id="category-dropdown">
            <NavDropdown.Item as={Link} to="/category/men's clothing">
              Men's Clothing
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/women's clothing">
              Women's Clothing
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/jewelery">
              Accessories
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/electronics">
              Electronics
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Nav.Link as={Link} to="/cart">
              My Bag {cartProducts.length}
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
