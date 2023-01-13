import './../../Css/style.css';
import './../../Css/Header.scss';


function App(props) {
  return (
    <>
        <section>
            <figure className='nav-bar-preview-image'>
                <img src={props.imgSrc} alt={props.imgAlt}/>
            </figure>
            <h4 className='nav-bar-preview-titel'>{props.titel}</h4>
        </section>
    </>
  );
}

export default App;