import React from 'react'
import './AccountPageStyles.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AccountPage() {
    return (
        <div>
            <div id="AccountPageTitle">Mijn Account</div>
            <Form.Control id="GebruikersNaanmInvoer" type="email" placeholder="Gebruikersnaam" />
            <Form.Control id="PasswordInvoer" type="password" placeholder="Password" />
            <Form.Control id="EmailAdresInvoer" type="email" placeholder="EmailAdres" />
            <Button id="UpdateButtonAP" variant="primary">Update</Button>
            <div id="lijn"></div>
            <div id="extraSettings">
                <img className="IconAP" src=".\images\IntresseIcon.svg" alt="Knop voor mijn intresses aan te passen" />
                <img className="IconAP" src=".\images\ticket 1.svg" alt="Knop voor tickets te bekijken of door te sturen of downloaden" />
                <img className="IconAP" src=".\images\18 Settings Icon.svg" alt="Knop om de extra settings te bekijken" />
            </div>
            <div id="IconTextIntresse">Mijn intresses</div>
            <div id="IconTextReserveringen">Mijn Reserveringen</div>
            <div id="IconTextEI">Extra instellingen</div>
        </div>
    )
}
