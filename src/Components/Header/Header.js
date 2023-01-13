import './../../Css/style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import {useState} from 'react'
import './../../Css/Header.scss';
import Accordion from 'react-bootstrap/Accordion';
import NavBarPreviewCard from './NavBarPreviewCard';

function App() {
  const [open, setOPen] = useState(true);
  const [openOver, setOPenOver] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };
  const toggleOver = () => {
    console.log(openOver)
    document.getElementById('navbarExample01').classList.toggle('show');
    setOPenOver(!openOver);
  };
  return (
    <>
      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Brand href="#home">Theater Laak</Navbar.Brand>
      </Container>
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Accordion defaultActiveKey={['0', '1']} alwaysOpen className='nav-bar-accordion'>
              <Accordion.Item eventKey="0"> 
                <Accordion.Header><h2 className='nav-bar-preview-head'>Voorstellingen</h2></Accordion.Header>
                /* test *
                  <Accordion.Body>
                    <NavBarPreviewCard titel='Aladin' imgSrc='/Aladdin.jpg' imgAlt='Plaatje'/>
                    <NavBarPreviewCard titel='Aladin' imgSrc='/Aladdin.jpg' imgAlt='Plaatje'/>
                    <NavBarPreviewCard titel='Aladin' imgSrc='/Aladdin.jpg' imgAlt='Plaatje'/>
                  <a href='/programmering' className='nav-bar-preview-link'>Alle voorstellingen <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">{<!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*<path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></a>
                  </Accordion.Body>
                <hr className='DivideLine'/>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header><h2 className='nav-bar-preview-head'>Over ons</h2></Accordion.Header>
                  <Accordion.Body>
                    <ul className='over-ons-list'>
                        <li><Nav.Link href="/contact">Contact</Nav.Link></li>
                        <li><Nav.Link href="/about">Over Theater Laak</Nav.Link></li>
                        <li><Nav.Link href="/">Werken bij</Nav.Link></li>
                    </ul>
                  </Accordion.Body>
                  <hr className='DivideLine'/>
              </Accordion.Item>
            </Accordion>
            {/* tot hier *
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
    </Navbar> */}
    <header>
        {/* <!-- Animated navbar--> */}
        <nav className="navbar navbar-expand-lg sticky-top navbar-scroll">
          <div className="container-fluid">
            <button
                    className="navbar-toggler ps-0"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarExample01"
                    aria-controls="navbarExample01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={toggleOver}
                    >
              <span
                    className="d-flex justify-content-start align-items-center"
                    >
                <i className="fas fa-bars" style={{color: "black"}}></i>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active headerItemLi">
                  <Nav.Link href="/" className='headerItemLink'>Home</Nav.Link>
                </li>
                <li className="nav-item headerItemLi">
                  <Nav.Link href="/programmering" className='headerItemLink'>Programmering</Nav.Link>
                </li>
                {/* <li className="nav-item">
                  <Nav.Link href="/account">Account</Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link href="/account">Account</Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link href="/account">Account</Nav.Link>
                </li> */}
              </ul>

              <ul className="navbar-nav flex-row">
                {/* <!-- Icons --> */}
                <li className="nav-item">
                  <Nav.Link href="/winkelwagen">
                    <svg className='headerIcon shoppingCartIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">{/*<!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}<path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                  </Nav.Link>
                </li>
                
                <li className="nav-item">
                  <Nav.Link href="/account">
                    <svg className='headerIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">{/*<!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}<path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"/></svg>
                  </Nav.Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <!-- Animated navbar --> */}

        {/* <!-- Background image --> */}
        {/* <div
            id="intro"
            class="bg-image"
            style="
                    background-image: url(https://mdbcdn.b-cdn.net/img/new/fluid/city/113.jpg);
                    height: 100vh;
                    "
            >
          <div class="mask text-white" style="background-color: rgba(0, 0, 0, 0.8)">
            <div class="container d-flex align-items-center text-center h-100">
              <div>
                <h1 class="mb-5">This is title</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis molestiae
                  laboriosam numquam expedita ullam saepe ipsam, deserunt provident corporis,
                  sit non accusamus maxime, magni nulla quasi iste ipsa architecto? Autem!
                </p>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- Background image --> */}
      </header>
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