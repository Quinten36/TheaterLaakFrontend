import React from 'react'
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import './adminpage_styles.css'
import Button from 'react-bootstrap/Button';

export default function AddProgrammaComponent() {

    const [groups, setGroups] = useState([]);
    const [inputGroups, setInputGroups] = useState("");

    const [titelInput, setTitelInput] = useState("");

    const [descriptionInput, setDescriptionInput] = useState("");
    const [fotoInput, setFotoInput] = useState("");


    const [beginDateEarlyAccess, setbeginDateEarlyAccess] = useState("");
    const [beginEarlyAccessTime, setBeginEarlyAccessTime] = useState("");

    const [beginDateSale, setbeginDateSale] = useState("");
    const [beginTimeSale, setbeginTimeSale] = useState("");

    const [beginDateShow, setbeginDateShow] = useState("");
    const [beginTimeShow, setbeginTimeShow] = useState("");

    const [endDateShow, setEndDateShow] = useState("");
    const [endTimeShow, setEndTimeShow] = useState("");


    useEffect(() => {
        getGroups();
    }, [])

    function getGroups() {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/Group`, {
            method: "GET",
            headers: { "content-type": "application/json" }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setGroups(data)
        })
    }

    function changeDate(date) {
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            separator: "-",
        })
    }

    
    function handleUploadProgramma(){
        fetch(`${process.env.REACT_APP_BACKEND_URL}/Program`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
            title : titelInput,
            description: descriptionInput,
            image : fotoInput,
            beginExclusiveSale : changeDate(beginDateEarlyAccess) + " " + beginEarlyAccessTime,
            beginSale : changeDate(beginDateSale) + " " + beginTimeSale,
            beginDate : changeDate(beginDateShow) + " " + beginTimeShow,
            endDate : changeDate(endDateShow) + " " + endTimeShow,
            groupId : inputGroups
            })
        }).then((response) => {
            return response.json();
        }) 

        

    }
    function handleChangeGroup(value) {
        setInputGroups(value)
    }

    return (
        <div className='addProgrammaContainer'>
            <h3>title</h3>
            <Form.Control placeholder='Titel voorstelling' onChange={(e) => setTitelInput(e.target.value)} type="email"></Form.Control>

            <h3>description</h3>
            <Form.Control as="textarea" onChange={(e) => setDescriptionInput(e.target.value)} placeholder='beschrijving voorstelling' type="email"></Form.Control>

            <h3>Link foto</h3>
            <Form.Control placeholder='Link foto voorstelling' onChange={(e) => setFotoInput(e.target.value)} type="email"></Form.Control>

            <h3>Begindatum early access sale</h3>
            <DatePicker selected={beginDateEarlyAccess} onChange={(date) => setbeginDateEarlyAccess(date)} dateFormat="yyyy/MM/dd" />
            <div>Start tijd early access sale</div>
            <Form.Control onChange={(e) => setBeginEarlyAccessTime(e.target.value)} placeholder='start tijd early acces sale bijv. 12:00' type="email"></Form.Control>

            <h3>Begin datum verkoop</h3>
            <DatePicker selected={beginDateSale} onChange={(date) => setbeginDateSale(date)} dateFormat="yyyy/MM/dd" />
            <div>Start tijd verkoop</div>
            <Form.Control  onChange={(e) => setbeginTimeSale(e.target.value)} placeholder='12:00' type="email"></Form.Control>

            <h3>Begin datum start show</h3>
            <DatePicker selected={beginDateShow} onChange={(date) => setbeginDateShow(date)} dateFormat="yyyy/MM/dd" />
            <div>Start tijd verkoop</div>
            <Form.Control onChange={(e) => setbeginTimeShow(e.target.value)} placeholder='12:00' type="email"></Form.Control>

            <h3>eind datum</h3>
            <DatePicker selected={endDateShow} onChange={(date) => setEndDateShow(date)} dateFormat="yyyy/MM/dd" />
            <div>eind tijd verkoop</div>
            <Form.Control onChange={(e) => setEndTimeShow(e.target.value)} placeholder='eind tijd bijv. 12:00' type="email"></Form.Control>

            <h3>groep</h3>
            <select onChange={(e) => handleChangeGroup(e.target.value)}>
                {groups.map((group) => <option key={group.id} value={group.id}>{group.name}</option>)}
            </select>
            <Button variant="success" onClick={handleUploadProgramma}>Upload Programma</Button>
        </div>
    )
}
