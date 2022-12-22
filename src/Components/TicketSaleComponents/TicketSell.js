import React from 'react'
import "./TicketSellStyle.css"
import LegendaTicketSales from './LegendaTicketSales'
import TicketSellDropDownRijNummer from './TicketSellDropDownRijNummer'
import TicketSellDropDownStoelNummer from './TicketSellDropDownStoelNummer'
import Button from 'react-bootstrap/Button';

export default function TicketSell() {

 
  return (
    <div>
      <div id="naamShow">Show Naam</div>
      <h2 id="datum">Ma 19-12-2022 21:50</h2>
      <div id="titleSeatpicker">Selecteer Plekken</div>
      <div id="podium">Podium</div>
      <div id = "plattegrond">Plattegrond</div>
      <LegendaTicketSales />
      <div id="rijNummerText"> Rij Nummer </div>
      <div id="stoelNummerText" > Stoel Nummer </div>
      <TicketSellDropDownRijNummer aantal={10} />
      <TicketSellDropDownStoelNummer aantal={10} />
      <Button id = "VoegToeAanTicketLijst" type="button" >+ Voeg toe</Button>

      <div id ="lijn"></div>
      <div id = "TicketLijstFrame">
      <div id = "ticketLijstStoel">Stoel</div>
      <div id = "ticketLijstRang">Rang</div>
      <div id = "ticketLijstPrijs">Prijs</div>
      </div>
      <div id = "lijn2"></div>
      <div id = "totaalprijsText">Totaalprijs : <div>€ 107,50</div></div>
    
      <Button id = "inWinkelMandKnop" type="button" >+ In Winkelmand</Button>
    </div>
  )
}
