import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Auth from "../utils/auth.js"
import cardiogram from "../assets/images/cardiogram.png"

export default function Header() {
    const loggedIn = Auth.loggedIn();
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isLoginPage = location.pathname === '/login';
    const isSignupPage = location.pathname === '/signup';


return (
    <Navbar collapseOnSelect expand="sm" variant="dark" bg={loggedIn && !isHomePage ? "dark" : null}>
        {loggedIn ? (
            <>
            <Navbar.Brand as ={Link} to="/" className="brand brand-logged d-flex align-items-center">
                <img alt="heart" style={{ display: "inline" }} src={cardiogram} className="heart-icon" />
                Exercise Tracker
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav >
                    <Nav.Link as={Link} to="/exercise" eventKey="1" >Exercises</Nav.Link>
                    <Nav.Link as={Link} to="/history" eventKey="2">History</Nav.Link>
                    <Nav.link as={Link} onClick={Auth.logout} >Logout!</Nav.link>
                </Nav>
            </Navbar.Collapse>
        </>) :
        (<Navbar.Brand as={Link} to="/" className={`brand brand-new mx-auto d-flex align-items-center'
           ${isLoginPage || isSignupPage ? "brand-text" : null}`}>
            <img alt="cardiogram" style={{ display: "inline" }} src={cardiogram} className="heart-icon" />
            Exercise Tracker
           </Navbar.Brand> )}
    </Navbar>
);
}