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
    <div id = "intresseAanpassenVeld">
        <Button id = "IntresseToevoegenButton"type="button" class="btn btn-success">+</Button>
      <Button id = "IntresseVerwijderenButton"type="button" variant="danger" onClick={handleVerwijderenIntresses}>-</Button>
      {intresses.map((intresse) => (
        <Button
          key={intresse}
          onClick={() => handleSelectIntresse(intresse)}
          variant={selectedIntresses.includes(intresse) ? "danger" : "primary"}
        >{intresse}
        </Button>
      ))}
    </div>
  );
}
