
import Accordion from 'react-bootstrap/Accordion';
import './../css/show.scss';

function Show() {
  return (
    <main>
      <figure className='showBanner'>
        <img src='/pexels.jpg' alt='Plaatje' className='showBannerImage'/>
      </figure>
      <div>
        <section>
          <h3 className='showGenre'>Genre</h3>
          <h2 className='showTitel'>Aladdin</h2>
          <div className='showArtistHolder'>
            <span>Booooooooob</span>,<span>Peeeeeetuuuur</span>,<span>Guanz</span>
          </div>
        </section>
        <section className='showDetails'>
          <hr className='showDetailsDivider'/>
            Duration: <span>1 uur 35 min</span>
          <hr className='showDetailsDivider'/>
          Zaal <span>4</span> <span>Vlierbloesem</span>
          <hr className='showDetailsDivider'/>
        </section>
        <article className='showDescriptionArticle'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,se of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          <br/><br/>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, nd more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </article>
        <section className='showSpeelBanner'>
          <h3>Speel data</h3>
          <p>Selecteer hier de gewenste datum voor de show</p>
          <Accordion defaultActiveKey={['0', '1']} alwaysOpen className='speelData-accordion'>
            <Accordion.Item eventKey="0"> 
              <Accordion.Header><h2 className='speelDataHead'>December 2022<hr/></h2></Accordion.Header>
              
                {/* test */}
                <Accordion.Body>
                  <div className='speelDataItem'>
                    <span className='speelDataDate'>Vr 19 dec 20:20</span>
                    <span className='speelDataNietBeschikbaar'>Niet beschikbaar</span>
                  </div>
                  <div className='speelDataItem'>
                    <span className='speelDataDate'>Za 20 dec 19:35</span>
                    <button className='speelDataBestel'>Bestel</button>
                  </div>
                  <div className='speelDataItem'>
                    <span className='speelDataDate'>Zo 21 dec 23:11</span>
                    <button className='speelDataBestel'>Bestel</button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1"> 
              <Accordion.Header><h2 className='speelDataHead'>Januari 2023<hr/></h2></Accordion.Header>
              
                {/* test */}
                <Accordion.Body>
                  <div className='speelDataItem'>
                    <span className='speelDataDate'>Vr 05 jan 20:20</span>
                    <button className='speelDataBestel'>Bestel</button>
                  </div>
                  <div className='speelDataItem'>
                    <span className='speelDataDate'>Za 11 jan 19:35</span>
                    <span className='speelDataNietBeschikbaar'>Niet beschikbaar</span>
                  </div>
                  <div className='speelDataItem'>
                    <span className='speelDataDate'>Zo 19 dec 23:11</span>
                    <button className='speelDataBestel'>Bestel</button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
          </Accordion>
        </section>
        <section>
        
        </section>
        <section>
        
        </section>
      </div>
    </main>
  );
}

export default Show;