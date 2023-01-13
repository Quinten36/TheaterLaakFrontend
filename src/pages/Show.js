import Accordion from 'react-bootstrap/Accordion';
import ShowBanner from './../Components/Show/showBanner';
import ShowSpeelItem from './../Components/Show/showSpeelItem';
import './../Css/show.scss';
import { useLocation } from 'react-router';
import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import ShowInfoBanner from './../Components/Show/showInfoBanner';
import gegevens from './../../package.json';

function Show(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [program, setProgram] = useState([])
  const [prices, setPrices] = useState([])

  //Get showId from url params
  const location = useLocation();
  var parameter = location.pathname.split('/')[2];
  
  //do api call to fetch the show information
  useEffect(() => {
    fetch(`http://${gegevens.ipadress}:${gegevens.port}/api/show/`+parameter)
      .then(response => response.json())
      .then((usefulData) => {
        //do another fetch to retrieve the program information of the show
        fetch(`http://${gegevens.ipadress}:${gegevens.port}/api/program/`+usefulData.programId)
          .then(resp => resp.json())
          .then((data) => {setProgram(data)} )
        // setLoading(false);
        //Set the prices in a different state because the fetch will be done multiple times and so we dont need to dig in all the objects to check if the prices exists
        setPrices({'firstClassPrice':usefulData.firstClassPrice, 'secondClassPrice':usefulData.secondClassPrice, 'thirdClassPrice':usefulData.thirdClassPrice})
        setData(usefulData);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`)
      });
  }, []);

  //check of de data er is vanwege rerenders en fromat naar uur en min
  if (data != null){
    var timeTotal = Date.parse(data.end) - Date.parse(data.start);
    var minutes = Math.floor((timeTotal / (1000 * 60)) % 60),
    hours = Math.floor((timeTotal / (1000 * 60 * 60)) % 24);
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
      <ShowBanner image='/pexels.jpg' alt='Plaatje'/>
      <div>
        <ShowInfoBanner programId={program.id} groupId={program.groupId} title={program.title}/>
        <section className='showDetails'>
          <hr className='showDetailsDivider'/>
            Duration: <span>{hours} uur {minutes} min</span>
          <hr className='showDetailsDivider'/>
          Zaal <span>{data != null && data.hallId}</span> <span>Vlierbloesem</span>
          <hr className='showDetailsDivider'/>
        </section>
        <article className='showDescriptionArticle'>
          {program != null && program['description']}
        </article>
        <section className='showSpeelBanner'>
          <h3>Speel data</h3>
          <p>Selecteer hier de gewenste datum voor de show</p>
          <Accordion defaultActiveKey={['0', '1']} alwaysOpen className='speelData-accordion'>
            <Accordion.Item eventKey="0"> 
              <Accordion.Header><h2 className='speelDataHead'>December 2022<hr/></h2></Accordion.Header>
                <Accordion.Body>
                  <ShowSpeelItem speelDatum='Vr 19 dec 20:20' beschikbaar={false}/>
                  <ShowSpeelItem speelDatum='Za 20 dec 19:35' beschikbaar={true}/>
                  <ShowSpeelItem speelDatum='Zo 21 dec 23:11' beschikbaar={true}/>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1"> 
              <Accordion.Header><h2 className='speelDataHead'>Januari 2023<hr/></h2></Accordion.Header>
                <Accordion.Body>
                  <ShowSpeelItem speelDatum='Vr 05 jan 20:20' beschikbaar={true}/>
                  <ShowSpeelItem speelDatum='Za 11 jan 19:35' beschikbaar={false}/>
                  <ShowSpeelItem speelDatum='Zo 19 dec 23:11' beschikbaar={true}/>
                </Accordion.Body>
              </Accordion.Item>
          </Accordion>
        </section>
        <section className='showPriceBanner'>
          <h3>Prijzen</h3>
          <p>De volgende prijzen zijn de minimale prijs voor deze show. De dag kan invloed hebben op de prijs.</p>
          <section className='showPriceHolder'>
            {/* check of the prijs er is, zoja, laat hem zien */}
            {prices.firstClassPrice != null && 
            <div className='priceItem'>
              <span className='priceRang'>1e rang</span><span className='price'>€{prices.firstClassPrice.toFixed(2)}</span>
            </div>
            }
            {prices.secondClassPrice != null &&
            <div className='priceItem'>
              <span className='priceRang'>2e rang</span><span className='price'>€{prices.secondClassPrice.toFixed(2)}</span>
            </div>
            }
            {prices.thirdClassPrice != null &&
            <div className='priceItem'>
              <span className='priceRang'>3e rang</span><span className='price'>€{prices.thirdClassPrice.toFixed(2)}</span>
            </div>
            }
          </section>
        </section>
        <section className='showRecommodetionsBanner'>
          <Nav.Link className='showAllShowBtn' href="/programmering">Alle voorstellingen</Nav.Link>
        </section>
      </div>
    </main>
  );
}

export default Show;