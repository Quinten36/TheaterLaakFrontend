import React from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import EarlyAccessReservations from './EarlyAccessReservations';
import './DonteursPortaalStyles.css'
export default function DonateursPortaal() {
  return (
    <div className='DonateursPortaal'>
        <h1>Donateursportaal</h1>
        <p>Als donor kunt u ons helpen onze missie voort te zetten om kunst en cultuur te brengen naar onze gemeenschap. Uw bijdrage helpt ons om artistieke programma's te ondersteunen, onze theaterfaciliteiten te onderhouden en onze deuren open te houden voor toekomstige generaties.</p>
        <div>hoeveel doneerd door gebruiker</div>
        <div className='lijn1'></div>
        <EarlyAccessReservations />
        <div className='lijn1'></div>
        <h3>Preview komende theather seizoen</h3>
        <div className='subtitelPreview'>Programma komende seizoen FOTO maybe</div>
        <Form>
        <Form.Control className='InputFeedbackBox'  type="email" placeholder="Feedback op het programma" />
        <Button className='plaatsFeedbackButton'variant="primary">Plaats feedback</Button>
        </Form>
    </div>
  )
}
