import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {forEach} from "react-bootstrap/ElementChildren";
export default function ProgrammingCard(props) {
    return (
        <Card style={{ width: '18rem', alignItems:'Center', margin:'10px' }}>
            <Card.Img variant="top" src={ props.image } />
            <Card.Body>
                <Card.Title>{ props.title }</Card.Title>
                <Card.Text> { props.genre } | { props.startDatum } - { props.eindDatum } </Card.Text>
                <Card.Text>       {props.artiesten.map((item, index) => {
                    if (index === props.artiesten.length - 1) {
                        return <span key={index}>{item}</span>;
                    } else {
                        return <span key={index}>{item}, </span>;
                    }
                })} </Card.Text>
                <Button variant="primary">Info & Kaarten</Button>
            </Card.Body>
        </Card>
    )
}