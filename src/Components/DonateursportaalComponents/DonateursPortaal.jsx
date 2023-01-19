import React from 'react'

import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import EarlyAccessReservations from './EarlyAccessReservations';
import './DonteursPortaalStyles.css'
import { GetJWTToken, getJWTRole, GetJWTExp } from './../../JWT/JWT';
import OntvangenFeedback from './OntvangenFeedback';

import { setCookieDate } from '../../Cookie/Cookie';
export default function DonateursPortaal() {


  const [donaties, setDonaties] = useState([]);



  const [totaal, setTotaal] = useState(0);
  var apiJWTToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NTI4NDJkZC01MTg0LTRjNjYtOTM4OS1hYWY0ODMxYWM5MDciLCJqdGkiOiIyZTdiMTQzMi1hMmUzLTQ5OWEtYjdiOC1hZWQwOGMxYzRmZDAiLCJpYXQiOiIwMS8xNy8yMDIzIDExOjI0OjAwIiwiVXNlcklkIjoiODUyODQyZGQtNTE4NC00YzY2LTkzODktYWFmNDgzMWFjOTA3IiwiRW1haWwiOiJxa2VtcGVyczM2QGdtYWlsLmNvbSIsImV4cCI6MTk4OTU3Mzg0MCwiaXNzIjoiSWtEb25lZXIiLCJhdWQiOiIqIn0.0-8TXiuDrUpJuOAjJ0a3B8Ta-pyzYZ3YnFBbElEFFDk';
  let token;

  const requestOptionsAPI = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + apiJWTToken },
  };


  function updateToken() {
    var rolesBefore = getJWTRole();
    setCookieDate('userJWT', token.token, GetJWTExp(token.token));
    var roles = getJWTRole();
    if (roles == 'Donateur' && rolesBefore != 'Donateur' && rolesBefore != 'No token found')
      alert('Gefeliciteerd met donateur worden')
  }

  useEffect(() => {
    //checkOfDonateur();
  }, [])

  function checkOfDonateur() {
    if (apiJWTToken == null) {
      //TODO: de api ophalen vanaf de url en dat in de cookies zetten. Aparte pagina?
      window.location.href = "https://ikdoneer.azurewebsites.net/Toegang?url=https%3A%2F%2Fwww.stresscentrum.nl%2F";
    } else {

      fetch(`https://ikdoneer.azurewebsites.net/api/donatie`, requestOptionsAPI)
        .then(resp => resp.json())
        .then((data) => {
          for (var donatie in data) {
            setTotaal(parseFloat(data[donatie].hoeveelheid))
          };
          setDonaties(data)
        })
        .then(() => {
          console.log(totaal)
          fetch(`${process.env.REACT_APP_BACKEND_URL}/account/checkDonatie/${totaal}`, requestOptionsAPI)
            .then(resp => resp.json())
            .then((data) => { token = data; })
            .then(() => { updateToken() })
        })
    }
  }



  return (
    <div className='DonateursPortaal'>
      <h1>Donateursportaal</h1>
      <p>Als donor kunt u ons helpen onze missie voort te zetten om kunst en cultuur te brengen naar onze gemeenschap. Uw bijdrage helpt ons om artistieke programma's te ondersteunen, onze theaterfaciliteiten te onderhouden en onze deuren open te houden voor toekomstige generaties.</p>
      <div>{totaal}</div>
      <div className='lijn1'></div>
      <EarlyAccessReservations />
      <div className='lijn1'></div>
      <h3>Preview komende theather seizoen</h3>
      <img className='programmaKomendeSeizoen' src="./images/programmaKomendeSeizoen.PNG" alt="" />

      <div className='lijn1'></div>

      <OntvangenFeedback />
    </div>
  )
}

