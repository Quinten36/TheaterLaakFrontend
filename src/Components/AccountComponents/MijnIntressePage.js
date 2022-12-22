import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import IntresseAanpassen from './IntresseAanpassen';
export default function MijnIntressePage() {
    const IntressesGebruiker = ["Cabaret", "Dans", "Klassiek", "Musical"];



  return (
    <div>
        <img id = "bannerIconExtraInstellingen"  src = "" ></img>
        <img id ="backbutton" src = " "  alt =" knop om terug te gaan naar het vorige scherm"></img>
        <div className = "titelExtraAccountPages"> Mijn Intresses</div>
        <div id= 'LijnExtraPaginas'></div>
        <IntresseAanpassen intresses={IntressesGebruiker} />
        
    </div>
  )
}
