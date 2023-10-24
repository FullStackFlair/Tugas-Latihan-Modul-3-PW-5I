import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT Us</Link></li>
                <li><Link tp="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;