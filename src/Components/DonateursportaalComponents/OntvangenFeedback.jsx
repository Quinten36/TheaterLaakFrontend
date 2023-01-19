import React from 'react'
import { useState, useEffect } from 'react';

export default function OntvangenFeedback() {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/DonateurFeedback`)
            .then(resp => resp.json())
            .then(data => setFeedback(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            {feedback.map((item, index) => (
                <div key={index} className='feedbackCard'>
                    <p>{item.feedbackText}</p>
                </div>
            ))}
        </div>
    )

}
