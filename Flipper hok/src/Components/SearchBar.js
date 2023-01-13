import {FloatingLabel} from "react-bootstrap";
import { Form, FormControl } from 'react-bootstrap';


export default function SearchBar(props) {
    return(
        <FloatingLabel
            controlId="floatingInput"
            label={props.name}
            className="mb-3"
        >
            <Form.Control type={ props.type } placeholder="name@example.com" />
        </FloatingLabel>
    )
}