import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';
import './adminpage_styles.css'
import { Nav } from 'react-bootstrap';

export default function AddArtist() {
    const [group, setGroup] = useState([]);
    const [naam, setNaam] = useState("");
    const [logo, setLogo] = useState("");
    const [website, setWebsite] = useState("");
    const [leden, setLeden] = useState([]);

    useEffect(() => {

    }, [])

    function handleChangeNaam(value) {
      setNaam(value)
    }

    function handleChangeLogo(value) {
      setLogo(value)
    }

    function handleChangeWebsite(value) {
      setWebsite(value)
    }

    function handleAddGroup() {
      setGroup([...group, {"name": naam, "Logo" :logo, "Website": website} ]);
    }

    function SendToDatabase() {
      if (group.length < 1) return;
      fetch(`${process.env.REACT_APP_BACKEND_URL}/group/lijst`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(group)
            })
        .then((response) => {
            console.log(response.ok);
            if (response.ok) {
              document.getElementById("outputLabel").innerHTML = "Het toevoegen is gelukt";
            } else {
              document.getElementById("outputLabel").innerHTML = "Het toevoegen is niet gelukt";
            }
        })
    }

    return (
        <div className='addartistcontainer'>
          <Nav.Link variant="primary" href="http://localhost:3000/Admin" style={{"textDecoration":"underline"}}>Go back</Nav.Link>
            <Form>
              <div id='outputLabel'></div>
                <div>Naam:</div>
                <Form.Control onChange={(e) => handleChangeNaam(e.target.value)} placeholder='Naam' type="text"></Form.Control>
                <Form.Control onChange={(e) => handleChangeLogo(e.target.value)} placeholder='Logo' type="text"></Form.Control>
                <Form.Control onChange={(e) => handleChangeWebsite(e.target.value)} placeholder='Website' type="text"></Form.Control>
                <Button variant="success" onClick={handleAddGroup} style={{"margin": "5px"}}>Add group</Button>
                {group.length != 0 &&
                  <>
                  <h4>Groups toe te voegen</h4>
                  {group.map((item, index) => 
                    <p key={index} style={{"margin":"1px 0 1px 5px"}}>Naam: {item.name}</p>
                  )}
                  <Button variant="success" onClick={SendToDatabase} style={{"margin": "5px"}}>Add to database</Button>
                  </>
                }
            </Form>
        </div>
    );
}