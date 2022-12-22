import './../css/show.scss';

function Show() {
  return (
    <main>
      <figure className='showBanner'>
        <img src='/pexels.jpg' alt='Plaatje' className='showBannerImage'/>
      </figure>
      <div>
        <section>

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
        <section>
        
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