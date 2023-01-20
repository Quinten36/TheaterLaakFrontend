import { Button } from "react-bootstrap";
import { getCookie, setCookie } from "../../../Cookie/Cookie";
import SeatShowItem from "../../../Models/SeatShowItem";
import ShoppingCartItems from "../../../Models/ShoppingCartItems";
import ShoppingListInfo from "./ShoppingListInfo";

export default function ShoppingList({shoppingList, show, removeItem}) {
    function addToShoppingCart() {
        var cookie = getCookie("ShoppingCart");
        console.log("Get Cookie:")
        console.log(cookie)
        if(cookie === ""){
            console.log("Nieuwe Cookie")
            cookie = new ShoppingCartItems()
            console.log(cookie)
        }
        else {
            cookie = JSON.parse(cookie)
            console.log("Old Cookie:")
            console.log(cookie)
        }
        const list = shoppingList.seats.map(seat => new SeatShowItem(seat, show))
        console.log("List:")
        console.log(list)
        list.forEach(seatShow => {
            cookie.seatShowItems.push(seatShow)
        });
        console.log("Edited Cookie:")
        console.log(cookie)
        // setCookie("ShoppingCart", JSON.stringify(cookie), 1)
        var s = JSON.stringify(cookie)
        console.log(s)
        setCookie("ShoppingCart", s, 1)
        console.log("Cookie Set")

        window.location.href = "/winkelwagen"
    }
    
    return <div className="shoppingListContainer">
        <ShoppingListInfo shoppingList={shoppingList} show={show} removeItem={removeItem}/>
        <Button variant="primary" type="submit" onClick={addToShoppingCart} disabled={shoppingList.seats.length === 0}>+ In Winkelmand</Button>
    </div>
}