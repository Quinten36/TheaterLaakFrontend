import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginStyles.css'

export default function WWvergeten() {
    return (
        <div>
            <h1>Theater Laak</h1>
            <h2>Wachtwoord opnieuw instellen</h2>
            <Form.Control id="WWopniewInstellenInput" type="email" placeholder="Gebruikersnaam/Emailadres" />
            <Button id="SubmitButtonWW" variant="success">Submit</Button>
            <div id="WWvergetenText"> Om uw wachtwoord opnieuw in te stellen , voer uw naam of email adres in het text vlak hierboven.
                Een email wordt zo snel mogelijk naar u verstuurd met verdere instructies</div>
        </div>
    )
}
