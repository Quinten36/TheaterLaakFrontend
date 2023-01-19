import { Button } from "react-bootstrap";
import { setCookie } from "../../../Cookie/Cookie";
import ShoppingCartCookie from "../../../Models/ShoppingCartCookie";
import ShoppingListInfo from "./ShoppingListInfo";

export default function ShoppingList({shoppingList, show, removeItem}) {
    function addToShoppingCart() {
        const shoppingCartCookie = new ShoppingCartCookie();
        shoppingCartCookie.addSeats(show, shoppingList.seats)
        setCookie("ShoppingCart", JSON.stringify(shoppingCartCookie), 1)
        window.location.href = "/winkelwagen"
    }
    
    return <div className="shoppingListContainer">
        <ShoppingListInfo shoppingList={shoppingList} show={show} removeItem={removeItem}/>
        <Button variant="primary" type="submit" onClick={addToShoppingCart} disabled={shoppingList.seats.length === 0}>+ In Winkelmand</Button>
    </div>
}