import React from 'react'

export default function TopPartExtraInstellingen(props) {
  return (
    <div>
        <img id = "bannerIconExtraInstellingen"  src = {props.imgURL} alt = " " ></img>
        <img id ="backbutton" src = " "  alt =" knop om terug te gaan naar het vorige scherm"></img>
        <div className = "titelExtraAccountPages"> {props.titel}</div>
        <div id= 'LijnExtraPaginas'></div>
    </div>
  )
}
