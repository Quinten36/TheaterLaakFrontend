import { useRef } from 'react';
import Form from 'react-bootstrap/Form';

export default function FaInputhandle() {
    
    //useRef wordt gebruikt om een referentie punt te maken voor elk invoer veld . 
    //Daarna wordt gekeken met de volgendeBox methode of er een character is ingevuld daarna wordt met focus de cursor op het volgende veld gezet
    //.current wordt gebruikt om de value van de referentie van de invoer velden te gebruiken


  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  const input5Ref = useRef(null);

  const volgendeBox = (event, ref) => {
    if (event.target.value.length === 1) {
      ref.current.focus();
    }
  };

  return (
    <Form className="FA_collectie">
      <Form.Control
        className="FA_box"
        id="2FA_invoer_1"
        type="email"
        placeholder="0"
        maxLength="1"
        ref={input1Ref}
        onKeyUp={(event) => volgendeBox(event, input2Ref)}
      />
      <Form.Control
        className="FA_box"
        id="2FA_invoer_2"
        type="email"
        placeholder="0"
        maxLength="1"
        ref={input2Ref}
        onKeyUp={(event) => volgendeBox(event, input3Ref)}
      />
      <Form.Control
        className="FA_box"
        id="2FA_invoer_3"
        type="email"
        placeholder="0"
        maxLength="1"
        ref={input3Ref}
        onKeyUp={(event) => volgendeBox(event, input4Ref)}
      />
      <Form.Control
        className="FA_box"
        id="2FA_invoer_4"
        type="email"
        placeholder="0"
        maxLength="1"
        ref={input4Ref}
        onKeyUp={(event) => volgendeBox(event, input5Ref)}
      />
      <Form.Control
        className="FA_box"
        id="2FA_invoer_5"
        type="email"
        placeholder="0"
        maxLength="1"
        ref={input5Ref}
      />
    </Form>
  );
}