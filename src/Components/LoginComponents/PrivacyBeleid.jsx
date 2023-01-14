import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom';
export default function PrivacyBeleid() {
    const navigate = useNavigate();
    return (
        <div className="PrivacyBeleidContainer">
            <h1>Theater Laak</h1>
            <h2>Privacy beleid</h2>
            <div className="privacybeleidTextBox">
                Onze website, TheaterLaak, respecteert de privacy van alle gebruikers. Ons privacybeleid is opgesteld om u te informeren over hoe wij informatie verzamelen, gebruiken en beschermen.

                Informatie die wij verzamelen

                Wij verzamelen informatie van gebruikers wanneer zij kaarten kopen via onze website. De informatie die wij verzamelen, omvat:

                Naam
                E-mailadres
                Telefoonnummer
                Factuur- en betalingsgegevens
                Hoe wij informatie gebruiken

                De informatie die wij verzamelen, wordt gebruikt voor de volgende doeleinden:

                Om uw kaarttransactie te verwerken
                Om contact met u op te nemen in geval van problemen met uw bestelling
                Om u op de hoogte te houden van aankomende shows en aanbiedingen
                Informatiebescherming

                Wij nemen de bescherming van uw informatie serieus en nemen geschikte maatregelen om misbruik, verlies, onbevoegde toegang, onthulling en wijziging tegen te gaan.

                Wijzigingen in ons privacybeleid

                Wij behouden ons het recht voor om wijzigingen aan te brengen in ons privacybeleid op elk moment. Wij adviseren u om dit privacybeleid regelmatig te raadplegen voor eventuele wijzigingen.

                Contact opnemen

                Als u vragen heeft over ons privacybeleid, neem dan gerust contact met ons op via [contactgegevens].

                Dit is een voorbeeld, je moet het aanpassen aan de wetgeving van jouw land en de specifieke eisen van jouw bedrijf.
            </div>

            <Button className="GelezenAkkoordButton" onClick={() => navigate(-1)} variant="success">Gelezen & Akkoord</Button>

        </div>
    )
}
