import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const initialState = {
  gebruikerInput: '',
  passwordInput: '',
  emailInput: '',
  checkBoxInput: false,
};

const FouteInvoerVeldenERRORS = {
  gebruikerInputFOUT : false,
  passwordInputFOUT : false,
  emailebruikerInputFOUT : false,
  checkBoxInputFOUT : false
};

function validatePassword(state, password) {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/
 
  if (passwordRegex.test(password) && state.gebruikerInput !== password) {
    return false;
  }

  return true;
}

export default function Register() {


  const [state, setState] = useState(initialState);
  const [fouteInvoer , setFouteInvoer] = useState()

  function handleChangeGebruikerInput(event) {
    setState({ ...state, gebruikerInput: event.target.value });
  }

  function handleChangePasswordInput(event) {
    setState({ ...state, passwordInput: event.target.value });
  }

  function handleChangeEmailInput(event) {
    setState({ ...state, emailInput: event.target.value });
  }

  function handleChangeCheckBoxInput(event) {
    setState({ ...state, checkBoxInput: event.target.checked });
  }

  async function handleSubmitForm() {
     
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
      <Button onClick={handleSubmitForm} className="RegistratieCompleetButton" variant="success">Registreren</Button>

    </div>
  )
}
