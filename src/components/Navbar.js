import React, { useState } from 'react';
// import axios from 'axios'
import '../style/Navbar.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropdownComponent from './DropdownComponent';
import CoinImage from '../coinImage.png'

function NavbarComponent({func, searchFun}) {

    const [showCurrency,setShowCurrency]=useState('INR')
    const handleSearch = (e) => {
        searchFun(e.target.value);
        // console.log(e.target.value);
    }
    const handleCurrency = (evt) => {
        func(evt);
        setShowCurrency(evt); 
        // console.log(evt);

    }

    return (
        <React.Fragment>
            <Navbar bg="light temp" expand="lg" style={{height:'9vh'}}>
                <Container fluid>
                    <Navbar.Brand><img src={CoinImage} alt="CoinImage" className='coin-image'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavDropdown title={showCurrency} onSelect={handleCurrency}>
                                <DropdownComponent />
                            </NavDropdown>

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
    )
}

export default NavbarComponent;