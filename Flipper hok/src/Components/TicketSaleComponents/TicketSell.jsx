import React from 'react'
import "./TicketSellStyle.css"
import LegendaTicketSales from './LegendaTicketSales'
import TicketSellDropDownRijNummer from './TicketSellDropDownRijNummer'
import TicketSellDropDownStoelNummer from './TicketSellDropDownStoelNummer'
import Button from 'react-bootstrap/Button';

export default function TicketSell() {


  return (
    <div className=" TicketSellContainer">
      <h2>Show Naam</h2>
      <h4 className="datum">Ma 19-12-2022 21:50</h4>
      <div className="titleSeatpicker">Selecteer Plekken</div>
      <div className="plattegrond">Plattegrond</div>
      <div className="podium">Podium</div>
      <LegendaTicketSales />
      <div className="rijStoelButtonContainer">
      <div className="rijNummer"><div > Rij Nummer </div> <TicketSellDropDownRijNummer aantal={10} /> </div>
      <div><div> Stoel Nummer </div> <TicketSellDropDownStoelNummer aantal={10} /> </div>
      </div>
      <Button className="VoegToeAanTicketLijst" type="button" >+ Voeg toe</Button>
      <div className="lijnSeatPicker1"></div>

      <div className="TicketLijstFrame">
        <div >Stoel</div>
        <div >Rang</div>
        <div >Prijs</div>
      </div>
      <div className= "stoelenlijst"> HIER KOMEN stoelen</div>
      <div className="lijnSeatPicker2"></div>
      <div className="totaalprijsText">Totaalprijs : <div>€ 107,50</div></div>

      <Button className="inWinkelMandKnop" type="button" >+ In Winkelmand</Button>
    </div>
  )
}
