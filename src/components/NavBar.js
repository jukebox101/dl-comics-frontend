import React from 'react';
import {NavLink} from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return (
        
            <div class="topnav">
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/about" exact >About</NavLink>
                <NavLink to="/users" exact >Users</NavLink>
                <input type="text" placeholder="Search.."/>
            </div>
       
    )
}
export default NavBar;