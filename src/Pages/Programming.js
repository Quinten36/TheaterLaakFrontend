import ProgramSearchBar from "../Components/ProgramSearchBar";
import SearchDropDown from "../Components/SearchDropDown";
import {useEffect, useMemo, useState} from "react";
import ProgramCard from "../Components/ProgramCard";
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
            {programs.map((program, index) => <ProgramCard key={program.id} program={program}/>)}
        </div>
    )

}

//TODO: pagineren (max results)