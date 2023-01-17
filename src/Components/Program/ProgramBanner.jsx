import './../../Css/Program.scss';

export default function ProgramBanner({image, alt}) {
  return (
    <figure className='programBanner'>
      <img src={image} alt={alt} className='programBannerImage'/>
    </figure>
  );
}
