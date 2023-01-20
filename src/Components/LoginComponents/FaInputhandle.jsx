import { useState, useRef, } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Navigate, useNavigate } from 'react-router-dom';

export default function FaInputhandle() {
  const navigate = useNavigate();
  const [input1, setInput1] = useState('');
  const input1Ref = useRef(null);
  const [input2, setInput2] = useState('');
  const input2Ref = useRef(null);
  const [input3, setInput3] = useState('');
  const input3Ref = useRef(null);
  const [input4, setInput4] = useState('');
  const input4Ref = useRef(null);
  const [input5, setInput5] = useState('');
  const input5Ref = useRef(null);


  const inputs = [
    { value: input1, setValue: setInput1, ref: input1Ref },
    { value: input2, setValue: setInput2, ref: input2Ref },
    { value: input3, setValue: setInput3, ref: input3Ref },
    { value: input4, setValue: setInput4, ref: input4Ref },
    { value: input5, setValue: setInput5, ref: input5Ref },
  ];

  const handleChange = (event, index) => {
    const { value } = event.target;
    const { setValue, ref } = inputs[index];
    setValue(value);
    ref.current.focus();
    if (index < inputs.length - 1) {
      inputs[index + 1].ref.current.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && event.target.value === "") {
      if (index > 0) {
        inputs[index - 1].ref.current.focus();
      }
    }
  };




  const gebruikerID = localStorage.getItem("id")
  const [fouteInvoer, setFouteInvoer] = useState(false);

  const handleSubmit = (e) => {
    
    e.preventDefault();
    const inputToString = input1.toString() + input2.toString() + input3.toString() + input4.toString() + input5.toString();
    console.log(inputToString)
    SendVerificatieCodeToBackEnd(inputToString);
  }

  async function SendVerificatieCodeToBackEnd(inputToString) {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/Registratie/api/validate/${gebruikerID}/${inputToString}`, {
      method: 'Put',
    })

    if (response.ok) {
      navigate('/Login')
    }
    if (!response.ok) {
      setFouteInvoer(true)
    }
  }

 async function handleOpnieuwEmail(){
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/OpnieuwVerzendenVerificatieMail/${gebruikerID}`, {
      method: 'Get',
    })

    if (response.ok) {
      console.log("succes")
    }
    if (!response.ok) {
      setFouteInvoer(true)
    }
  }
 


  return (
    <div>
      <Form className="FA_collectie">

        <Form.Control
          autoFocus
          className="FA_box"
          type="text"
          placeholder="0"
          maxLength="1"
          value={input1}
          onChange={(event) => handleChange(event, 0)}
          onKeyDown={(event) => handleKeyDown(event, 0)}
          ref={input1Ref}
        />

        <Form.Control
          className="FA_box"
          type="text"
          placeholder="0"
          maxLength="1"
          value={input2}
          onChange={(event) => handleChange(event, 1)}
          onKeyDown={(event) => handleKeyDown(event, 1)}
          ref={input2Ref}
        />

        <Form.Control
          className="FA_box"
          type="text"
          placeholder="0"
          maxLength="1"
          value={input3}
          onChange={(event) => handleChange(event, 2)}
          onKeyDown={(event) => handleKeyDown(event, 2)}
          ref={input3Ref}
        />

        <Form.Control
          className="FA_box"
          type="text"
          placeholder="0"
          maxLength="1"
          value={input4}
          onChange={(event) => handleChange(event, 3)}
          onKeyDown={(event) => handleKeyDown(event, 3)}
          ref={input4Ref}
        />

        <Form.Control
          className="FA_box"
          type="text"
          placeholder="0"
          maxLength="1"
          value={input5}
          onChange={(event) => handleChange(event, 4)}
          onKeyDown={(event) => handleKeyDown(event, 4)}
          ref={input5Ref}
        />



      </Form >
      {fouteInvoer ? <div className="ErrorVerificatiePage" >De verificatie code is incorrect.</div> : null}

      <Button className="SubmitButton2FA" variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>

       <div className="EmailOpnieuwLink" onClick={handleOpnieuwEmail}>
        <a href="#">Email opnieuw verzenden</a>
      </div>
    </div>
  )
}
