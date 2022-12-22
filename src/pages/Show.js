import './../css/show.scss';
import Accordion from 'react-bootstrap/Accordion';

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
          <Accordion defaultActiveKey={['0', '1']} alwaysOpen className='nav-bar-accordion'>
            <Accordion.Item eventKey="0"> 
              <Accordion.Header><h2 className='nav-bar-preview-head'>Voorstellingen</h2></Accordion.Header>
                {/* test */}
                <Accordion.Body>
                  <NavBarPreviewCard titel='Aladin' imgSrc='/Aladdin.jpg' imgAlt='Plaatje'/>
                  <NavBarPreviewCard titel='Aladin' imgSrc='/Aladdin.jpg' imgAlt='Plaatje'/>
                  <NavBarPreviewCard titel='Aladin' imgSrc='/Aladdin.jpg' imgAlt='Plaatje'/>
                  <a href='/programmering' className='nav-bar-preview-link'>Alle voorstellingen <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">{/*<!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}<path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></a>
                </Accordion.Body>
                <hr className='DivideLine'/>
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