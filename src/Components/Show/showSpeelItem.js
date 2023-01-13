import './../../Css/show.scss';

function Show(props) {
  return (
    <div className='speelDataItem'>
        <span className='speelDataDate'>{props.speelDatum}</span>
        {/* als het beschikbaar is laat hij bestel btn zien. anders de tekst dat het niet beschikbaar is */}
        {props.beschikbaar && 
            <button className='speelDataBestel'>Bestel</button>
        }
        {!props.beschikbaar && 
            <span className='speelDataNietBeschikbaar'>Niet beschikbaar</span>
        }
    </div>
  );
}

export default Show;