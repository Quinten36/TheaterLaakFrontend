import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react'
import { Nav } from 'react-bootstrap';
export default function EarlyAccessReservations() {
  const [showsEarlyAccess, setShowsEarlyAccess] = useState()

  async function fetchShows() {
    try {
      const response = await fetch('http://localhost:5086/api/Show', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      setShowsEarlyAccess(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {

    fetchShows();

  }, []);
  return (
    <div className='showsEarlyAccessKaart'>
      {showsEarlyAccess && showsEarlyAccess.slice(0, 3).map((item, index) => (
        <Card key={index}>
          <Card.Img variant="top" src={item.program.image} />
          <Card.Body>
            <Card.Title>{item.program.title}</Card.Title>
            <Card.Text>Kaarten vanaf €{item.firstClassPrice} * Rolstoel accesible/language </Card.Text>
            <Card.Text>{item.program.description}</Card.Text>
            <Nav.Link href={'/show/' + item.program.id}><Button variant="primary">Info & Kaarten</Button></Nav.Link>
          </Card.Body>
        </Card>
      ))}
    </div>

  )
}