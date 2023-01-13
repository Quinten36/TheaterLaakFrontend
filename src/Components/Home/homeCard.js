import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {forEach} from "react-bootstrap/ElementChildren";
import React, { useState, useEffect } from 'react';
import gegevens from './../../../package.json';

export default function ProgrammingCard(props) {
  let [program, setProgram] = useState(null);
  
  useEffect(() => {
    console.log(props)
    fetch(`http://${gegevens.ipadress}:${gegevens.port}/api/program/${props.showObject.programId}`)
      .then(resp => resp.json())
      .then((data) => {console.log(data); setProgram(data)})
  }, [])

  return (
    <Card style={{ width: '18rem', alignItems:'Center' }}>
      <Card.Img variant="top" src="/aladdin.jpg" />
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
        <Button variant="primary">Info & Kaarten</Button>
      </Card.Body>
    </Card>
  )
}