import React from 'react';
import "./TicketSellStyle.css"

export default function LegendaTicketSales() {
  return (
    <div className="LegendaContainer">
      <div className="left">
        <div className="LegendaitemsLinks" > <div className="BeschikbaarIcon"> </div> Beschikbaar </div>

        <div className="LegendaitemsLinks"> <div className="bezetIcon"> </div> Bezet </div>

        <div className="LegendaitemsLinks" > <div className="GeselecteerdIcon"> </div>Geselecteerd </div>
      </div>
      <div className="right">

        <div className="LegendaitemsRechts">1e rang <div className="eerste"> </div></div>
        <div className="LegendaitemsRechts">2e rang <div className=" tweede"> </div></div>

        <div className="LegendaitemsRechts" >3e rang <div className="derde"> </div></div>
      </div>
    </div>
  )
}
