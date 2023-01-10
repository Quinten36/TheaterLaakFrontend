import SearchBar from "../Components/SearchBar";
import SearchDropDown from "../Components/SearchDropDown";
import {useEffect, useState} from "react";
import ProgramCard from "../Components/ProgramCard";
import env from '../../package.json';
import Api from "../Api/Api";


export default function Programming(props) {
    const [programs, setPrograms] = useState([]);
    const api = new Api(`http://${env.ipadress}:${env.port}/api/`);
    const array = ["John Bananeneter", "Harry Hanglip", "Rien aan de Lichtelaaie"]

    useEffect(() => {
        fetch(`http://${env.ipadress}:${env.port}/api/Program`)
            .then(response => response.json())
            .then(data => {
                setPrograms(data)
                console.log(programs)
            });
    }, []);

    // useEffect(() => {
    //     api.get("Program").then(
    //         JSONprograms => {
    //             console.log(JSONprograms)
    //             setPrograms(JSONprograms)
    //             // JSONprograms.map(program => programs.push({image: program.image, title: program.title, genres: [{name: "horror"}]}))
    //             console.log(programs)
    //         },
    //         error => console.log(error)
    //     )
    // }, [])



    return (
        <div style={{display:'flex', alignItems:'center', flexDirection:'column', padding:'10px'}}>
            <SearchBar name="Datum" type="date" />
            <SearchBar name="Voorstelling of artiest"/>
            <SearchDropDown />
            {programs.map(program => {
                return <ProgramCard image={program.image} title={program.title} genre={program.genres} startDatum="22-8-2000" eindDatum="22-8-2001"></ProgramCard>
            })}
            <ProgramCard image="alladin.png" title="Sinterklaas" genre="kinderen" startDatum="22-8-2000" eindDatum="22-8-2001" artiesten={array}  />
            <ProgramCard image="alladin.png" title="Sinterklaas" genre="kinderen" startDatum="22-8-2000" eindDatum="22-8-2001" artiesten={array}  />
        </div>


    )
}