import ShoppingCart from "../Components/ShoppingCart/ShoppingCart.jsx";
import "./../Css/shoppingCart.css"
import Button from 'react-bootstrap/Button';
import { getCookie } from "../Cookie/Cookie.js";

export default function ShoppingCartPage() {
    var resp = getCookie("shoppingList");
    return (
        <main>
            <ShoppingCart className="shoppingCart" tickets={tickets}/>
            <div className="bestelButtons">
                <Button variant="outline-primary">Verder Winkelen</Button>
                <Button variant="primary">Bestellen</Button>
            </div>
        </main>
    );
}

const tickets = [
    {id: "1", type: "Standaard", show: {name: "Peter pan", artist: "Theatergroep Den Haag"}, rank: "3", date: new Date(), price: "25.00", seatRow: "5", seatNumber: "23"},
    {id: "3", type: "Standaard", show: {name: "Peter pan", artist: "Theatergroep Den Haag"}, rank: "2", date: new Date(), price: "35.00", seatRow: "5", seatNumber: "25"},
    {id: "2", type: "Standaard", show: {name: "Peter pan", artist: "Theatergroep Den Haag"}, rank: "3", date: new Date(), price: "25.00", seatRow: "5", seatNumber: "24"},
    {id: "4", type: "Standaard", show: {name: "Shrek de Musical", artist: "Theatergroep Den Haag"}, rank: "1", date: new Date(), price: "69.00", seatRow: "5", seatNumber: "25"},
    {id: "5", type: "Standaard", show: {name: "Shrek de Musical", artist: "Theatergroep Den Haag"}, rank: "1", date: new Date(), price: "69.00", seatRow: "5", seatNumber: "25"}
]