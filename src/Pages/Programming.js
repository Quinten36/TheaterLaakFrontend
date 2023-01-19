import ProgramSearchBar from "../Components/Programming/ProgramSearchBar";
import SearchDropDown from "../Components/Programming/SearchDropDown";
import {useEffect, useMemo, useState} from "react";
import ProgramCard from "../Components/Programming/ProgramCard";
import * as ProgramApi from '../Api/Program';
import debounce from "../Util/debounce";
import Accordion from "react-bootstrap/Accordion";

export default function Programming(props) {
    const [programs, setPrograms] = useState([]);
    const [titleQuery, setTitleQuery] = useState("");
    const [artistQuery, setArtistQuery] = useState("");
    const [descriptionQuery, setDescriptionQuery] = useState("");
    const [startDateQuery, setStartDateQuery] = useState("");
    const [endDateQuery, setEndDateQuery] = useState("");
    const [costMinQuery, setCostMinQuery] = useState("");
    const [costMaxQuery, setCostMaxQuery] = useState("");
    const [sortQuery, setSortQuery] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const requestProgramTitle = useMemo(() => {
        return debounce(async (query) => {
            setPrograms(await ProgramApi.all(query))
        }, 200);
    }, []);

    useEffect(() => {
        let query = "?";
        if(titleQuery !== "") query += `&title=${titleQuery}`
        if(artistQuery !== "") query += `&artist=${artistQuery}`
        if(descriptionQuery !== "") query += `&description=${descriptionQuery}`
        if(startDateQuery !== "") query += `&startDate=${startDateQuery}`
        if(endDateQuery !== "") query += `&endDate=${endDateQuery}`
        if(costMaxQuery !== "") query += `&costMax=${costMaxQuery}`
        if(sortQuery !== "") query += `&sort=${sortQuery}`
        setSearchQuery(query)
    }, [titleQuery, artistQuery, descriptionQuery, startDateQuery, endDateQuery, costMinQuery, costMaxQuery, sortQuery])

    useEffect(() => {
        requestProgramTitle(searchQuery);
    }, [searchQuery]);

    return (
        <div style={{display:'flex', alignItems:'center', flexDirection:'column', padding:'10px'}}>
            <ProgramSearchBar name="Zoeken naar Voorstelling"  setSearchQuery={setTitleQuery}/>
            <Accordion defaultActiveKey="0" style={{ margin:'10px'}}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Geavanceerd Zoeken</Accordion.Header>
                    <Accordion.Body>
                        <ProgramSearchBar name="Artiest"  setSearchQuery={setArtistQuery}/>
                        <ProgramSearchBar name="Omschrijving"  setSearchQuery={setDescriptionQuery}/>
                        <ProgramSearchBar name="Start Datum" type="date" setSearchQuery={setStartDateQuery}/>
                        <ProgramSearchBar name="Eind Datum"  type="date" setSearchQuery={setEndDateQuery}/>
                        <ProgramSearchBar name="Kosten Max" type="number" min="0"  setSearchQuery={setCostMaxQuery}/>
                        <SearchDropDown searchQuery={sortQuery} setSearchQuery={setSortQuery}/>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
            {programs.map((program, index) => <ProgramCard key={program.id} program={program}/>)}
        </div>
    )
}

//TODO: pagineren (max results)