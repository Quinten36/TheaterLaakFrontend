import './../../Css/App.scss';

function homeArticle(props) {
  return (
    <article className='homeArticle'>
        <figure className='homeArticleFigure'>
          <img src={props.img} alt='Plaatje' className='homeArticleImg'/>
        </figure>
        <div className='homeArticleInfo'>
          <h4 className='homeArticleTitle'>{props.title}</h4>
          <p className='homeArticleDescription'>
            {props.description}
          </p>
        </div>
    </article>
  );
}

export default homeArticle;
