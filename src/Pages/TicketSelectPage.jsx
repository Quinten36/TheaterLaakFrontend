import { useState } from "react";
import { useLocation } from "react-router-dom";
import { getSingle } from "../Api/Api";
import SeatPicker from "../Components/TicketSelect/SeatPicker/SeatPicker";
import ShoppingList from "../Components/TicketSelect/ShoppingList/ShoppingList";
import ShowInfo from "../Components/TicketSelect/ShowInfo";
import { useEffect } from "react";
import { getCookie } from "../Cookie/Cookie";
import "./../Css/TicketSelect.css"

export default function TicketSelectPage() {
    const [show, setShow] = useState(null)    
    const [shoppingList, setShoppingList] = useState({seats: []});

    //Get showId from url params
    const location = useLocation();
    var parameter = location.pathname.split('/')[2];
    
    useEffect(() => {
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
    },[])

    useEffect(()=> {
        var mounted = true
        function fetchCookie(){
            if(show === null) return
            var cookie = getCookie("ShoppingCart")
            if(cookie != "") {
                cookie = JSON.parse(cookie)
                var cookieSeats = []
                cookie.seatShowItems.forEach((seatShowItem) => {
                    if(seatShowItem.show.id == parameter){
                        const seatFromList = show.seats.find((seat) => seat.id == seatShowItem.seat.id);
                        seatFromList.seatShowStatus[0].status = "Selected"
                        cookieSeats = [...cookieSeats, seatFromList]
                    }
                })
                setShoppingList({seats: [...cookieSeats]})
            }
        }

        fetchCookie()

        return () => mounted = false
    },[show])

    function addSeat(seat) {
        if(shoppingList.seats.includes(seatFromList => seat.id == seatFromList.id))return
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
        <SeatPicker show={show} onAddSeat={addSeat} shoppingList={shoppingList}/>
        <ShoppingList shoppingList={shoppingList} show={show} removeItem={removeSeat}/>
    </main>
}


//TODO: Verwerk rangen in icons 
//TODO: De selector items aanpassen op basis van beschikbaarheid.
//TODO: Zet rij- en stoelnummers bij de Picker image
