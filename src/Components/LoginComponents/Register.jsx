import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Captcha from './Captcha.jsx'

const initialState = {
  gebruikerInput: {
    value: '',
    error: '',
    gebruikerInputFOUT: false,
  },
  passwordInput: {
    value: '',
    error: '',
    passwordInputFOUT: false,
  },
  emailInput: {
    value: '',
    error: '',
    emailInputFOUT: false,
  },
  checkBoxInput: {
    checked: false,
    error: "U moet akkoord gaan met de privacy voorwaarden en de checkbox aanvinken om door te kunnen",
    checkBoxInputFOUT: false
  }
};

function validatePassword(state, password) {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{7,32}$/
  if (passwordRegex.test(password) && state.gebruikerInput.value !== password) {
    return false;
  }
  return true;
}

export default function Register() {
  const [state, setState] = useState(initialState);
  // prevState wordt gebruikt om de state direect aan te passen in plaats van te wachten tot de volgende update hierdoor voorkom je dat de werkelijke text gelijk blijft met de ingevoerde waarde.
  
  
  
  function handleChangeGebruikerInput(event) {
    if (event.target.value.length < state.gebruikerInput.value.length) {
      setState(prevState => {
        return {
          ...prevState,
          gebruikerInput: { ...prevState.gebruikerInput, error: "", gebruikerInputFOUT: false, value: event.target.value }
        }
      });
    } else {
      setState(prevState => {
        return {
          ...prevState,
          gebruikerInput: { ...prevState.gebruikerInput, value: event.target.value }
        }
      });
    }
  }


  function handleChangePasswordInput(event) {
    if (event.target.value.length < state.passwordInput.value.length) {
      setState(prevState => {
        return {
          ...prevState,
          passwordInput: { ...prevState.passwordInput, error: "", passwordInputFOUT: false, value: event.target.value }
        };
      });
    } else {
      if (validatePassword(state, event.target.value)) {
        setState(prevState => {
          return {
            ...prevState,
            passwordInput: { ...prevState.passwordInput, error: "Uw wachtwoord moet minimaal 7 karakters zijn minimaal 1 speciaalteken 1 cijfer en 1 hoofdletter bevatten", value: event.target.value, passwordInputFOUT: true }
          };
        });
      } else {
        setState(prevState => {
          return {
            ...prevState,
            passwordInput: { ...prevState.passwordInput, value: event.target.value, passwordInputFOUT: false }
          };
        });
      }
    }
  }



  function handleChangeEmailInput(event) {

    if (!event.target.value.includes('@')) {
      setState(prevState => {
        return {
          ...prevState,
          emailInput: { ...prevState.emailInput, error: "Uw emailadres moet een @ bevatten", value: event.target.value, emailInputFOUT: true }
        }
      });
    } else {
      setState(prevState => {
        return {
          ...prevState,
          emailInput: { ...prevState.emailInput, error: "", emailInputFOUT: false, value: event.target.value }
        }
      });
    }
  }

  function handleChangeCheckBoxInput(event) {
    setState(prevState => {
      return {
          ...prevState,
          checkBoxInput: {...prevState.checkBoxInput, checked: event.target.checked }
      }
  });
  }



  //Doet een request aan de server om te kijken of de ingevoerde gegevens voldoen aan bepaalde eisen. statuscode 409 als het niet klopt.
  async function sendGebruikerDetailsToBackend() {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: state.gebruikerInput.value,
        password: state.passwordInput.value,
        email: state.emailInput.value,
      })
    };
    const response = await fetch('https://localhost:7098/api/Registratie', requestOptions);
    if (!response.ok) {
      const error = JSON.parse(await response.text());
      setErrorMessageOnScreen(error.message)
    }
  }

  function setErrorMessageOnScreen(error) {
    console.log(error);
    if (error === "De gebruikersnaam bestaat al verandere deze naar een nieuwe.") {
      setState(prevState => {
        return {
          ...prevState,
          gebruikerInput: { ...prevState.gebruikerInput, error : error, gebruikerInputFOUT: true }
        };
      });
    }

    if (error === "Het wachtwoord komt te vaak voor verander uw wachtwoord en gebruik geen bestaande woorden." || error === "Het wachtwoord heeft een herhalend patroon verander dit naar een veiliger wachtwoord" || error === "Het wachtwoord heeft een herhalend patroon verander dit naar een veiliger wachtwoord" ) {

      setState(prevState => ({
        ...prevState,
        passwordInput: { ...prevState.passwordInput, error: error, passwordInputFOUT: true }
      }));
    }

    if (error === "Dit email adres bestaat al verandere deze naar een nieuwe." ) {
     
      setState(prevState => ({
        ...prevState,
        emailInput: { ...prevState.emailInput, error: error, emailInputFOUT: true }
      }));
    }
  }


  //functie die kijkt of er geen errors zijn in de input van de gebruiker client-side
  function InputCheck() {
    return !state.gebruikerInput.gebruikerInputFOUT && !state.passwordInput.passwordInputFOUT && !state.emailInput.emailInputFOUT
  }


  function handleSubmitForm() {
    if(!state.checkBoxInput.checked){

      setState(prevState => ({
        ...prevState,
        checkBoxInput: {
          ...prevState.checkBoxInput,
          checkBoxInputFOUT: true
        }
      }));
      console.log(state.checkBoxInput.checked)
      console.log(state.checkBoxInput.error)
      console.log(state.checkBoxInput.checkBoxInputFOUT)
      return;
    }
    if (InputCheck()) {
      sendGebruikerDetailsToBackend();
    }
  }

  return (
    <div className="RegisterContainer">
      <h1>Theater Laak</h1>
      <h2>Registratie</h2>
      <Form.Group>
        <Form.Control className="InputRegistratie" onChange={handleChangeGebruikerInput} type="email" placeholder="Gebruikersnaam" maxLength={32} isInvalid={state.gebruikerInput.gebruikerInputFOUT} />
        <Form.Control.Feedback className="FeedbackOpInput" type="invalid">{state.gebruikerInput.error}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Control className="InputRegistratie" onChange={handleChangePasswordInput} type="password" placeholder="Password" maxLength={32} isInvalid={state.passwordInput.passwordInputFOUT} />
        <Form.Control.Feedback className="FeedbackOpInput" type="invalid">{state.passwordInput.error}</Form.Control.Feedback>
      </Form.Group> 
      <Form.Group>
        <Form.Control className="InputRegistratie" onChange={handleChangeEmailInput} type="email" placeholder="Email adres" maxLength={32} isInvalid={state.emailInput.emailInputFOUT} />
        <Form.Control.Feedback className="FeedbackOpInput" type="invalid">{state.emailInput.error}</Form.Control.Feedback>
      </Form.Group>  
      <div className="AkkoordCheckBox">
        <label>
          <input type="checkbox" onChange={handleChangeCheckBoxInput} />Ik ga akkoord met de <div><a href="#">privacy voorwaarden</a></div>
        </label>
      </div>
      
      <Button onClick={handleSubmitForm} className="RegistratieCompleetButton" variant="success">Registreren</Button>
    </div>
  )
}


// TODO
/* Registratie
o Niet in de lijst an gekraakte wachtwoorden
(https://haveibeenpwned.com/Passwords, je kunt deze database gewoon
downloaden)
Gebruikers email check voor domains



verificatie email + verifieren 
tests 

password hashen


FIX CHECKBOX ERROR D:
*/