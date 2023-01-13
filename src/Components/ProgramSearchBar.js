import {FloatingLabel} from "react-bootstrap";
import { Form, FormControl } from 'react-bootstrap';
import * as ProgramApi from '../Api/Program';



const ProgramSearchBar = ({ name, type, programs, setSearchQuery }) => {
    const handleSubmit = (e) => e.preventDefault();
    const handleSearch = async (e) => {
        // if(!e.target.value) return setSearchResults(programs)
        // programs.forEach(program => program.group.artists.filter(artist => console.log(artist.name.toLowerCase().includes(e.target.value.toLowerCase()))))

        // console.log(programs.filter(program => program.group.name))
        // .artists.forEach(artist => artist.name.toString().toLowerCase())))

        // const resultsArray = programs.filter(
        //     program => program.title.toLowerCase().includes(e.target.value.toLowerCase()
        // program.group.artists.filter(artist => artist.name.toLowerCase().includes(e.target.value.toLowerCase()))
        //     )
        // )

        // const resultsArray = await ProgramApi.all("title="+e.target.value.toLowerCase())
        setSearchQuery(e.target.value)
    }

    return (
        <FloatingLabel
            controlId="floatingInput"
            label={name}
            className="mb-3"
        >
            <Form.Control
                type={type}
                placeholder="name@example.com"
                // onSubmit={handleSubmit}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </FloatingLabel>
    )
}

export default ProgramSearchBar