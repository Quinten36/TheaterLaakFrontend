import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Navigate } from 'react-router-dom';
export default function FaInputhandle() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [input5, setInput5] = useState('');

  const gebruikerID = localStorage.getItem("id")
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputToString = input1.toString() + input2.toString() + input3.toString() + input4.toString() + input5.toString();
    SendVerificatieCodeToBackEnd(inputToString);
    
  }

  async function SendVerificatieCodeToBackEnd(inputToString){
    console.log(gebruikerID +" " + inputToString)
    const response = await fetch(`https://localhost:7098/api/Registratie/api/validate/${gebruikerID}/${inputToString}`,{
      method: 'Put',
     })
     
     if(response.ok){
      console.log("succes")
     }
     if (!response.ok) {
      const error = JSON.parse(await response.text());
      console.log(error);
     }  
  }
  
  return (
    <div>
    <Form className="FA_collectie"  >
      <Form.Control
        className="FA_box"
        type="email"
        placeholder="0"
        maxLength="1"
        value={input1}
        onChange={(event) => setInput1(event.target.value)}
      />
      <Form.Control
        className="FA_box"
        type="email"
        placeholder="0"
        maxLength="1"
        value={input2}
        onChange={(event) => setInput2(event.target.value)}
      />
      <Form.Control
        className="FA_box"
        type="email"
        placeholder="0"
        maxLength="1"
        value={input3}
        onChange={(event) => setInput3(event.target.value)}
      />
      <Form.Control
        className="FA_box"
        type="email"
        placeholder="0"
        maxLength="1"
        value={input4}
        onChange={(event) => setInput4(event.target.value)}
      />
      <Form.Control
        className="FA_box"
        type="email"
        placeholder="0"
        maxLength="1"
        value={input5}
        onChange={(event) => setInput5(event.target.value)}
      />
  </Form>
  <Button className="SubmitButton2FA" variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
</div>
      
    
)}
