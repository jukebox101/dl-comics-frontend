import React from 'react';
import {NavLink} from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return (
        
            <div className="topnav">
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/comics" exact >Comics</NavLink>
                <NavLink to="/users" exact >Users</NavLink>
                <input type="text" placeholder="Search.."/>
            </div>
       
    )
}
export default NavBar;