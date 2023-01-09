import React from 'react'
import Button from 'react-bootstrap/Button';
import { useReducer, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Captcha from './Captcha.jsx'

const initialState = {
  gebruikerInput: "",
  passwordInput: "",
  emailInput: "",
  checkBoxInput: {}
};



function reducer(state, action) {
  switch (action.type) {
    case 'gebruikerInput':
      return { ...state, gebruikerInput: { value: action.value } };
    case 'passwordInput':
      if (validatePassword(state, action.value)) {
        console.log("ww slecht");
        return { ...state, passwordInput: { value: action.value }};
      } else {
        return { ...state, passwordInput: { value: action.value } };
      }
    case 'emailInput':
      return { ...state, emailInput: { value: action.value } };
    case 'checkBoxInput':
      return { ...state, checkBoxInput: { value: action.value } };
    default:
      throw new Error();
  }
}


function validatePassword(state, password) {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/

  if (passwordRegex.test(password) && state.gebruikerInput !== password) {
    return false;
  }

  return true;
}

export default function () {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChangeGebruikerInput(event) {
    dispatch({ type: 'gebruikerInput', value: event.target.value });

  }

  function handleChangePasswordInput(event) {
    dispatch({ type: 'passwordInput', value: event.target.value });

  }

  function handleChangeEmailInput(event) {
    dispatch({ type: 'emailInput', value: event.target.value });

  }

  function handleChangeCheckBoxInput(event) {
    dispatch({ type: 'checkBoxInput', value: event.target.checked });
  }

  /*useEffect(() => {
    console.log(state);
  }, [state]); */


  function handleSubmitForm() {

    if (!state.gebruikerInput || !state.passwordInput || !state.emailInput) {
      console.error('One or more required fields are missing or empty');
      return;
    }
    
    fetch('https://localhost:7098/api/Registratie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Account: {
          username: state.gebruikerInput,
          password: state.passwordInput,
          email: state.emailInput,
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
    }    
  
  
   
  return (
    <div className="RegisterContainer">
      <h1>Theater Laak</h1>
      <h2>Registratie</h2>
      <Form.Control className="InputRegistratie" onChange={handleChangeGebruikerInput} type="email" placeholder="Gebruikersnaam" maxLength={32} />
      <Form.Control className="InputRegistratie" onChange={handleChangePasswordInput} type="password" placeholder="Password" maxLength={32} />
      <Form.Control className="InputRegistratie" onChange={handleChangeEmailInput} type="email" placeholder="Email adres" maxLength={32} />
      <div className="AkkoordCheckBox">
        <label>
          <input type="checkbox" onChange={handleChangeCheckBoxInput} />
          Ik ga akkoord met de <div><a href="#">privacy voorwaarden</a></div>
        </label>
      </div>
      <Button onClick={handleSubmitForm} className="RegistratieCompleetButton" variant="success">Registreren</Button>
      <Captcha />
    </div>
  )
}



