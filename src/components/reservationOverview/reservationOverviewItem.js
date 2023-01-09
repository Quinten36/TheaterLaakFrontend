import './../../css/show.scss';
import React, { useState, useEffect } from 'react';
import gegevens from './../../../package.json';

function Show(props) {
  let [person, setPerson] = useState(null);
  fetch(`http://${gegevens.ipadress}:${gegevens.port}/api/account/name/`+props.gereserveerdDoor)
      .then(resp => resp.json())
      .then((data) => {console.log(data); setPerson(data.username)})
  // console.log(respons)

  return (
    <div className='ROReserveringItem' key={props.keyId}>
      <div className='ROHallNumberHolder'>
          <span className='ROHallNumber'>{props.hallId}</span>{/*hall nummer*/}
      </div>
      <div className='RODateHolder'>
          {/* only get the date and time and remove the milli seconds. Replace T with a space */}
          <span>{props.start.split('.')[0].replace('T', ' ')}</span> tot <span>{props.end.split('.')[0].replace('T', ' ')}</span>{/*van tot datum en tijd*/}
      </div>
      {/* if statement of hij betaald heeft of niet */}
      {props.hasPaid &&
        <span className='ROPaid'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        <br/>Paid
        </span>
      }
      {!props.hasPaid && 
        <span className='ROPaid RONotPaid'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>                    
          <br/>Unpaid
        </span>
      }
      {/* todo: later dit veranderen naar een clickable link */}
      <div className='ROGereserveerde'>Gereserveerd door: <span id='ROGereserveerdeName'>{person}</span></div>
    </div>
  );
}

export default Show;