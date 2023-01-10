import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Captcha from './Captcha.jsx'

const initialState = {
  gebruikerInput: '',
  passwordInput: '',
  emailInput: '',
  checkBoxInput: false,
};

const FouteInvoerVeldenERRORS = {
  gebruikerInputFOUT: false,
  passwordInputFOUT: false,
  emailInputFOUT: false,
  checkBoxInputFOUT: false
};

//functie om te kijken of wachtwoord voldoet aan eisen min 1 hoofdlettter min 1 kleine letter 1 speciaal tegen minimaal 7 karakters max 32
function validatePassword(state, password) {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{7,32}$/
      // && gebrukersnaam == wachtwoord
  if (passwordRegex.test(password) && state.gebruikerInput !== password) {
    return false;
  }

  return true;
}

export default function Register() {
  const [state, setState] = useState(initialState);
  const [fouteInvoer, setFouteInvoer] = useState(FouteInvoerVeldenERRORS);

  function handleChangeGebruikerInput(event) {
    setState({ ...state, gebruikerInput: event.target.value });
  }

  function handleChangePasswordInput(event) {
    if(validatePassword(state , event.target.value)){
      setFouteInvoer({...fouteInvoer , passwordInputFOUT: true})
    }else{
      setFouteInvoer({...fouteInvoer , passwordInputFOUT: false})
      setState({ ...state, passwordInput: event.target.value });
    }
   
  }

  function handleChangeEmailInput(event) {
    setState({ ...state, emailInput: event.target.value });
  }

  function handleChangeCheckBoxInput(event) {
    setState({ ...state, checkBoxInput: event.target.checked });
  }



  //Doet een request aan de server om te kijken of de ingevoerde gegevens voldoen aan bepaalde eisen. statuscode 409 als het niet klopt.
  async function sendGebruikerDetailsToBackend(){
        const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: state.gebruikerInput,
        password: state.passwordInput,
        email: state.emailInput,
      })
    };

    try {
      const response = await fetch('https://localhost:7098/api/Registratie', requestOptions);
      if (response.status === 409) {
          //gebruiker bestaat al
          setFouteInvoer({...FouteInvoerVeldenERRORS , gebruikerInputFOUT: true})
        return;
      }
      if (!response.ok) {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  }


  //functie die kijkt of er geen errors zijn in de input van de gebruiker client-side
  function InputCheck(){
    return !fouteInvoer.gebruikerInputFOUT && !fouteInvoer.passwordInputFOUT && !fouteInvoer.emailInputFOUT
  }


  function handleSubmitForm() {
 
    if (!state.checkBoxInput) {
      setFouteInvoer({ ...fouteInvoer, checkBoxInputFOUT: true });
      return;
    }
      if(InputCheck){
        sendGebruikerDetailsToBackend();
      }
    }
    
  return (
    <div className="RegisterContainer">
      <h1>Theater Laak</h1>
      <h2>Registratie</h2>
      <Form.Control className="InputRegistratie" onChange={handleChangeGebruikerInput} type="email" placeholder="Gebruikersnaam" maxLength={32} isInvalid={fouteInvoer.gebruikerInputFOUT} />
      <Form.Control className="InputRegistratie" onChange={handleChangePasswordInput} type="password" placeholder="Password" maxLength={32} isInvalid={fouteInvoer.passwordInputFOUT}/>
      <Form.Control className="InputRegistratie" onChange={handleChangeEmailInput} type="email" placeholder="Email adres" maxLength={32} isInvalid={fouteInvoer.emailInputFOUT}/>
    
      <div className="AkkoordCheckBox">
        <label>
          <input type="checkbox" onChange={handleChangeCheckBoxInput} />Ik ga akkoord met de <div><a href="#">privacy voorwaarden</a></div>
        </label>
      </div>
      <Button onClick={handleSubmitForm} className="RegistratieCompleetButton" variant="success" >Registreren</Button>
    <Captcha />
    </div>
  )
}

/* Registratie
- Het mag niet mogelijk zijn om een te eenvoudig wachtwoord in te stellen.
o Minimaal 1 hoofdletter -
o Minimaal 1 kleine letter -
o Minimaal 1 speciaal karakter -
o Minimaal 7 karakters -
o Geen woorden (gebruik een woordenboek, je kunt dat gewoon downloaden)
o Niet gelijk aan de inlognaam -
o Geen herhalende patronen
o Niet in de top-10 lijst van veel voorkomende wachtwoorden (zoals
qwerty123!)
o Niet in de lijst van gekraakte wachtwoorden
(https://haveibeenpwned.com/Passwords, je kunt deze database gewoon
downloaden)
- Er moeten maatregelen genomen zijn om misbruik van de website (door
geautomatiseerde scripts bijvoorbeeld) te voorkomen
o CAPTCHA
o Deny list
o Het emailadres mag niet in een temporary-domain staan
*/