import React from 'react'
import { HashLink } from 'react-router-hash-link'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Home from './Home'



const Nav1 = () => {
  return (
    <div>

        <Navbar     expand="lg">
                <Container >
                    <NavLink to="/"><img src="images\618b5b33c589e179c2c8b27c_Shiloh New Logo-01-p-3200.png" alt="" /></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"    />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="navlinks justify-content-end">
                            <HashLink to="/#latest">Latest Builds</HashLink>
                            <HashLink to="/#Process">Process</HashLink>
                            <HashLink to="/#webfolw">Services</HashLink>
                            <HashLink to="/#contact">Contact Us</HashLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >

    


    </div>
  )
}

export default Nav1