import React from 'react'
import './AccountPageStyles.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { GetJWTToken } from './../../JWT/JWT';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MijnReserveringen from './MijnReserveringen';
export default function AccountPage() {

    const [user, setUser] = useState(GetJWTToken().Id);
    const [userDATA, setUserDATA] = useState([])
    const navigate = useNavigate();
    
    function loginCheck() {

        if (user === null) {
            navigate("/Login")
        }
    }
    useEffect(() => {
        fetchUserData();
    }, [])

    useEffect(() => {
       
        loginCheck();
    }, [user])

    function handleUpdate() {

    }
    function fetchUserData() {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/Account/${user}`, {
            method: "GET",
            headers: { "content-type": "application/json" }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setUserDATA(data);
        })

    }


    return (
        <div className="AccountPageContainer">
            <h2>Mijn Account</h2>
            <Form.Control className="AccountPageInput" type="email" placeholder={userDATA.userName} />
            <Form.Control className="AccountPageInput" type="password" placeholder="Password" />
            <Form.Control className="AccountPageInput" type="email" placeholder={userDATA.email} />
            <Button className="ButtonUpdate" onClick={handleUpdate} variant="primary">Update</Button>
            <div className="lijn"></div>
            <div className='titleMijnReserveringen'><img className="IconAP" src=".\images\ticket 1.svg" alt="Knop voor tickets te bekijken of door te sturen of downloaden" /> Mijn Reserveringen</div>
            <MijnReserveringen userId={user} />
        </div> 
    )
}
