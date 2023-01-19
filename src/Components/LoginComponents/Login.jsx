import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import RememberMeKnop from './RememberMeKnop';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {GetJWTExp} from './../../JWT/JWT';
import {getCookie, setCookieDate} from './../../Cookie/Cookie';
import Nav from 'react-bootstrap/Nav';


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
    console.log(JSON.stringify({"Username": "", "Email": state.Username.usernameInput, "Password":state.Password.PasswordInput}))
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/Login`,{
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({"Username": "", "Email": state.Username.usernameInput, "Password":state.Password.PasswordInput})
       })
       
       if(response.ok){
        response.json().then((data) => {/*console.log(data)*/; setCookieDate('userJWT', data.token, GetJWTExp(data.token))});
        console.log("succes")
        navigate("/account")
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
    <div className = "LoginContainer" >
    <h1>Theather Laak</h1> 
    <Form >
            <Form.Control className = "LoginPageInputField" isInvalid={state.Username.usernameInputFOUT} onChange={handleUsernameInput} value={state.Username.usernameInput} type="email" placeholder="Gebruikersnaam" />
            <Form.Control className = "LoginPageInputField" isInvalid={state.Password.PasswordInputFOUT} onChange={handlePasswordInput} value={state.Password.PasswordInput}type="password" placeholder="Password" />
            <Form.Control.Feedback className="FeedbackOpInput" type="invalid">{state.Username.userNameError}</Form.Control.Feedback>
    </Form>
            <RememberMeKnop  {...state}/>
            <Button className="ButtonLoginPage" onClick={handleLoginButton} variant="primary">Log in</Button>
            <Button className="ButtonLoginPage Registreren"  onClick={() => Navigate("/Registreer")} variant="success">Registreren</Button>
            <div className ="linkWachtwoordvergeten"><Nav.Link href="/WachtwoordVergeten">Wachtwoord vergeten?</Nav.Link></div>
            
    </div>
  )
}
