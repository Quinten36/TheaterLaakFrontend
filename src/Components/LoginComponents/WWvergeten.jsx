import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function WWvergeten() {
    const [state, setState] = useState("");
    const navigate = useNavigate();
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
      
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/Login/wwvergeten/${state}`, {
            method: 'Put',
        })

        if (response.ok) {
            navigate("/Login")
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
