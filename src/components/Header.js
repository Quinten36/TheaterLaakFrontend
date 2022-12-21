import './../css/App.css';
import './../css/style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import {useState} from 'react'
import './../css/header.scss';

function App() {
  const [open, setOPen] = useState(true);
  const [openOver, setOPenOver] = useState(true);
  const toggle = () => {
    setOPen(!open);
  };
  const toggleOver = () => {
    setOPenOver(!openOver);
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Brand href="#home">Theater Laak</Navbar.Brand>
      </Container>
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <section> 
              <h2 className='nav-bar-preview-head'>Voorstellingen</h2>
              {/* test */}
              <button onClick={toggle}>toggle</button>
                {open && 
                <>
                  <section>
                    <figure className='nav-bar-preview-image'>
                        <img src='/Aladdin.jpg' alt='Plaatje'/>
                    </figure>
                    <h4 className='nav-bar-preview-titel'>Aladin</h4>
                  </section>
                  <section>
                    <figure className='nav-bar-preview-image'>
                        <img src='/Aladdin.jpg' alt='Plaatje'/>
                    </figure>
                    <h4 className='nav-bar-preview-titel'>Aladin</h4>
                  </section>
                  <section>
                    <figure className='nav-bar-preview-image'>
                        <img src='/Aladdin.jpg' alt='Plaatje'/>
                    </figure>
                    <h4 className='nav-bar-preview-titel'>Aladin</h4>
                  </section>
                <a href='/programmering' className='nav-bar-preview-link'>Alle voorstellingen <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">{/*<!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}<path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></a>
              </>
              }
              <hr className='DivideLine'/>
            </section>
            <section>
                <h2 className='nav-bar-preview-head'>Over ons</h2>
                <button onClick={toggleOver}>toggle</button>
                {openOver && 
                  <>
                    <ul className='over-ons-list'>
                        <li><Nav.Link href="/contact">Contact</Nav.Link></li>
                        <li><Nav.Link href="/about">Over Theater Laak</Nav.Link></li>
                        <li><Nav.Link href="/">Werken bij</Nav.Link></li>
                    </ul>
                  </>
                }
                <hr className='DivideLine'/>
            </section>
            {/* tot hier */}
            <section>
                <ul className='nav-bar-links'>
                    <li><Nav.Link href="/">Theater Laak</Nav.Link></li>
                    <li><Nav.Link href="/">Zakelijk</Nav.Link></li>
                </ul>
                <hr className='DivideLine'/>
            </section>
            <section>
                <ul className='nav-bar-links'>
                    <li><Nav.Link href="/">Mijn account</Nav.Link></li>
                    <li><Nav.Link href="/">Winkelwagen</Nav.Link></li>
                </ul>
                <div className='languageSelector'>
                    <span className='selected'>NL</span>
                    <span>EN</span>
                </div>
            </section>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  );
}

export default App;

{/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}