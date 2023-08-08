import React, { useState, useEffect } from "react";
import axios from "axios";
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from "react-bootstrap/NavDropdown";

const DropdownComponent = (props) => {
  // const [currency, setCurrency] = useState('USD');
  const [list, setList] = useState(["USD"]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/simple/supported_vs_currencies")
      .then((res) => {
        setList(res.data.sort());
        // console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const handleChange = (e) => {
  //     props.func(e.target.value);
  //     // setCurrency(e.target.value)
  // }

  return (
    <React.Fragment>
      {/* <select onChange={handleChange} className='decorated'>
                {
                    list.map(items => {
                        return (
                            (items === 'usd') ? <option key={items} value={items} selected >{items}</option> :
                                <option key={items} value={items}>{items}</option>);
                    })
                }
            </select> */}
      {list.map((items) => {
        return (
          <NavDropdown.Item
            eventKey={items.toUpperCase()}
            value={items.toUpperCase()}
          >
            {items.toUpperCase()}
          </NavDropdown.Item>
        );
      })}
    </React.Fragment>
  );
};

export default DropdownComponent;
