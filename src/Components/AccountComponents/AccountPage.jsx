import React from 'react'
import './AccountPagestyles.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/Css/bootstrap.min.css';

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
                <div > <img className="IconAP" src=".\images\IntresseIcon.svg" alt="Knop voor mijn intresses aan te passen" /> Mijn intresses</div>
                <div > <img className="IconAP" src=".\images\ticket 1.svg" alt="Knop voor tickets te bekijken of door te sturen of downloaden" /> Mijn Reserveringen</div>
                <div > <img className="IconAP" src=".\images\Settings Icon.svg" alt="Knop om de extra settings te bekijken" /> Extra instellingen</div>
            </div>                
        </div>
    )
}
