import {FloatingLabel} from "react-bootstrap";
import { Form, FormControl } from 'react-bootstrap';
import * as ProgramApi from '../../Api/Program';



const ProgramSearchBar = ({ name, type, setSearchQuery, ...props }) =>
    <FloatingLabel
        controlId="floatingInput"
        label={name}
        className="mb-3"
    >
        <Form.Control
            type={type}
            placeholder="name@example.com"
            onChange={(e) => setSearchQuery(e.target.value)}
            {...props}
        />
    </FloatingLabel>;

export default ProgramSearchBar;