import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import './NavBar.css'

const NavBar = ({query, handleQuery}) => {
    
    
    return (
        
            <div className="topnav">
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/comics" exact >Comics</NavLink>
                <NavLink to="/cart" exact >Cart</NavLink>
                <input type="text" placeholder="Search.." onChange={handleQuery} />
            </div>
       
    )
}
export default NavBar;