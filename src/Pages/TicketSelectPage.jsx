import { useState } from "react";
import { useLocation } from "react-router-dom";
import { getSingle } from "../Api/Api";
import SeatPicker from "../Components/TicketSelect/SeatPicker/SeatPicker";
import ShoppingList from "../Components/TicketSelect/ShoppingList/ShoppingList";
import ShowInfo from "../Components/TicketSelect/ShowInfo";
import "./../Css/TicketSelect.css"

export default function TicketSelectPage() {
    const [show, setShow] = useState(null)    
    const [shoppingList, setShoppingList] = useState({seats: []});

    //Get showId from url params
    const location = useLocation();
    var parameter = location.pathname.split('/')[2];
    
    useState(() => {
        async function fetchData() {
            //Fetch Show
            const showResponse = await getSingle("Show/SeatStatus", parameter);
            //Fetch Program
            const programResponse = await getSingle("Program", showResponse.programId)
            //Put Program in Show
            showResponse.program = programResponse;
            //Set Show
            setShow(showResponse)
        }
        fetchData();
    })

    function addSeat(seat) {
        setShoppingList({seats: [...shoppingList.seats, seat]})
    }
    function removeSeat(seat) {
        setShoppingList(current => {
            const newList = current.seats.filter(s => s.id !== seat.id)
            return {"seats": newList}
        })
    }

    //Return if data not loaded yet
    if(show === null || show === undefined) return;

    return <main>
        <ShowInfo show={show}/>
        <SeatPicker show={show} onAddSeat={addSeat}/>
        <ShoppingList shoppingList={shoppingList} show={show} removeItem={removeSeat}/>
    </main>
}

//FIXME: Er kan meerdere keren dezelfde stoel toegevoegd worden.
//FIXME: Een stoel die bezet is kan geselecteerd worden
//TODO: Verwerk rangen in icons 
//TODO: Seats in de shopping list als geselecteerd blijven weegeven in PickerImage
//TODO: De selector items aanpassen op basis van beschikbaarheid.
//TODO: Maak de icons klikbaar
//TODO: Zet rij- en stoelnummers bij de Picker image
