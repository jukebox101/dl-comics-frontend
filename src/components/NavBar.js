import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
// import './NavBar.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

const NavBar = ({query, handleQuery}) => {
    
    return (
        // <Navbar bg="dark" variant="dark">
        //       <Nav>
        //         <Nav.Item>
        //             <Nav.Link>
        //                 <NavLink to="/" exact>Home</NavLink>
        //             </Nav.Link>
        //         </Nav.Item>
        //         <Nav.Item>
        //             <Nav.Link>
        //                 <NavLink to="/comics" exact >Comics</NavLink>
        //             </Nav.Link>
        //         </Nav.Item>
        //         <Nav.Item>
        //             <Nav.Link>
        //                 <NavLink to="/cart" exact >Cart</NavLink>
        //             </Nav.Link>    
        //         </Nav.Item>
        //         <Nav.Item>
        //             <Form inline>
        //                 <FormControl type="text" placeholder="Search.." onChange={handleQuery} />
        //                 {/* <input  /> */}
        //             </Form> 
        //         </Nav.Item>
        //     </Nav>
        // </Navbar>
        <Navbar  bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">DL Comics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/comics">Comics</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleQuery} />
          </Form>
        </Navbar.Collapse>
      </Navbar>
            
       
    )
}
export default NavBar;