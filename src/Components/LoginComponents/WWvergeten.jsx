import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import gegevens from './../../../package.json';

export default function WWvergeten() {
    const [state, setState] = useState("");
    const [error, setError] = useState({
        Error: {
            errorMessage: "",
            errorStatus: false,
        }
    })
    function handleGebruikerInput(event) {
        setState(event.target.value);
    }

    async function handleSubmit() {
      //TODO: werkt deze logica nog
        const response = await fetch(`http://${gegevens.ipadress}:${gegevens.port}/api/Login/${state.Username.usernameInput}/${state.Password.PasswordInput}`, {
            method: 'Get',
        })

        if (response.ok) {
            console.log("succes")

        }
        if (!response.ok) {
            const error = JSON.parse(await response.text());

        }
    }



    return (
        <div className="WWvergetenContainer">
            <h1>Theater Laak</h1>
            <h2>Wachtwoord opnieuw instellen</h2>
            <Form.Control className="WWopniewInstellenInput" type="email" onChange={handleGebruikerInput} placeholder="Gebruikersnaam/Emailadres" />
            <Button className="SubmitButtonWW" onClick={handleSubmit} variant="primary">Submit</Button>
            <div className="WWvergetenText"> Om uw wachtwoord opnieuw in te stellen , voer uw naam of email adres in het text vlak hierboven.
                Een email wordt zo snel mogelijk naar u verstuurd met verdere instructies</div>
        </div>
    )
}
