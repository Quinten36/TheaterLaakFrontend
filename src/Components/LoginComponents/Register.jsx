import React from 'react'
import Button from 'react-bootstrap/Button';
import {useState} from 'react'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function () {
    const [isChecked, setIsChecked] = useState(false);
    const [registratieGegevens , setregistratieGegevens] = useState([]);

    const handleChange = (event) => {
    setIsChecked(event.target.checked);
    console.log(!isChecked)
  };

  return (
    <div className ="RegisterContainer">
        <h1>Theater Laak</h1>
        <h2>Registratie</h2>
        <Form.Control className="InputRegistratie" type="email" placeholder="Gebruikersnaam" />
        <Form.Control className="InputRegistratie" type="password" placeholder="Password" />
        <Form.Control className="InputRegistratie" type="email" placeholder="Email adres" />
        <div className="AkkoordCheckBox">
        <label >
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        Ik ga akkoord met de <div><a href="#">privacy voorwaarden</a></div>
        </label>
        </div>
        <Button className = "RegistratieCompleetButton" variant="success">Registreren</Button>
    </div>
  )
}
