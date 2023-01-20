import ShoppingCart from "../Components/ShoppingCart/ShoppingCart.jsx";
import "./../Css/shoppingCart.css"
import Button from 'react-bootstrap/Button';
import Pay from "../Api/FakePay.js";
import { useState } from "react";
import { Nav } from "react-bootstrap";

export default function ShoppingCartPage() {
    const [totalPrice, setTotalPrice] = useState(0)
    return <main>
            <ShoppingCart className="shoppingCart" setTotalPrice={setTotalPrice} totalPrice={totalPrice}/>
            <form method="post" action="https://fakepay.azurewebsites.net/"  className="bestelButtons">
                <Nav.Link href="/programmering"><Button variant="outline-primary">Verder Winkelen</Button></Nav.Link>
                <Button onClick={() => {Pay(parseFloat(totalPrice))}} variant="primary" type="submit" disabled={totalPrice.toFixed(2)<=0.0}>Bestellen</Button>
            </form>
        </main>
}

