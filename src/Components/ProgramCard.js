import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ProgramCard(props) {
  console.log(props)
    return (
        <Card style={{ width: '18rem', alignItems:'Center', margin:'10px' }}>
            <Card.Img variant="top" src={ props.image } />
            <Card.Body>
                <Card.Title>{ props.title }</Card.Title>
                <Card.Text> { props.genre[0].name } | { props.startDatum } - { props.eindDatum } </Card.Text>
                <Card.Text>       {props.artiesten.map((item, index) => (
                    // if (index === props.artiesten.length - 1) {
                    //     <span key={index}>{item}</span>;
                    // } else {
                        <span key={index}>{item}, </span>
                    // }z
                ))
                } 
                </Card.Text>
                <Button variant="primary">Info & Kaarten</Button>
            </Card.Body>
        </Card>
    )
}