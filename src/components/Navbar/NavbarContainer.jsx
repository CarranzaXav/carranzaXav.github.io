import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styles from "./NavbarContainer.module.css";

function NavbarContainer() {
  return (
    <Navbar expand="lg">
      <Container className='pt-3 me-1 fixed-top d-flex flex-row-reverse'>
        <div className={`${styles.navBlock}`}>
          <Navbar.Brand href="#home" className='d-flex pe-3 mx-auto p-4 flex-grow-1'></Navbar.Brand>
          <div >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto pt-2">
                <Nav.Link href="#home" className='text-white mx-auto'>Home</Nav.Link>
                <Nav.Link href="#about" className='text-white mx-auto'>About</Nav.Link>
                <Nav.Link href="#projects" className='text-white mx-auto'>Projects</Nav.Link>
                <Nav.Link href="#contact" className='text-white mx-auto'>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarContainer;