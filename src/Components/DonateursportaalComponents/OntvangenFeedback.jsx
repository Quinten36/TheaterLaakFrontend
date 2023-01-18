import React from 'react'
import { useState, useEffect } from 'react';

export default function OntvangenFeedback() {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5086/api/DonateurFeedback')
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
