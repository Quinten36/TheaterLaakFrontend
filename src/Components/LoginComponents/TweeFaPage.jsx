import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';//./Components/LoginComponents/
import './LoginPageStyles.css';
import FaInputhandle from './FaInputhandle'


export default function TweeFaPage() {

  return (
    <div className = "FAContainer">
      <h1>Theather Laak </h1>
      <h2>Email verificatie</h2>
      <FaInputhandle  />
      <div className="text2FaPage">Voer de automatisch gegenereerde code in. Deze is  naar uw Email adres is verzonden.</div>
      <div className="lijn2fa"></div>
    </div>
  )
}
