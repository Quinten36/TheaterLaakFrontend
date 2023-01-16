import React from 'react';
import "./TicketSellStyle.scss"
const  TicketSell_DropDownStoelNummer = (props) => {
  const options = [];
  
  //CHECK de CSS
  
  for (let i = 1; i <= props.aantal; i++) {
    options.push(<option  key={i} value={i}>{i}</option>);
  }

  return (
    <select className = "DropdownStoelNummer" id='DropdownStoelNummer'>
      {options}
    </select>
  );
};

export default  TicketSell_DropDownStoelNummer;