import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react'
import { Nav } from 'react-bootstrap';
export default function EarlyAccessReservations() {
  const [showsEarlyAccess, setShowsEarlyAccess] = useState()
  
  async function fetchShows() {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/Show`, {
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
    <div className='Kaartcontainer'>
      {showsEarlyAccess && showsEarlyAccess.slice(0, 3).map((item, index) => (
        <Card className='kaartearlyaccess' key={index}>
          <Card.Img variant="top" src={item.program.image} />
          <Card.Body>
            <Card.Title>{item.program.title}</Card.Title>
            <Card.Text>Kaarten vanaf €{item.firstClassPrice.toFixed(2)} * Rolstoel accesible/language </Card.Text>
            <Card.Text>{item.program.description}</Card.Text>
            <Nav.Link href={'/show/' + item.program.id}><Button variant="primary">Info & Kaarten</Button></Nav.Link>
          </Card.Body>
        </Card>
      ))}
    </div>

  )
}