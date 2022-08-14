import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
function SortDropdownComponent(){
    return(
        <>
        <NavDropdown.Item eventKey='A-Z' value='A-Z'>A-Z</NavDropdown.Item>

        <NavDropdown.Item eventKey='Z-A' value='Z-A'>Z-A</NavDropdown.Item>

        <NavDropdown.Item eventKey='PRICE' value='PRICE'>PRICE</NavDropdown.Item>

        <NavDropdown.Item eventKey='MARKET-CAP' value='MARKET-CAP'>MARKET-CAP</NavDropdown.Item>
        </>
    )
}

export default SortDropdownComponent;