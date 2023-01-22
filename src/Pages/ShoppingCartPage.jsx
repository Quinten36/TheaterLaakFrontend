import { useState } from "react";
import { Nav } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import ShoppingCart from "../Components/ShoppingCart/ShoppingCart.jsx";
import "./../Css/shoppingCart.css";
import {post} from "./../Api/Api"
import ShoppingCartItems from "../Models/ShoppingCartItems.js";
import { getCookie } from "../Cookie/Cookie.js";

export default function ShoppingCartPage() {
  const [shoppingCartItems, setShoppingCartItems] = useState(getShoppingCartCookie());
  const [totalPrice, setTotalPrice] = useState(0)
  console.log(shoppingCartItems)
  console.log(totalPrice)
  function getShoppingCartCookie() {
      const cookie = getCookie("ShoppingCart");
      if(cookie !== "")
          return JSON.parse(cookie)
      return new ShoppingCartItems();
  }

  async function createTicketsList() {
    shoppingCartItems.seatShowItems.forEach(async (seatShowItem) => {
      await post("Ticket", {
        "seatId": seatShowItem.seat.id,
        "accountId": null,
        "showId": seatShowItem.show.id,
        "orderId": null
      })
      .then((response) => console.log(response))
    })
  }

  async function createOrder() {
    var ticketsList = await createTicketsList();

    await post("Order", {
      "hasPaid": false,
      "accountId": null,
      // ""
    })
  }

  async function submitShoppingCart() {
    await createOrder()
    document.getElementById("shoppingCartForm").submit()
  }


  return <main>
          <ShoppingCart className="shoppingCart" setTotalPrice={setTotalPrice} totalPrice={totalPrice} shoppingCartItems={shoppingCartItems}/>
          <form id="shoppingCartForm" method="post" onSubmit={submitShoppingCart} action={"https://fakepay.azurewebsites.net"}  encType="application/x-www-form-urlencoded" className="bestelButtons">
            <input name="amount" value={totalPrice.toFixed(2)} hidden readOnly></input>
            <input name="reference" value={1212121212} hidden readOnly></input>
            <input name="url" value={"http://localhost:5086/api/misc/setPayment"} hidden readOnly></input>
              <Nav.Link href="/programmering"><Button variant="outline-primary">Verder Winkelen</Button></Nav.Link>
              <Button variant="primary" type="submit" disabled={totalPrice.toFixed(2)<=0.0}>Bestellen</Button>
              <div id="payPopUp"></div>
          </form>
      </main>


  // TODO: Generate unique reference number for payment
}

