import React from 'react'
import { useState, useEffect } from 'react'
export default function MijnReserveringen(props) {
    const [reserveringen, setReserveringen] = useState([])

    useEffect(() => {
        getReservervationsById()
    }, [])

    function getReservervationsById() {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/getReservationsByID/${props.userId}`, {
            method: "GET",
            headers: { "content-type": "application/json" }
        }).then((response) => {
             response.json();
        }).then((data) => {
            setReserveringen(data);
        })}

      
     

    return (
        <div>
       
        </div>
    )
}
