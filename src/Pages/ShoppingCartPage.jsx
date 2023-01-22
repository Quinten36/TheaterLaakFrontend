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
            <form method="post" action="https://fakepay.azurewebsites.net?amount=15"  encType="application/x-www-form-urlencoded" className="bestelButtons">
              <input name="amount" value={15} hidden readOnly></input>
              <input name="reference" value={1212121212} hidden readOnly></input>
              <input name="url" value={"http://localhost:5086/api/misc/setPayment"} hidden readOnly></input>
                <Nav.Link href="/programmering"><Button variant="outline-primary">Verder Winkelen</Button></Nav.Link>
                <Button onClick={() => {Pay(parseFloat(totalPrice))}} variant="primary" type="submit" disabled={totalPrice.toFixed(2)<=0.0}>Bestellen</Button>
                <div id="payPopUp"></div>
            </form>
        </main>
}

