import { json, useLocation } from 'react-router';
import React, { useState, useEffect } from 'react';
import "./TicketSellStyle.scss"
import LegendaTicketSales from './LegendaTicketSales'
import TicketSellDropDownRijNummer from './TicketSellDropDownRijNummer'
import TicketSellDropDownStoelNummer from './TicketSellDropDownStoelNummer'
import Button from 'react-bootstrap/Button';
import gegevens from './../../../package.json';
import {setCookie, getCookie} from './../../Cookie/Cookie'


export default function TicketSell() {
  const [show, setShow] = useState(null)
  const [seats, setSeats] = useState([])
  const [shoppingList, setShoppingList] = useState([])
  var maxRow = 0;
  var maxSeatNumber = 0;
  const [totalPrice, setTotalPrice] = useState(0);

  //Get showId from url params
  const location = useLocation();
  var parameter = location.pathname.split('/')[2];

  useEffect(() => {
    fetch(`http://${gegevens.ipadress}:${gegevens.port}/api/show/`+parameter)
      .then(resp => resp.json())
      .then((data2) => {
        
        fetch(`http://${gegevens.ipadress}:${gegevens.port}/api/seat/byHall/`+data2.hallId)
          .then(resp => resp.json())
          .then((data) => {setSeats(data); console.log(data); /*setProgram(data)*/} )
          setShow(data2);
        if (getCookie('shoppingList').length > 0) {
          setShoppingList(JSON.parse(getCookie('shoppingList')))          
        }
       
       
      })
      // .then((data2) => {setShow(data2); console.log(data2);/*setProgram(data)*/} )
  }, []);
  updateWinkelOverviewPrice();
  if (seats != null) {
    for (var seat in seats) {
      // console.log(seat)
      if (seats[seat].row > maxRow)
        maxRow = seats[seat].row;
      if (seats[seat].seatNumber > maxSeatNumber) 
        maxSeatNumber = seats[seat].seatNumber;
    }
  }

  function addToShoppingList() {
    
    var row = document.getElementById('DropdownRijNummer').value;
    var number = document.getElementById('DropdownStoelNummer').value;
    for (var seat in seats) {
      if (seats[seat].row == row && seats[seat].seatNumber == number) {
        if (shoppingList.find(car => car.item.row == row && car.item.seatNumber == number) == undefined) {
          if (seats[seat].seatClass == 1) {
            setShoppingList([...shoppingList, {item: seats[seat], price:show.firstClassPrice.toFixed(2)}])
            setTotalPrice((show.firstClassPrice+parseInt(totalPrice)).toFixed(2));
          }
          if (seats[seat].seatClass == 2) {
            setShoppingList([...shoppingList, {item: seats[seat], price:show.secondClassPrice.toFixed(2)}])
            setTotalPrice((show.secondClassPrice+parseInt(totalPrice)).toFixed(2));
          }
          if (seats[seat].seatClass == 3) {
            setShoppingList([...shoppingList, {item: seats[seat], price:show.thirdClassPrice.toFixed(2)}])
            setTotalPrice((show.thirdClassPrice+parseInt(totalPrice)).toFixed(2));
          }
        }
      }
    }
  }
  function addToShoppingCard() {
    if (shoppingList.length > 0) {
      setCookie('shoppingList', JSON.stringify(shoppingList), 30)
    }
  }

  function updateWinkelOverviewPrice() {
   if (totalPrice !== 0){
    return
   }
   let price = 0;
    if (shoppingList.length != 0) {
     for(let i = 0; i < setShoppingList.length; i++){
      price += parseFloat(shoppingList[i].price)
      }
      setTotalPrice(price)
    }
  }
  return (
    <div className=" TicketSellContainer">
      <h2>Show Naam</h2>
      <h4 className="datum">Ma 19-12-2022 21:50</h4>
      <div className="titleSeatpicker">Selecteer Plekken</div>
      <div className="plattegrond">
        {
          seats.map((seat, index) => <span key={index} className='ticketSeat'>{seat.row}/{seat.seatNumber}</span>)
        }
      </div>
      <div className="podium">Podium</div>
      <LegendaTicketSales />
      <div className="rijStoelButtonContainer">
      <div className="rijNummer"><div > Rij Nummer </div> <TicketSellDropDownRijNummer aantal={maxRow} /> </div>
      <div><div> Stoel Nummer </div> <TicketSellDropDownStoelNummer aantal={maxSeatNumber} /> </div>
      </div>
      <Button className="VoegToeAanTicketLijst" type="button" onClick={addToShoppingList}>+ Voeg toe</Button>
      <div className="lijnSeatPicker1"></div>

      <div className="TicketLijstFrame">
        <div >Stoel</div>
        <div >Rang</div>
        <div >Prijs</div>
      </div>
      <div className= "stoelenlijst"> 
      {shoppingList == [] && 'Voeg stoelen toe'}
      {shoppingList != [] && 
      // console.log(shoppingList)
        shoppingList.map((item, index) => (<div key={index} className='ticketShoppingList'><span className='ticketShoppingSpan'>{item.item.seatNumber}</span><span>{item.item.row}</span><span>€{item.price}</span></div>))
      }
      </div>
      <div className="lijnSeatPicker2"></div>
      <div className="totaalprijsText">Totaalprijs : <div>€{totalPrice}</div></div>

      <Button className="inWinkelMandKnop" type="button" onClick={addToShoppingCard}>+ In Winkelmand</Button>
    </div>
  )
}
