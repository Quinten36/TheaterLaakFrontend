import ShoppingCart from "../Components/ShoppingCart/ShoppingCart.jsx";
import "./../Css/shoppingCart.css"
import Button from 'react-bootstrap/Button';
import { getCookie } from "../Cookie/Cookie.js";
import { useEffect } from "react";
import { getSingle } from "../Api/Api.js";
import { useState } from "react";
import ShoppingCartItems from "../Models/ShoppingCartItems.js";
import SeatShowItem from "../Models/SeatShowItem.js";
import Pay from "../Api/FakePay.js";

export default function ShoppingCartPage() {
    const [shoppingCartItems, setShoppingCartItems] = useState(new ShoppingCartItems());
    useEffect(() => {
        let mounted = true;
        function fetchData() {
            var cookie = getCookie("ShoppingCart")
            if(cookie == "") return;
            cookie = JSON.parse(cookie)            
            if(!mounted) return;
            
            console.log("Cookie")
            console.log(cookie)
            const seatShowItems = [];
            
            for (let i = 0; i < cookie.showSeats.length; i++) {
                const showSeat = cookie.showSeats[i];
                
                getSingle("Show", showSeat.showId)
                .then(showResponse => {
                    getSingle("Program", showResponse.programId)
                    .then(programResponse => {
                        showResponse.program = programResponse;
                        showSeat.seats.forEach(cookieSeat => {
                            getSingle("Seat", cookieSeat.seatId)
                            .then(seatResponse => {
                                seatShowItems.push(new SeatShowItem(seatResponse, showResponse))
                            })
                        });
                    })
                })
            }

            if(mounted)
                setShoppingCartItems({
                    ...shoppingCartItems, 
                    seatShowItems:[
                        ...shoppingCartItems.seatShowItems, 
                        seatShowItems
                    ]
                })
        }

        fetchData();
        return () => mounted = false;

    }, []);


    async function addToCart(seat, show) {
        setShoppingCartItems(shoppingCartItems.addSeat(seat, show))
    }

    console.log("ShoppingCartItems")
    console.log(shoppingCartItems)

    
    return <main>
        <ShoppingCart className="shoppingCart" shoppingCartItems={shoppingCartItems}/>
        <div className="bestelButtons">
            <Button variant="outline-primary">Verder Winkelen</Button>
            <Button onClick={() => {Pay(1000)}} variant="primary">Bestellen</Button>
        </div>
    </main>
}

