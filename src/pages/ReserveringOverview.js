import './../css/reserveringOverview.scss';
import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';

function Show(props) {
    // do state stuff
    let [startDate, setStartDate] = useState(null);
    let [endDate, setEndDate] = useState(null);

    //get currect date and the date a week later
    var someDate = new Date();
    var numberOfDaysToAdd = 7;
    startDate = new Date(someDate).toISOString().split("T")[0];
    var dateWeekLater = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    endDate = new Date(dateWeekLater).toISOString().split("T")[0];

    function updateOverview() {
        console.log('Called this')
    }

  /*** Basic fetch method *************************************/
  //fetch show data
  // useEffect(() => {
  //   fetch('http://127.0.0.1:5086/api/show/'+showId)
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
                <input type='date' name='ROStart' defaultValue={startDate} className='ROSelectDate'/> <span> </span>
                tot <input type='date' name='ROEnd' defaultValue={endDate}/>
                <button className='ROSelectionUpdateBtn' onClick={updateOverview}>Update</button>
            </p>
            <div className='ROLegenda'>
                <span>
                    Zaalnummer
                </span>
                <span>
                    Datum
                </span>
                <span>
                    Betaald?
                </span>
            </div>
        </section>
        <section className='ROFlexHolder'>
            {/*deze meerdere malen repeaten*/}
            <div className='ROReserveringItem'>
                <div className='ROHallNumberHolder'>
                    <span className='ROHallNumber'>1</span>{/*hall nummer*/}
                </div>
                <div>
                    <span>03/01/2023 16:00</span> tot <span>03/01/2023 18:00</span>{/*van tot datum en tijd*/}
                </div>
                <span className='ROPaid'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                    <br/>Paid
                </span>{/*hij heeft betaald*/}
                {/* <span className='ROPaid RONotPaid'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>                    <br/>Unpaid
                </span>hij heeft niet betaald */}
            </div>
        </section>
    </main>
  );
}

export default Show;