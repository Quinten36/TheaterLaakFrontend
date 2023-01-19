import { Form } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

const SearchDropDown = ({setSearchQuery}) =>
    <Form.Select aria-label="Default select example" onChange={event => setSearchQuery(event.target.value)}>
        <option>Sorteren Op</option>
        <option value="datum">Datum</option>
        <option value="kostenHoogLaag">Kosten (hoog-laag)</option>
        <option value="kostenLaagHoog">Kosten (laag-hoog)</option>
    </Form.Select>
export default SearchDropDown