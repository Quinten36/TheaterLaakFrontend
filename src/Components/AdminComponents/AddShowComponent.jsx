import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';
import './adminpage_styles.css'
export default function AddShowComponent() {
    const [startDate, setStartDate] = useState("");
    const [startTime, setStartTime] = useState("")

    const [endDate, setEndDate] = useState("");
    const [endTime, setEndTime] = useState("")

    const [eersteKlassePrijs, setEersteKlassePrijs] = useState(0)
    const [tweedeKlassePrijs, setTweedeKlassePrijs] = useState(0)
    const [derdeKlassePrijs, setDerdeKlassePrijs] = useState(0)

    const [halls, setHalls] = useState([]);
    const [inputhalls, setInputHalls] = useState("")

    const [programs, setPrograms] = useState([]);
    const [inputPrograms, setInputPrograms] = useState("")

    const [groups, setGroups] = useState([]);
    const [inputGroups, setInputGroups] = useState("")

    useEffect(() => {
        getHalls();
        getPrograms();
        getGroups();
    }, [])


    function getPrograms() {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/Program`, {
            method: "GET",
            headers: { "content-type": "application/json" }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setPrograms(data)
        })
    }
    function getHalls() {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/Hall`, {
            method: "GET",
            headers: { "content-type": "application/json" }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setHalls(data)
        })
    }
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

    function handleChangeHalls(value) {
        setInputHalls(value)
    }
    function handleChangePrograms(value) {
        setInputPrograms(value)
    }
    function handleChangeGroup(value) {
        setInputGroups(value)
    }

    function handleChangeEersteKlassePrijs(value) {
        setEersteKlassePrijs(value)
    }
    function handleChangeTweedeKlassePrijs(value) {
        setTweedeKlassePrijs(value)
    }
    function handleChangeDerdeKlassePrijs(value) {
        setDerdeKlassePrijs(value)
    }

    function handleStartTimeInput(value) {
        setStartTime(value);
    }
    
    function handleEndTimeInput(value){
        setEndTime(value);
    }



    function handleUploadShow() {
       /*fetch(`${process.env.REACT_APP_BACKEND_URL}/Show`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: 
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setGroups(data)
        })  */
        
        console.log(JSON.stringify({
            startDate: startDate + " " + startTime,
            endDate: endDate + " " + endTime,
            eersteKlassePrijs: eersteKlassePrijs,
            tweedeKlassePrijs: tweedeKlassePrijs,
            derdeKlassePrijs: derdeKlassePrijs,
            hallId: inputhalls,
            programId: inputPrograms,
            groupId: inputGroups
            }));}

    return (
        <div className='addshowcontainer'>
            <Form>
                <div>Start datum</div>
                <DatePicker showTimeSelect
 selected={startDate} onChange={(date) => setStartDate(date)} />
                <div>Start tijd</div>
                <Form.Control onChange={(e) => handleStartTimeInput(e.target.value)} placeholder='start tijd' type="email"></Form.Control>

                <div>eind datum</div>
                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                <div>eind tijd</div>
                <Form.Control onChange={(e) => handleEndTimeInput(e.target.value)} placeholder='Eind tijd' type="email"></Form.Control>

                <div>Eerste klasse prijs</div>
                <Form.Control onChange={(e) => handleChangeEersteKlassePrijs(e.target.value)} placeholder='0.00' type="number"></Form.Control>
                <div>Tweede klasse prijs</div>
                <Form.Control onChange={(e) => handleChangeTweedeKlassePrijs(e.target.value)} placeholder='0.00' type="number"></Form.Control>
                <div>Derde klasse prijs</div>
                <Form.Control onChange={(e) => handleChangeDerdeKlassePrijs(e.target.value)} placeholder='0.00' type="number"></Form.Control>

                <div>Halls</div>
                <select onChange={(e) => handleChangeHalls(e.target.value)}>
                    {halls.map((hall) => <option key={hall.id} value={hall.id}> hall : {hall.id} capaciteit: {hall.capacity} </option>)}
                </select>

                <div>Programma</div>
                <select onChange={(e) => handleChangePrograms(e.target.value)}>
                    {programs.map((program) => <option key={program.id} value={program.id}>{program.title}</option>)}
                </select>
                <div>Groep</div>
                <select onChange={(e) => handleChangeGroup(e.target.value)}>
                    {groups.map((group) => <option key={group.id} value={group.id}>{group.name}</option>)}
                </select>
                <Button variant="success" onClick={handleUploadShow}>Upload show</Button>
            </Form>
        </div>
    );
}