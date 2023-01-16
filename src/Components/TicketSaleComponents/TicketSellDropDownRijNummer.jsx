import React from 'react';
import "./TicketSellStyle.scss"
const TicketSellDropDownRijNummer = (props) => {
  const options = [];
  
  //CHECK de CSS
  
  for (let i = 1; i <= props.aantal; i++) {
    options.push(<option className = "dropdownrij" key={i} value={i}>{i}</option>);
  }

  return (
    <select className = "DropdownRijNummer" id='DropdownRijNummer'>
      {options}
    </select>
  );
};

export default TicketSellDropDownRijNummer;