import './../../Css/style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import {useState} from 'react'
import './../../Css/Header.scss';
import {checkJWTToken, getJWTRole} from './../../JWT/JWT';

function App() {
  const [openOver, setOPenOver] = useState(false);
  var adminSection = null;
  var donoSection = null;


  const toggleOver = () => {
    document.getElementById('navbarExample01').classList.toggle('show');
    setOPenOver(!openOver);
  };

  if (checkJWTToken()) {
    var role = getJWTRole();
    if (role == 'Admin' || role.includes('Admin'))
      adminSection = true;
    if (role == 'Donateur' || role.includes('Donateur'))
      donoSection = true;
  }

  return (
    <>
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
                {donoSection == null && <li className="nav-item headerItemLi">
                  <Nav.Link href="/Doneren" className='headerItemLink'>Doneren</Nav.Link>
                </li>}
                {adminSection != null && <li className="nav-item headerItemLi">
                  <Nav.Link href="/Admin" className='headerItemLink'>Admin</Nav.Link>
                </li>}
                {/* <li className="nav-item headerItemLi">
                  <Nav.Link href="/Doneren" className='headerItemLink'>Doneren</Nav.Link>
                </li> */}
                {donoSection != null && <li className="nav-item headerItemLi">
                  <Nav.Link href="/Donateurs-portaal" className='headerItemLink'>Begunstigers</Nav.Link>
                </li>}
              </ul>

              <ul className="navbar-nav flex-row">
                {/* <!-- Icons --> */}
                <li className="nav-item">
                  <Nav.Link href="/winkelwagen" className='winkelwagenIcon'>
                    <svg className='headerIcon shoppingCartIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">{/*<!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}<path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                  </Nav.Link>
                </li>
                
                <li className="nav-item">
                  <Nav.Link href="/Login" className='LoginIcon'>
                    <svg className='headerIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">{/*<!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}<path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"/></svg>
                  </Nav.Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <!-- Animated navbar --> */}
      </header>
    </>
  );
}

export default App;