import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginStyles.css'
export default function Login() {
  return (
    <div>
    <h1>Theather Laak</h1> 
        
            <Form.Control id="GebruikersNaanmInvoer" type="email" placeholder="Gebruikersnaam" />
            <Form.Control id="PasswordInvoer" type="password" placeholder="Password" />
            
    </div>
  )
}
