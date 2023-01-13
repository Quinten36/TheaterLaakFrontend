import ProgramSearchBar from "../Components/Programming/ProgramSearchBar";
import SearchDropDown from "../Components/Programming/SearchDropDown";
import {useEffect, useMemo, useState} from "react";
import ProgramCard from "../Components/Programming/ProgramCard";
import * as ProgramApi from '../Api/Program';
import debounce from "../Util/debounce";

export default function Programming(props) {
    const [programs, setPrograms] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    // useEffect( () => {ProgramApi.all().then(data => setPrograms(data))}, [setPrograms]);

    const requestProgramTitle = useMemo(() => {
        return debounce(async (query) => {
            setPrograms(await ProgramApi.all(`title=${query}`))
        }, 200);
    }, []);

    useEffect(() => {
        requestProgramTitle(searchQuery);
    }, [searchQuery]);

    return (
        <div style={{display:'flex', alignItems:'center', flexDirection:'column', padding:'10px'}}>
            <ProgramSearchBar name="Datum" type="date" />
            <ProgramSearchBar name="Voorstelling of artiest" programs={programs} setSearchQuery={setSearchQuery}/>
            <SearchDropDown />
<<<<<<< HEAD
            {programs.map((program, index) => (
                <ProgramCard key={index} image={program.image} title={program.title} genre={program.genres} startDatum="22-8-2000" eindDatum="22-8-2001" artiesten={array}  />
            ))}
            {/* <ProgramCard image="alladin.png" title="Sinterklaas" genre="kinderen" startDatum="22-8-2000" eindDatum="22-8-2001" artiesten={array}  />
            <ProgramCard image="alladin.png" title="Sinterklaas" genre="kinderen" startDatum="22-8-2000" eindDatum="22-8-2001" artiesten={array}  /> */}
=======
            {programs.map((program, index) => <ProgramCard key={program.id} program={program}/>)}
>>>>>>> 1816731d02cabc9c519ffd201b4c2b3822837ed3
        </div>
    )

}

//TODO: pagineren (max results)