import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';
import './adminpage_styles.css'
import { Nav } from 'react-bootstrap';

export default function AddArtist() {
    const [artiesten, setArtiesten] = useState([]);
    const [naam, setNaam] = useState("");

    useEffect(() => {

    }, [])

    function handleChangeNaam(value) {
      setNaam(value)
    }

    function handleAddArtist() {
      setArtiesten([...artiesten, naam ]);
    }

    function SendToDatabase() {
      if (artiesten.length < 1) return;
      fetch(`${process.env.REACT_APP_BACKEND_URL}/Artist/lijst`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(artiesten)
            })
        .then((response) => {
            if (response.ok) {
              document.getElementById("outputLabel").innerHTML = "Het toevoegen is gelukt";
            } else {
              document.getElementById("outputLabel").innerHTML = "Het toevoegen is niet gelukt";
            }
        })
    }

    return (
        <div className='addartistcontainer'>
          <Nav.Link variant="primary" href="https://black-moss-0a8543303.2.azurestaticapps.net/Admin" style={{"textDecoration":"underline"}}>Go back</Nav.Link>
            <Form>
              <div id='outputLabel'></div>
                <div>Naam:</div>
                <Form.Control onChange={(e) => handleChangeNaam(e.target.value)} placeholder='Naam' type="text"></Form.Control>
                <Button variant="success" onClick={handleAddArtist} style={{"margin": "5px"}}>Add artist</Button>
                {artiesten.length != 0 &&
                  <>
                  <h4>Artiesten toe te voegen</h4>
                  {artiesten.map((item, index) => 
                    <p key={index} style={{"margin":"1px 0 1px 5px"}}>{item}</p>
                  )}
                  <Button variant="success" onClick={SendToDatabase} style={{"margin": "5px"}}>Add to database</Button>
                  </>
                }
            </Form>
        </div>
    );
}