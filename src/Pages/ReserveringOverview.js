import './../Css/reserveringOverview.scss';
import React, { useState, useEffect } from 'react';
import ReservationOverviewItem from './../Components/ReservationOverview/reservationOverviewItem';
import gegevens from './../../package.json';
import CheckAdmin from '../Util/CheckRole';

function Show(props) {
  CheckAdmin()

  // do state stuff
  let [startDate, setStartDate] = useState(null);
  let [endDate, setEndDate] = useState(null);
  let [reservationOverview, setReservationOverview] = useState(null);
  var listItems;

  //get currect date and the date a week later
  var someDate = new Date();
  var numberOfDaysToAdd = 7;
  startDate = new Date(someDate).toISOString().split("T")[0];
  var dateWeekLater = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
  endDate = new Date(dateWeekLater).toISOString().split("T")[0];

  function updateOverview() {
    // get and set the new values of the inputs
    startDate = document.getElementById('ROStart').value;
    endDate = document.getElementById('ROEnd').value;

    //check if the end date is before start date
    if (endDate >= startDate) {
      //format the date to format the api accept
      var formatDate = startDate.split('-');
      var reformatStart = formatDate[1] +'-'+ formatDate[2] +'-'+formatDate[0];
      formatDate = endDate.split('-');
      var reformatEnd = formatDate[1] +'-'+ formatDate[2] +'-'+formatDate[0];

      //do api request
      fetch(`${process.env.REACT_APP_BACKEND_URL}/reservation/filtered?start=`+reformatStart+'&end='+reformatEnd)
        .then(resp => resp.json())
        .then((data) => {setReservationOverview(data); })
    } else {
      alert('End date can\'t be before start date')
    }
      

    
  }

  //do the standard search
  useEffect(() => {
    updateOverview();
  }, [])
  

  /*** Basic fetch method *************************************/
  //fetch show data
  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_BACKEND_URL}/show/`+showId)
  //    .then(resp => resp.json())
  //    .then((data) => setShow(data))
  //   }, [])

  return (
    <main>
      <section className='ROSelectionBanner'>
        {/* later meer filter opties toevoegen */}
        <p className='ROSelectionMenu'>
          {/* Gereserveerde zalen van <br/><span>02/01/2023</span> tot <span>08/02/2023</span> */}
          Gereserveerde zalen van <br/>
          <input type='date' name='ROStart' id='ROStart' defaultValue={startDate} className='ROSelectDate'/> <span> </span>
          tot <input type='date' name='ROEnd' id='ROEnd' defaultValue={endDate} className='ROSelectDate'/>
          <button className='ROSelectionUpdateBtn' onClick={updateOverview}>Update</button>
        </p>
        <div className='ROLegenda'>
          <span>Zaalnummer</span>
          <span>Datum</span>
          <span>Betaald?</span>
        </div>
      </section>
      <section className='ROFlexHolder'>
        {/*deze meerdere malen repeaten*/}
        {reservationOverview == null || reservationOverview.length == 0 &&
          <p className='RONoResult'>Geen reserveringen in dit zoekresultaat</p>
        }
        {reservationOverview != null &&
          reservationOverview.map((item, index) => (
            <ReservationOverviewItem key={item.id} keyId={item.id} hallId={item.hallId} start={item.start} end={item.end} hasPaid={item.hasPaid} gereserveerdDoor={item.accountId}/>
            // <span key={item.id}>{artist.name}{index != reservationOverview.length-1 ? ', ' : ''}</span> 
          ))
        }
      </section>
    </main>
  );
}

export default Show;