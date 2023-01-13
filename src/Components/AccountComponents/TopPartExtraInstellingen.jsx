import React from 'react'

export default function TopPartExtraInstellingen(props) {
  return (
    <div className ="TopPartExtraInstellingenContainer">

        <img className = "bannerIconExtraInstellingen"  src = {props.imgURL} alt = "Logo voor het mijn intresse scherm" ></img>
        <h1> {props.titel}</h1>
        <div className= 'LijnExtraPaginas'></div>
        
    </div>
  )
}
