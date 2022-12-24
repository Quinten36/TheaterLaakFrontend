import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import TopPartExtraInstellingen from './TopPartExtraInstellingen';
export default function MijnInstellingen() {
    
    const titel = "Extra Instellingen"
    const imgURL = "./images/Settings Icon.svg"


  return (
    <div className="ExtraInstellingenContainer">
        <TopPartExtraInstellingen  titel = {titel} imgURL = {imgURL} />
        <div className="NieuwsbriefUitschrijvenKop">Uitschrijven Nieuwsbrief</div>
        <div  >Gebruik deze optie om uw zelf uit te schrijven voor het ontvangen van een nieuwsbrief</div>
        <Button type="button" variant= "primary" >Uitschrijven nieuwsbrief</Button>
        <div className="AccVerwijderenKop">Account verwijderen</div>
        <div > Pas op! Deze knop verwijdert uw account zonder mogelijkheid om hem terug te krijgen!</div>
        <Button type="button" variant="danger">Opzeggen Account</Button>
    </div>
  )
}
