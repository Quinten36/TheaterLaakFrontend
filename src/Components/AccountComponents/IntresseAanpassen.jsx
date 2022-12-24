import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export default function IntresseAanpassen(props) {
  const [selectedIntresses, setSelectedIntresses] = useState([]);
  const intresses = props.intresses;

  const handleSelectIntresse = (intresse) => {
    if (selectedIntresses.includes(intresse)) {
      setSelectedIntresses(selectedIntresses.filter((i) => i !== intresse));
    } else {
      setSelectedIntresses([...selectedIntresses, intresse]);
    }
  };

  const handleVerwijderenIntresses = () => {

  };
  
  
        

  return (
    <div className = "intresseAanpassenVeld">
    <div className = "SelecteerIntresses">
       
      {intresses.map((intresse) => (
        <Button className ="IntresseKeuzes"
          key={intresse}
          onClick={() => handleSelectIntresse(intresse)}
          variant={selectedIntresses.includes(intresse) ? "danger" : "primary"}
        >{intresse}
        </Button>
      ))}
    </div>
    <div className="ButtonIntressesContainer">
    <Button className = "IntresseButton"type="button" class="btn btn-success">+</Button>
    <Button className = "IntresseButton"type="button" variant="danger" onClick={handleVerwijderenIntresses}>-</Button>
    </div>
    </div>
  );
}
