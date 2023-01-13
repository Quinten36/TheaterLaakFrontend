import SearchBar from "../Components/SearchBar";
import SearchDropDown from "../Components/SearchDropDown";
import {useEffect, useState} from "react";
import ProgramCard from "../Components/ProgramCard";
import * as ProgramApi from '../Api/Program';

export default function Programming(props) {
    const [programs, setPrograms] = useState([]);
    const array = ["John Bananeneter", "Harry Hanglip", "Rien aan de Lichtelaaie"];

    useEffect( () => {
        (async () =>
            setPrograms(await ProgramApi.all())
        )();
    }, [setPrograms])

    console.log(programs);

    return (
        <div style={{display:'flex', alignItems:'center', flexDirection:'column', padding:'10px'}}>
            <SearchBar name="Datum" type="date" />
            <SearchBar name="Voorstelling of artiest"/>
            <SearchDropDown />
            {programs.map(program =>
                <ProgramCard image={program.image} title={program.title} genre={program.genres} startDatum="22-8-2000" eindDatum="22-8-2001"></ProgramCard>
            )}
            <ProgramCard image="alladin.png" title="Sinterklaas" genre="kinderen" startDatum="22-8-2000" eindDatum="22-8-2001" artiesten={array}  />
            <ProgramCard image="alladin.png" title="Sinterklaas" genre="kinderen" startDatum="22-8-2000" eindDatum="22-8-2001" artiesten={array}  />
        </div>
    )
}