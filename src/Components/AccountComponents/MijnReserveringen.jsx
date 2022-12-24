import React from 'react'
import TopPartExtraInstellingen from './TopPartExtraInstellingen'
export default function MijnReserveringen() {
    const titel = "Mijn Reserveringen"
    const imgURL = "./images/ticket 1.svg"
    return (
    <div>
    <TopPartExtraInstellingen  titel = {titel} imgURL = {imgURL} />
    
    <div className="ReserveringenContainer"> HIER KOMEN RESERVERINGEN</div>
    <div className = "LineMijnReserveringen"></div>
    <div className="lijnReserveringen"></div>
    <div className="ExtraButtonsReserveringen">
  <div className="buttonContainer">
    <img className="downloadTicketPDFIcon" src="./images/Download Icon.svg" alt=" Knop om de geselecteerde Reservering te downloaden als pdf file" />
    <div className="downloadTicketPDFText">Download pdf</div>
    <img className="doorsturenTicketIcon" src="./images/Send Icon.svg"alt=" Knop om de reservering naar een andere gebruiker te sturen" />
    <div className="doorsturenTicketText">Doorsturen</div>
  </div>

    </div>
    </div>
  )
}
