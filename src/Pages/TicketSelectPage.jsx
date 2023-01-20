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
            console.log("Cookie Called")
            console.log(show)
            var cookie = getCookie("ShoppingCart")
            if(cookie != "") {
                cookie = JSON.parse(cookie)
                console.log("Cookie:")
                console.log(cookie)
                var cookieSeats = []
                cookie.seatShowItems.forEach((seatShowItem) => {
                    if(seatShowItem.show.id == parameter){
                        const seatFromList = show.seats.find((seat) => seat.id == seatShowItem.seat.id);
                        console.log("Seat From List")
                        console.log(seatFromList)
                        cookieSeats = [...cookieSeats, seatFromList]
                        // addSeat(seatFromList)
                        
                    }
                })
                console.log("cookieSeats")
                console.log(cookieSeats)
                setShoppingList({seats: [...cookieSeats]})
            }
        }

        fetchCookie()

        return () => mounted = false
    },[show])

    function addSeat(seat) {
        console.log("Add Seat")
        console.log(seat)
        console.log(shoppingList)
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

    console.log("ShoppingLi")
    console.log(shoppingList)

    return <main>
        <ShowInfo show={show}/>
        <SeatPicker show={show} onAddSeat={addSeat} shoppingList={shoppingList}/>
        <ShoppingList shoppingList={shoppingList} show={show} removeItem={removeSeat}/>
    </main>
}


//TODO: Load from cookies
//TODO: Verwerk rangen in icons 
//TODO: Seats in de shopping list als geselecteerd blijven weegeven in PickerImage
//TODO: De selector items aanpassen op basis van beschikbaarheid.
//TODO: Maak de icons klikbaar
//TODO: Zet rij- en stoelnummers bij de Picker image
