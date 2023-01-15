import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import RememberMeKnop from './RememberMeKnop';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function Login() {
  const Navigate = useNavigate();
  
  const initialState = { 
    Username : { 
      usernameInput: localStorage.getItem('username') || '',
      usernameInputFOUT : false,
      userNameError : ""
    },
    Password : {
      PasswordInput : localStorage.getItem('password') || '', 
      PasswordInputFOUT: false,
      passwordError:""
    }
  }
  const [state , setState] = useState(initialState);
  const navigate = useNavigate();



  function handleUsernameInput(event){
    setState(prevState => {
      return {
        ...prevState,
        Username: { ...prevState.Username, usernameInput : event.target.value  }
      }
    });
    
  }

  function handlePasswordInput(event){
    setState(prevState => {
      return {
        ...prevState,
        Password: { ...prevState.Password, PasswordInput : event.target.value  }
      }
    });
    
  }

  async function handleLoginButton(){
      const response = await fetch(`https://localhost:7098/api/Login/api/Login/${state.Username.usernameInput}/${state.Password.PasswordInput}`,{
        method: 'Get',
       })
       
       if(response.ok){
        console.log("succes")
        navigate("/mijnaccount")
       }
       if (!response.ok) {
        const error = JSON.parse(await response.text());
        handleErrorGebruikerInput(error.message);
       }  
    }
  
    function handleErrorGebruikerInput(error){
      setState(prevState => {
       
        return {
          ...prevState,
          Username:{...prevState.Username, userNameError : error , usernameInputFOUT : true },
          Password: { ...prevState.Password, passwordError : error , PasswordInputFOUT : true}
        }
      });
    }

  
  return (
    <div className = "LoginContainer">
    <h1>Theather Laak</h1> 
    <Form>
            <Form.Control className = "LoginPageInputField" isInvalid={state.Username.usernameInputFOUT} onChange={handleUsernameInput} value={state.Username.usernameInput} type="email" placeholder="Gebruikersnaam" />
            <Form.Control className = "LoginPageInputField" isInvalid={state.Password.PasswordInputFOUT} onChange={handlePasswordInput} value={state.Password.PasswordInput}type="password" placeholder="Password" />
            <Form.Control.Feedback className="FeedbackOpInput" type="invalid">{state.Username.userNameError}</Form.Control.Feedback>
    </Form>
            <RememberMeKnop  {...state}/>
            <Button className="ButtonLoginPage" onClick={handleLoginButton} variant="primary">Log in</Button>
            <Button className="ButtonLoginPage Registreren"  onClick={() => Navigate("/Registreer")} variant="success">Registreren</Button>
            <div className ="linkWachtwoordvergeten"><a href="http://localhost:3000/wachtwoordVergeten">Wachtwoord vergeten?</a></div>
            
    </div>
  )
}
