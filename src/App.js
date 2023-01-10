import './css/App.scss';
import HomeSliderCard from './components/home/homeSliderCard';
import HomeArticle from './components/home/homeArticle';
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import HomeCard from './components/home/homeCard';
import React, { useState, useEffect } from 'react';
import gegevens from './../package.json';

// todo: fixen dat er shows opgehaald worden. en dan limit tot een x aantal. en dan weergeven

function App() {
  let [shows, setShows] = useState(null);
  let [program, setProgram] = useState(null);

  if (shows == null) {
    fetch(`http://${gegevens.ipadress}:${gegevens.port}/api/show/limit/3`)
    .then(resp => resp.json())
    .then((data) => {console.log(data[0]); setShows(data)})
  }

  useEffect(() => {
    if (shows!=null) {
      fetch(`http://${gegevens.ipadress}:${gegevens.port}/api/program/${shows[0].programId}`)
        .then(resp => resp.json())
        .then((data) => {console.log(data); setProgram(data)})
    }
  }, [shows])

  

  return (
    <main>
      <figure className='homeShowBanner'>
        <Image src='/pexels.jpg' alt='Plaatje' fluid/>
        <figcaption className='homeBannerCaption'>
          {program != null && program.title} <br/>
          <Button variant="primary" className='callToActionHome'>More info</Button>
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
