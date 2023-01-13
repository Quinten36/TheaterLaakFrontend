
import './../../Css/show.scss';

function Show(props) {
  return (
    <figure className='showBanner'>
      <img src={props.image} alt={props.alt} className='showBannerImage'/>
    </figure>
  );
}

export default Show;