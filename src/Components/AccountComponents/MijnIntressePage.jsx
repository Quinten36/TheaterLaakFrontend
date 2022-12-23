import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import IntresseAanpassen from './IntresseAanpassen';
import TopPartExtraInstellingen from './TopPartExtraInstellingen';
export default function MijnIntressePage() {
    const IntressesGebruiker = ["Cabaret", "Dans", "Klassiek", "Musical"];
    
    const titel = "Mijn Intresses"
    const imgURL = " "


  return (
    <div>
        <TopPartExtraInstellingen  titel = {titel} imgURL = {imgURL} />
        <IntresseAanpassen intresses={IntressesGebruiker} />
    </div>
  )
}
