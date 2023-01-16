import { Accordion } from "react-bootstrap";
import './../../Css/Program.scss';
import ShowPlayItem from "./ShowPlayItem";

export default function ProgramShowDatesAccordionItem({eventkey, monthYearItem}) {
    const showRows = [];

    //Create a showRow item for every show
    monthYearItem.shows.forEach((show, index) => {
        showRows.push(<ShowPlayItem 
            key={show.id +"N"+index} 
            show={show} 
            available={checkAvailable(show)
        }/>)
    })

    //TODO: create this checkAvailable function
    function checkAvailable(show) {
        return Math.random() < 0.5;
    }

    return <Accordion.Item eventKey={eventkey}>
        <Accordion.Header>
            <h2 className='showDatesAccordionHead'>{monthYearItem.monthYear.month} {monthYearItem.monthYear.year}</h2>
        </Accordion.Header>
        <Accordion.Body>
            {showRows}
        </Accordion.Body>
    </Accordion.Item>
}