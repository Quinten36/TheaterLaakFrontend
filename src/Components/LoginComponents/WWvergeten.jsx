import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function WWvergeten() {
    return (
        <div className="WWvergetenContainer">
            <h1>Theater Laak</h1>
            <h2>Wachtwoord opnieuw instellen</h2>
            <Form.Control className="WWopniewInstellenInput" type="email" placeholder="Gebruikersnaam/Emailadres" />
            <Button className="SubmitButtonWW" variant="primary">Submit</Button>
            <div className="WWvergetenText"> Om uw wachtwoord opnieuw in te stellen , voer uw naam of email adres in het text vlak hierboven.
                Een email wordt zo snel mogelijk naar u verstuurd met verdere instructies</div>
        </div>
    )
}
