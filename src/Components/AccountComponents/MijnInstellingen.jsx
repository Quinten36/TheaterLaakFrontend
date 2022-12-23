import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import TopPartExtraInstellingen from './TopPartExtraInstellingen';
export default function MijnInstellingen() {
    
    const titel = "Extra Instellingen"
    const imgURL = " "


  return (
    <div>
        <TopPartExtraInstellingen  titel = {titel} imgURL = {imgURL} />
        <Button id = "NieuwsBriefOpzeggenButton"type="button" variant= "primary" >Uitschrijven nieuwsbrief</Button>
        <div id= "AccVerwijderenKop">Account verwijderen</div>
        <div id = "NieuwsbriefOpzeggenText" >Gebruik deze optie om uw zelf uit te schrijven voor het ontvangen van een nieuwsbrief</div>
        <Button id = "AccOpzeggenButton"type="button" variant="danger">Opzeggen Account</Button>
        <div id= "AccVerwijderenKop">Account verwijderen</div>
        <div id = "AccountverwijderenText"> Pas op! Deze knop verwijdert uw account zonder mogelijkheid om hem terug te krijgen</div>
    </div>
  )
}
