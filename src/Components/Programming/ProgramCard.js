import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {forEach} from "react-bootstrap/ElementChildren";
const ProgramCard = ({program}) => {
    const beginDate = new Date(program.beginDate);
    const endDate = new Date(program.endDate);

    return <Card style={{width: '18rem', alignItems: 'Center', margin: '10px'}}>
        <Card.Img variant="top" src={program.image}/>
        <Card.Body>
            <Card.Title>{program.title}</Card.Title>
            <Card.Text >
                <span>{program.genres.map(genre => genre.name).join(" | ")} </span><br/>
                <span> van: {beginDate.getDate()}-{beginDate.getMonth()}-{beginDate.getFullYear()} - tot: {endDate.getDate()}-{endDate.getMonth()}-{endDate.getFullYear()} </span>
                <span>{program.group.artists.slice(0, 2).map(artist => artist.name).join(", ")}</span>
            </Card.Text>
            <Button variant="primary">Info & Kaarten</Button>
        </Card.Body>
    </Card>
}

export default ProgramCard;

//TODO: CSS in aparte file