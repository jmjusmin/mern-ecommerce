import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Badge,
  Form,
  Dropdown,
  DropdownButton,
  Button,
  InputGroup,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

const HeaderComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        {/* ==== LOGO AND NAME SECTION ====*/}
        {/* Use the LinkContainer to prevent reloading the page */}
        <LinkContainer to="/">
          <Navbar.Brand href="/">SHOPMEE ONLINE SHOP</Navbar.Brand>
        </LinkContainer>

        {/* ==== SEARCH SECTION ====*/}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-auto w-75">
            <InputGroup>
              <DropdownButton
                id="dropdown-basic-button"
                variant="light"
                title="All"
              >
                <Dropdown.Item>Books</Dropdown.Item>
                <Dropdown.Item>Electronics</Dropdown.Item>
                <Dropdown.Item>Clothes</Dropdown.Item>
              </DropdownButton>
              <Form.Control type="text" placeholder="Search in shop..." />
              <Button variant="light">
                <BiSearch />
              </Button>{" "}
            </InputGroup>
          </Nav>

          {/* ==== LOGIN AND CART SECTION ====*/}
          <Nav>
            <LinkContainer to="/admin/orders">
              <Nav.Link>
                Admin
                <span className="position-absolute top-1 start-10 translate-middle p-2 bg-danger rounded-circle"></span>
              </Nav.Link>
            </LinkContainer>

            <NavDropdown title="John Doe" id="collasible-nav-dropdown">
              <NavDropdown.Item
                eventKey="/user/my-orders"
                as={Link}
                to="/user/my-orders"
              >
                My orders
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="/user" as={Link} to="/user">
                My profile
              </NavDropdown.Item>
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/login">
              <Nav.Link>
                <AiOutlineUser size={20} />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link>
                <Badge bg="danger">2</Badge>
                <AiOutlineShoppingCart size={20} />
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
