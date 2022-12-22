import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginStyles.css'
import RememberMeKnop from './RememberMeKnop';
export default function Login() {
  return (
    <div>
    <h1>Theather Laak</h1> 
            <Form.Control id="GebruikersNaanmInvoer" type="email" placeholder="Gebruikersnaam" />
            <Form.Control id="PasswordInvoer" type="password" placeholder="Password" />
            <Button id = "LoginButton" variant="primary">Log in</Button>
            <Button id = "RegistreerButton" variant="success">Registreren</Button>
            <div id="linkWachtwoordvergeten"><a href="url">Wachtwoord vergeten?</a></div>
            <RememberMeKnop id = "RememberMeKnop" />
    </div>
  )
}
