import React from 'react'
import TopPartExtraInstellingen from './TopPartExtraInstellingen'
export default function MijnReserveringen() {
    const titel = "Mijn Reserveringen"
    const imgURL = " "
    return (
    <div>
    <TopPartExtraInstellingen  titel = {titel} imgURL = {imgURL} />
    <div id = "LineMijnReserveringen"></div>
    <img id="downloadTicketPDFIcon"  src =" "></img>
    <div id= "downloadTicketPDFText">Download pdf</div>
    <img id="doorsturenTicketIcon"  src =" "></img>
    <div id= "doorsturenTicketText">Doorsturen</div>
    </div>
  )
}
