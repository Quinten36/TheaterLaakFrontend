import React from 'react'

import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginStyles.css'
import FaInputhandle from './Components/FaInputhandle'
export default function TweeFaPage() {
  return (
    <div>
<h1>Theather Laak</h1> 
<h2>2 Factor Authentication</h2>
<FaInputhandle />

<Button id = "SubmitButton2FA" variant="primary">Submit</Button>
<div id="text2FaPage">Voer de automatisch gegenereerde code in. Deze is  naar uw Email adres is verzonden.</div>
<div id = "lijn2fa"></div>
<div id="EmailOpnieuwLink">
    <a href="#">Email opnieuw verzenden</a>
</div>



</div>
        
   
  )
}
