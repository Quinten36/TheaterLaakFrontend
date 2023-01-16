import { Nav } from 'react-bootstrap';
import './../../Css/Program.scss';


function ShowPlayItem({show, available}) {
  if(show == undefined || available == undefined) return;

  //Format date string
  const showDate = new Date(show.start);
  const weekString = showDate.toLocaleDateString("nl-NL", { weekday: "short", day: "numeric", month: "short" }); // di 7 jan.
  const timeString = showDate.toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" }); //  09:50
  const dateString = weekString + " " + timeString // di 7 jan. 09:50

  function GetButton() {
    return available ? 
            <Nav.Link href={'/ticket/'+show.id}>
              <button className='showPlayItemAvailable'>Bestel</button>
            </Nav.Link>:
            <span className='showPlayItemNotAvailable'>Niet beschikbaar</span>
  }

  return (
    <div className='showPlayItem'>
        <span className='showPlayItemDate'>
          {dateString}
        </span>
        {/* als het beschikbaar is laat hij bestel btn zien. anders de tekst dat het niet beschikbaar is */}
        {GetButton()}
    </div>
  );
}

export default ShowPlayItem;