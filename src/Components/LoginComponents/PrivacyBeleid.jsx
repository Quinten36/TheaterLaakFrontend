import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PrivacyBeleid() {
    return (
        <div className = "PrivacyBeleidContainer">
            <h1>Theater Laak</h1>
            <h2>Privacy beleid</h2>
            <div className="privacybeleidTextBox">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            </div>
            
                <Button className="GelezenAkkoordButton" variant="success">Gelezen & Akkoord</Button>
            
        </div>
    )
}
