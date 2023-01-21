import React from 'react';
import ReactDOM from 'react-dom/client';
import './Css/index.css';
import App from './App';
import ProgramPage from './Pages/ProgramPage';
import ReserveringOverview from './Pages/ReserveringOverview';
import Header from './Components/Header/Header';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ShoppingCartPage from './Pages/ShoppingCartPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Programming from "./Pages/Programming";
import Register from './Components/LoginComponents/Register.jsx'
import TweeFaPage from './Components/LoginComponents/TweeFaPage';
import PrivacyBeleid from './Components/LoginComponents/PrivacyBeleid';
import Login from './Components/LoginComponents/Login';
import WWvergeten from './Components/LoginComponents/WWvergeten'
import DonateursPortaal from './Components/DonateursportaalComponents/DonateursPortaal';
import TicketSelectPage from './Pages/TicketSelectPage';
import Doneren from './Pages/Doneer';
import AccountPage from './Components/AccountComponents/AccountPage.jsx'
import Admin from './Pages/Admin';
import HeeftAutherized from './Pages/heeftAutherized';
import AddArtist from './Components/AdminComponents/addArtist';
import AddGroup from './Components/AdminComponents/addGroup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={< App />}></Route>
        <Route exact path='/account' element={<AccountPage />}></Route>
        <Route exact path='/show/:programId' element={<ProgramPage/>}></Route>
        <Route exact path='/programmering' element={<Programming />}></Route>
        <Route exact path='/ticket/:showId' element={<TicketSelectPage/>}></Route>
        <Route exact path='/reserveringOverview' element={<ReserveringOverview/>}></Route>
        <Route exact path='/admin' element={<Admin/>}></Route>
        <Route exact path='/winkelwagen' element={<ShoppingCartPage/>}></Route>
        <Route exact path='/Registreer' element={<Register />}></Route>
        <Route exact path='/Validate' element={<TweeFaPage />}></Route>
        <Route exact path='/PrivacyBeleid' element={<PrivacyBeleid />}></Route>
        <Route exact path='/Login' element={<Login />}></Route>
        <Route exact path='/WachtwoordVergeten' element={<WWvergeten />}></Route>
        <Route exact path='/Donateurs-portaal' element={<DonateursPortaal />}></Route>
        <Route exact path='/Doneren' element={<Doneren />}></Route>
        <Route exact path='/heeftAutherized/:token' element={<HeeftAutherized />}></Route>
        <Route exact path='/addArtist' element={<AddArtist />}></Route>
        <Route exact path='/addGroup' element={<AddGroup />}></Route>
      </Routes>
      {/* footer */}
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
