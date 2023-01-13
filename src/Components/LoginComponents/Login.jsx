import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPageStyles.css'
import RememberMeKnop from './RememberMeKnop';
export default function Login() {
  return (
    <div className = "LoginContainer">
    <h1>Theather Laak</h1> 
            <Form.Control className = "LoginPageInputField" type="email" placeholder="Gebruikersnaam" />
            <Form.Control className = "LoginPageInputField"type="password" placeholder="Password" />
            <RememberMeKnop  />
            <Button className="ButtonLoginPage" variant="primary">Log in</Button>
            <Button className="ButtonLoginPage Registreren" variant="success">Registreren</Button>
            <div className ="linkWachtwoordvergeten"><a href="url">Wachtwoord vergeten?</a></div>
            
    </div>
  )
}
