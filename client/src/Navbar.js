import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './style.css'


const Navbar = () => {
    return (
        <div class="topnav">
            <span class="topnav-item">
                <Link class="topnav-link" style={{color: "white", textDecoration : "none"}} to="/home">About</Link>
            </span>
            <span class="topnav-item">
                <Link class="topnav-link" style={{color: "white", textDecoration : "none"}} to="/">APKs</Link>
            </span>
            <span class="topnav-item">
                <Link class="topnav-link" style={{color: "white", textDecoration : "none"}} to="/contact">Contact</Link>
            </span>
        </div>
    )
}

export default Navbar
