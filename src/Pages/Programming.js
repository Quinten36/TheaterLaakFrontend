import SearchBar from "../Components/SearchBar";
import SearchDropDown from "../Components/SearchDropDown";
import ProgrammingCard from "../Components/Card";


export default function Programming(props) {
    const array = ["John Bananeneter", "Harry Hanglip", "Rien aan de Lichtelaaie"]

    return (
        <div style={{display:'flex', alignItems:'center', flexDirection:'column', padding:'10px'}}>
            <SearchBar name="Datum" type="date" />
            <SearchBar name="Voorstelling of artiest"/>
            <SearchDropDown />
            <ProgrammingCard image="alladin.png" title="Sinterklaas" genre="kinderen" startDatum="22-8-2000" eindDatum="22-8-2001" artiesten={array}  />
            <ProgrammingCard image="alladin.png" title="Sinterklaas" genre="kinderen" startDatum="22-8-2000" eindDatum="22-8-2001" artiesten={array}  />
        </div>


    )
}