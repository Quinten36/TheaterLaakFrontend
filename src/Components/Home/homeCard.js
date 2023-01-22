import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {forEach} from "react-bootstrap/ElementChildren";
import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';

export default function ProgrammingCard(props) {
  let [program, setProgram] = useState(null);
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/program/${props.showObject.programId}`)
      .then(resp => resp.json())
      .then((data) => {setProgram(data)})
  }, [])

  if(program === undefined || program === null) return;

  return (
    <Card style={{ width: '18rem', alignItems:'Center' }}>
      <Card.Img variant="top" src={program.image} />
      <Card.Body>
        <Card.Title>{program != null && program.title}</Card.Title>
        <Card.Text className='homeCardBold'>Kaarten vanaf €{props.showObject.thirdClassPrice.toFixed(2)} * Rolstoel accesible/language </Card.Text>
        
        <Card.Text>{program != null && program.description}</Card.Text>
        {/* <Card.Text>       {props.artiesten.map((item, index) => {
          if (index === props.artiesten.length - 1) {
            return <span key={index}>{item}</span>;
          } else {
            return <span key={index}>{item}, </span>;
          }
        })} </Card.Text> */}
        <Nav.Link href={'/show/'+program.id}><Button variant="primary">Info & Kaarten</Button></Nav.Link>
      </Card.Body>
    </Card>
  )
}