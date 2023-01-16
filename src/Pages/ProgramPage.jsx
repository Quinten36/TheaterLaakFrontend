import ProgramBanner from '../Components/Program/ProgramBanner';
import './../Css/Program.scss';
import { useLocation } from 'react-router';
import React, { useState, useEffect } from 'react';
import ProgramInfoBanner from '../Components/Program/ProgramInfoBanner';
import { getProgram } from '../Api/Program';
import ProgramShowDates from '../Components/Program/ProgramShowDates';

export default function ProgramPage() {
  //States
  const [program, setProgram] = useState([])

  //Get the program id from url params
  const location = useLocation();
  var parameterProgramId = location.pathname.split('/')[2];
  
  //do api call to fetch the program information. This use effect is called when parameterProgramId is updated
  useEffect(() =>{ 
    //Create async fetchData method because use effect needs to return a method
    async function fetchData() {
      const programResponse = await getProgram(parameterProgramId);
      setProgram(programResponse);
      console.debug("Program Response:")
      console.debug(programResponse)
    }
    fetchData();
  },[parameterProgramId]);

  return (
    <main>
      <ProgramBanner image={program.image} alt='Plaatje'/>
      <div>
        <ProgramInfoBanner program={program}/>
        {/* <section className='programDetails'>
          <hr className='programDetailsDivider'/>
            Duration: <span>{hours} uur {minutes} min</span>
          <hr className='programDetailsDivider'/>
          Zaal <span>{data != null && data.hallId}</span> <span>Vlierbloesem</span>
          <hr className='programDetailsDivider'/>
        </section> */}
        <article className='programDescriptionArticle'>
          {program.description == null ? "Er is geen beschrijving beschikbaar" : program.description}
        </article>
        <ProgramShowDates shows={program.shows}/>
        {/* <section className='programPriceBanner'>
          <h3>Prijzen</h3>
          <p>De volgende prijzen zijn de minimale prijs voor deze show. De dag kan invloed hebben op de prijs.</p>
          <section className='programPriceHolder'>
            check of the prijs er is, zoja, laat hem zien
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
        </section> */}
        {/* <section className='programRecommendationBanner'>
          <Nav.Link className='showAllProgramsBtn' href="/programmering">Alle voorstellingen</Nav.Link>
        </section> */}
      </div>
    </main>
  );
}
