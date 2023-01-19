import './Css/App.scss';
import HomeSliderCard from './Components/Home/homeSliderCard';
import HomeArticle from './Components/Home/homeArticle';
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import HomeCard from './Components/Home/homeCard';
import React, { useState, useEffect } from 'react';

// todo: fixen dat er shows opgehaald worden. en dan limit tot een x aantal. en dan weergeven

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

function App() {
  let [shows, setShows] = useState(null);
  let [program, setProgram] = useState(null);

  if (shows == null) {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/show/limit/3`)
    .then(resp => resp.json())
    .then((data) => {console.log(data[0]); setShows(data)})
  }

  useEffect(() => {
    if (shows!=null) {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/program/${shows[0].programId}`)
        .then(resp => resp.json())
        .then((data) => {console.log(data); setProgram(data)})
    }
  }, [shows])

  if(program === null) return;
  return (
    <main>
      <figure className='homeShowBanner'>
          <Image src='/pexels.jpg' alt='Plaatje' fluid/>
          <figcaption className='homeBannerCaption'>
            {program != null && program.title} <br/>
            <Nav.Link href={'/show/'+program.id}><Button variant="primary" className='callToActionHome'>More info</Button></Nav.Link>
          </figcaption>
      </figure>
      <Carousel className='homeSlider'>
        {/* map door de 3 eerstvolgende shows en laat ze zien */}
        {shows != null &&
          shows.map((item, index) => (
            <Carousel.Item key={index}>
              {/* geeft het show object mee en haal de program data in de card op */}
              <HomeCard showObject={item}/>
            </Carousel.Item>
          ))
        }
      </Carousel>
      <section className='homeArticleBanner'>
        <HomeArticle img='/aladdin.jpg' title='Aladdin stopt' description='lorem lorem lorem loremloremlorem lorem lorem lorem lorem lorem lorem lorem'/>
        <HomeArticle img='/aladdin.jpg' title='Soldaat van Oranje gaat door' description='lorem lorem lorem loremloremlorem lorem lorem lorem lorem lorem lorem lorem'/>
      </section>
    </main>
  );
}

export default App;
