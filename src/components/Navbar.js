import React, { useState } from "react";
// import axios from 'axios'
import "../style/Navbar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import DropdownComponent from "./DropdownComponent";
import CoinImage from "../coinImage.png";
// import SortDropdownComponent from './SortDropdownComponent';

// import Dropdown from 'react-bootstrap/Dropdown';

function NavbarComponent({ func, searchFun }) {
  const [showCurrency, setShowCurrency] = useState("INR");
  const handleSearch = (e) => {
    searchFun(e.target.value);
    // console.log(e.target.value);
  };
  const handleCurrency = (evt) => {
    func(evt);
    setShowCurrency(evt);
    // console.log(evt);
  };

  // const handleSorting=(evt)=>{
  //     sortContent(evt);
  // }
  return (
    <React.Fragment>
      <Navbar bg="light temp" expand="lg" className="navbar-main">
        <Container fluid className='container-class'>
          <Navbar.Brand>
            <img src={CoinImage} alt="CoinImage" className="coin-image" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Nav.Link href="#action1">Home</Nav.Link> */}
              {/* <Nav.Link href="#action2">Theme</Nav.Link> */}
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown> */}

              <NavDropdown title={showCurrency} onSelect={handleCurrency}>
                <DropdownComponent />
              </NavDropdown>
              {/* Sort Cateogry */}
              {/* <NavDropdown title='Sort' onSelect={handleSorting}>
                                <SortDropdownComponent/>
                            </NavDropdown> */}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={handleSearch}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default NavbarComponent;
