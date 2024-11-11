import React from 'react'
import "./Header.css";
import { Navbar, Nav } from "react-bootstrap";
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="Name_link">
          <Link to="/add">add product</Link>
          <Link to="/update1">update product</Link>
          <Link to="/login">login product</Link>
          <Link to="/register">Register</Link>
        </Nav>
      </Navbar>
      
    </div>
  );
}
export default Header;
