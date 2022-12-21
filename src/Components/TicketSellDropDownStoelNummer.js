import React from 'react';
import "../TicketSellStyle.css"
const  TicketSell_DropDownStoelNummer = (props) => {
  const options = [];
  
  //CHECK de CSS
  
  for (let i = 1; i <= props.aantal; i++) {
    options.push(<option className = "dropdownrij" key={i} value={i}>{i}</option>);
  }

  return (
    <select id = "DropdownStoelNummer">
      {options}
    </select>
  );
};

export default  TicketSell_DropDownStoelNummer;