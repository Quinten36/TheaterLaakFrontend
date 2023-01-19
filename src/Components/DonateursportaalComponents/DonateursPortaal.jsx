import React from 'react'
import { Form } from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import EarlyAccessReservations from './EarlyAccessReservations';
import './DonteursPortaalStyles.css'
import { GetJWTToken } from './../../JWT/JWT';
import OntvangenFeedback from './OntvangenFeedback';
export default function DonateursPortaal() {

  const [gebruikerFeedbackInput, setGebruikerFeedbackInput] = useState("");
  const gebruikerID = GetJWTToken().Id;

  function handleGebruikerFeedbackInput(event) {
    setGebruikerFeedbackInput(event.target.value);
  }

  function handleFeedbackSubmit() {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/DonateurFeedback`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        AccountId: gebruikerID,
        feedbackText: gebruikerFeedbackInput
      })
    })
    .then(data => data)
  }



  return (
    <div className='DonateursPortaal'>
      <h1>Donateursportaal</h1>
      <p>Als donor kunt u ons helpen onze missie voort te zetten om kunst en cultuur te brengen naar onze gemeenschap. Uw bijdrage helpt ons om artistieke programma's te ondersteunen, onze theaterfaciliteiten te onderhouden en onze deuren open te houden voor toekomstige generaties.</p>
      <div>hoeveel doneerd door gebruiker</div>
      <div className='lijn1'></div>
      <EarlyAccessReservations />
      <div className='lijn1'></div>
      <h3>Preview komende theather seizoen</h3>
      <img className='programmaKomendeSeizoen' src="./images/programmaKomendeSeizoen.PNG" alt="" />
      <Form>
        <Form.Control className='InputFeedbackBox'  minLength ="3" maxLength ="100" onChange={handleGebruikerFeedbackInput} type="email" placeholder="Feedback op het programma" />
        <Button className='plaatsFeedbackButton' onClick={handleFeedbackSubmit} variant="primary">Plaats feedback</Button>
      </Form>
      <div className='lijn1'></div>
      <h3>Feedback van andere donateurs.</h3>
      <OntvangenFeedback />
    </div>
  )
}

