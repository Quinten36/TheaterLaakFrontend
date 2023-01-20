import { Button } from "react-bootstrap";
import { getCookie, setCookie } from "../../../Cookie/Cookie";
import SeatShowItem from "../../../Models/SeatShowItem";
import ShoppingCartItems from "../../../Models/ShoppingCartItems";
import ShoppingListInfo from "./ShoppingListInfo";

export default function ShoppingList({shoppingList, show, removeItem}) {
    function addToShoppingCart() {
        var cookie = getCookie("ShoppingCart");
        if(cookie === ""){
            cookie = new ShoppingCartItems()
        }
        else {
            cookie = JSON.parse(cookie)
            cookie.seatShowItems = cookie.seatShowItems.filter(seatShowItem => seatShowItem.show.id != show.id)
        }
        const list = shoppingList.seats.map(seat => new SeatShowItem(seat, show))

        list.forEach(seatShow => {
            cookie.seatShowItems.push(seatShow)
        });
        var s = JSON.stringify(cookie)
        setCookie("ShoppingCart", s, 1)

        window.location.href = "/winkelwagen"
    }
    
    return <div className="shoppingListContainer">
        <ShoppingListInfo shoppingList={shoppingList} show={show} removeItem={removeItem}/>
        <Button variant="primary" type="submit" onClick={addToShoppingCart} disabled={shoppingList.seats.length === 0}>+ In Winkelmand</Button>
    </div>
}