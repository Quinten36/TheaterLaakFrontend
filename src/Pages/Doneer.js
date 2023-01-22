import {useEffect, useMemo, useState} from "react";
import { Nav } from 'react-bootstrap';
import './../Css/Doneer.scss'
import React from 'react'
import Select from 'react-select'
import {getCookie, setCookieDate } from "../Cookie/Cookie";
import {getJWTRole, GetJWTExp} from './../JWT/JWT'

export default function Programming() {
  // var apiJWTToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NTI4NDJkZC01MTg0LTRjNjYtOTM4OS1hYWY0ODMxYWM5MDciLCJqdGkiOiIyZTdiMTQzMi1hMmUzLTQ5OWEtYjdiOC1hZWQwOGMxYzRmZDAiLCJpYXQiOiIwMS8xNy8yMDIzIDExOjI0OjAwIiwiVXNlcklkIjoiODUyODQyZGQtNTE4NC00YzY2LTkzODktYWFmNDgzMWFjOTA3IiwiRW1haWwiOiJxa2VtcGVyczM2QGdtYWlsLmNvbSIsImV4cCI6MTk4OTU3Mzg0MCwiaXNzIjoiSWtEb25lZXIiLCJhdWQiOiIqIn0.0-8TXiuDrUpJuOAjJ0a3B8Ta-pyzYZ3YnFBbElEFFDk';
  let [apiJWTToken, setDonatieJWT] = useState(null);
  var apiDEVToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwZjMwNzRlZS01NTY0LTQzNzMtYTNhYy1kMWIyMDg4NzY0YjMiLCJqdGkiOiI0Y2MzY2RiMC0xMDEzLTQ4ZDMtOTNjMS1mZDk2ZTMyYjAxMTciLCJpYXQiOiIwMS8xNy8yMDIzIDIwOjI1OjU0IiwiVXNlcklkIjoiMGYzMDc0ZWUtNTU2NC00MzczLWEzYWMtZDFiMjA4ODc2NGIzIiwiRW1haWwiOiJxLmtlbXBlcnNAb3V0bG9vay5jb20iLCJleHAiOjE5ODk2MDYzNTQsImlzcyI6IklrRG9uZWVyIiwiYXVkIjoiKiJ9.nK6O_V2li380PS3PChIm13zsRHkOymAGpTO1pkreOFg';
  const [amount, setAmount] = useState(0);
  const [reason, setReason] = useState("");
  const [goodGoals, setGoodGoals] = useState([]);
  const [donaties, setDonaties] = useState([]);
  const [chosenGoal, setChosenGoal] = useState(48);

  // TODO: dev things
  if (getCookie('doneerToken') != "" && apiJWTToken == null)
    setDonatieJWT(getCookie('doneerToken'));

  let options = [];
  let token;

  const requestOptionsDev = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json','Authorization': 'Bearer ' + apiDEVToken },
  };  

  const requestOptionsAPI = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json','Authorization': 'Bearer ' + apiJWTToken },
  };  

  useEffect(() => {
    fetch(`https://ikdoneer.azurewebsites.net/api/goededoelen`, requestOptionsDev)
      .then(resp => resp.json())
      .then((data) => {setGoodGoals(data)})
  }, []);

  if (goodGoals.length > 0)
    fillOptions()

  function fillOptions() {
    goodGoals.map((goal, index) => {
      if (goal.naam.length < 150)
        options.push({value: goal.id, label: goal.naam});
    })
  }

  function displayFeedback(response) {
    document.getElementById('DoneerFeedbackLabel').classList.remove('green');
    var output = response.message == 'Succes!' ? 'Donatie is gelukt' : 'Er is even wat fout gegaan';
    if (response.message == 'Succes!')
      document.getElementById('DoneerFeedbackLabel').classList.add('succeed');
    document.getElementById('DoneerFeedbackLabel').innerHTML = output;
  }

  async function Doneer() {
    await fetch(`https://ikdoneer.azurewebsites.net/api/donatie`,{
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiJWTToken,
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({"Doel": chosenGoal, "Hoeveelheid": amount, "Tekst":reason})
      })
      .then((data) => data.json())
      .then((response) => {displayFeedback(response)})
  }

  function checkOfDonateur() {
    if (apiJWTToken == null) {
      //TODO: de api ophalen vanaf de url en dat in de cookies zetten. Aparte pagina?
      window.location.href = "https://ikdoneer.azurewebsites.net/Toegang?url=http%3A%2F%2Flocalhost%3A5086%2Fapi%2Fmisc%2FsetToken";
    } else {
      var totaal = 0;
      fetch(`https://ikdoneer.azurewebsites.net/api/donatie`, requestOptionsAPI)
      .then(resp => resp.json())
      .then((data) => {
        for (var donatie in data) {
          totaal += parseFloat(data[donatie].hoeveelheid)
        }; 
        setDonaties(data)
      })
      .then(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/account/checkDonatie/${totaal}`, requestOptionsAPI)
        .then(resp => resp.json())
        .then((data) => {token = data;})
        .then(() =>{updateToken()})
      })
    }
  }

  function updateToken() {
    var rolesBefore = getJWTRole();
    setCookieDate('userJWT', token.token, GetJWTExp(token.token));
    var roles = getJWTRole();
    if (roles == 'Donateur' && rolesBefore != 'Donateur' && rolesBefore != 'No token found')
      alert('Gefeliciteerd met donateur worden')
  }

  return (
    <>
      <div>
        <h1>Doneer pagina</h1>
        <p>Geeft hier toestemming:</p>
        <Nav.Link href="https://ikdoneer.azurewebsites.net/Toegang?url=https%3A%2F%2Fwww.stresscentrum.nl%2F" style={{"textDecoration":"underline"}}>Geef toestemming</Nav.Link>
        <button onClick={checkOfDonateur}>Check of ik donateur ben</button>
      </div>
      <div>
        <h2>Doneer hier</h2>
        <span id="DoneerFeedbackLabel"></span><br/><br/>
        Kies uw goede doel: <Select options={options} onChange={(choice) => setChosenGoal(choice.value)} defaultValue={{value: chosenGoal, label: 'Petitie tegen stress'}}/>
        Hoeveelheid: <input type="number" name="hoeveelheid" id="AmountDonate" value={amount} onChange={e => setAmount(e.target.value)}/><br/>
        Reden: <input type="text" name="reden" id="ReasonDonate" value={reason} onChange={e => setReason(e.target.value)}/><br/>
        <button onClick={Doneer}>Doneer</button>
      </div>
    </>
  )

}

//TODO: pagineren (max results)