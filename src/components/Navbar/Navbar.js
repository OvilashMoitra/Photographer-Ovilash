import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="logo"><h4>Photographer-Ovilash</h4></div>
                <div className="menu">
                    <NavLink to={`/`}>Home</NavLink>
                    <NavLink to={`checkout`}>Checkout</NavLink>
                    <NavLink to={`/login`}>Login</NavLink>
                    <NavLink to={`/blog`}>Blog</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;