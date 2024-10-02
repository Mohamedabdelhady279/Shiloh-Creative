import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link'
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        
        <Container>
            <Row>
            <Col md={4} sm={12}>
            <img src="images\618b5b33c589e179c2c8b27c_Shiloh New Logo-01-p-3200.png" width={'100px'} alt="" />
            </Col>

            <Col md={4} sm={12}>

            <Nav className="footernav">
                            <HashLink to="/#latest">Latest Builds</HashLink>
                            <HashLink to="/#Process">Process</HashLink>
                            <HashLink to="/#webfolw">Services</HashLink>
                            <HashLink to="/#contact">Contact Us</HashLink>
                            <NavLink to="/Contact">Projects</NavLink>
                        </Nav>

            </Col>


            <Col md={4} sm={12}>
          
<h3 className='footerimg'>Email: info@shilohcreative.com</h3>
            </Col>
            </Row>
        </Container>







    </div>
  )
}

export default Footer