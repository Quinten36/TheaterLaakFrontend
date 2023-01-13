import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';//./Components/LoginComponents/
import './LoginPageStyles.css';
import FaInputhandle from './FaInputhandle'

import {useParams } from 'react-router-dom';
export default function TweeFaPage() {
  const { id } = useParams();
  console.log(id);
  return (
    <div className = "FAContainer">
      <h1>Theather Laak </h1>
      <h2>2 Factor Authentication</h2>
      <FaInputhandle  />
      <div className="text2FaPage">Voer de automatisch gegenereerde code in. Deze is  naar uw Email adres is verzonden.</div>
      <div className="lijn2fa"></div>
      <div className="EmailOpnieuwLink">
        <a href="#">Email opnieuw verzenden</a>
      </div>
    </div>
  )
}
