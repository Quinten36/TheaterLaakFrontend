import React from 'react'
import './AccountPageStyles.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AccountPage() {
    return (
        <div className="AccountPageContainer">
            <h2>Mijn Account</h2>
            <Form.Control className="AccountPageInput" type="email" placeholder="Gebruikersnaam" />
            <Form.Control className="AccountPageInput" type="password" placeholder="Password" />
            <Form.Control className="AccountPageInput" type="email" placeholder="EmailAdres" />
            <Button className="ButtonUpdate" variant="primary">Update</Button>
            <div className="lijn"></div>
            <div className="extraSettings">
                <img className="IconAP" src=".\images\IntresseIcon.svg" alt="Knop voor mijn intresses aan te passen" />
                <img className="IconAP" src=".\images\ticket 1.svg" alt="Knop voor tickets te bekijken of door te sturen of downloaden" />
                <img className="IconAP" src=".\images\Settings Icon.svg" alt="Knop om de extra settings te bekijken" />
            </div>
            <div className="IconTextAccountPage">
            <div >Mijn intresses</div>
            <div >Mijn Reserveringen</div>
            <div >Extra instellingen</div>
            </div>
        </div>
    )
}
