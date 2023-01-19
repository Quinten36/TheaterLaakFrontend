import React from 'react'
import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { GetJWTToken } from './../../JWT/JWT';
export default function OntvangenFeedback() {
    const [feedback, setFeedback] = useState([]);
    const [gebruikerFeedbackInput, setGebruikerFeedbackInput] = useState("");
    const gebruikerID = GetJWTToken().Id;
    const [newComment, setNewComment] = useState(false)

    useEffect(() => {

        fetch(`${process.env.REACT_APP_BACKEND_URL}/DonateurFeedback`)
            .then(resp => resp.json())
            .then(data => setFeedback(data))
            .catch(error => console.log(error))
            setGebruikerFeedbackInput("")
            setNewComment(false)
    }, [newComment])

    function handleGebruikerFeedbackInput(event) {
        setGebruikerFeedbackInput(event.target.value);
    }

    function handleFeedbackSubmit() {
        fetch('http://localhost:5086/api/DonateurFeedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                AccountId: gebruikerID,
                feedbackText: gebruikerFeedbackInput
            })
        })
            .then(data => data).then(setNewComment(true))
    }

    return (
        <div>
            <Form>
                <Form.Control className='InputFeedbackBox' minLength="3" maxLength="100" onChange={handleGebruikerFeedbackInput} value ={gebruikerFeedbackInput}type="email" placeholder="Feedback op het programma" />
                <Button className='plaatsFeedbackButton' onClick={handleFeedbackSubmit} variant="primary">Plaats feedback</Button>
            </Form>
            <h3>Feedback van andere donateurs.</h3>
            <div>
                {feedback.map((item, index) => (
                    <div key={index} className='feedbackCard'>
                        <p>{item.feedbackText}</p>
                    </div>
                ))}
            </div>
        </div>
    )

}
