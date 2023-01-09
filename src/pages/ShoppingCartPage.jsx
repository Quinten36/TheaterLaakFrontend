import ShoppingCart from "../components/shopping_cart/ShoppingCart.jsx";

export default function ShoppingCartPage() {
    return (
        <body>
            <header>
                <nav>
                    Hier komt nav
                </nav>
            </header>
            <main>
                <ShoppingCart tickets={tickets}/>
            </main>
        </body>
    );
}

const tickets = [
    {id: "1", type: "Standaard", show: {name: "Peter pan", artist: "Theatergroep Den Haag"}, rank: "3", date: new Date(), price: "25.00", seatRow: "5", seatNumber: "23"},
    {id: "3", type: "Standaard", show: {name: "Peter pan", artist: "Theatergroep Den Haag"}, rank: "2", date: new Date(), price: "35.00", seatRow: "5", seatNumber: "25"},
    {id: "2", type: "Standaard", show: {name: "Peter pan", artist: "Theatergroep Den Haag"}, rank: "3", date: new Date(), price: "25.00", seatRow: "5", seatNumber: "24"},
    {id: "4", type: "Studenten", show: {name: "Shrek de Musical", artist: "Theatergroep Den Haag"}, rank: "1", date: new Date(), price: "69.00", seatRow: "5", seatNumber: "25"},
    {id: "5", type: "Studenten", show: {name: "Shrek de Musical", artist: "Theatergroep Den Haag"}, rank: "1", date: new Date(), price: "69.00", seatRow: "5", seatNumber: "25"}
]