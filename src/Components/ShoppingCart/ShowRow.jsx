import { Alert, Button, Nav } from "react-bootstrap"
import { getCookie, setCookie } from "../../Cookie/Cookie";
import ShoppingCartItems from "../../Models/ShoppingCartItems";
import "./../../Css/shoppingCart.css"

export default function ShowRow({show}){
    function showDeleteAlert() {
        if(window.confirm("Je staat op het punt om alle tickets van de show \""+show.program.title + "\" te verwijderen.\n\nWeet u zeker dat u dit wilt verwijderen?"))
        {
            var cookie = getCookie("ShoppingCart");
            cookie = JSON.parse(cookie)
            cookie.seatShowItems = cookie.seatShowItems.filter(seatShowItem => seatShowItem.show.id != show.id)
            setCookie("ShoppingCart", JSON.stringify(cookie), 1)
            window.location.href = "/winkelwagen"
        }
    }
    return (
        <tr className="showRow">
            <th colSpan={1}>
                <Button onClick={showDeleteAlert} variant="danger">
                    X
                </Button>
            </th>
            <th colSpan="3" className="showInfo">
                <div>
                    <h4 className="showName">{show.program.title}</h4>
                    <p>{new Date(show.start).toLocaleDateString() + " " + new Date(show.start).toLocaleTimeString()}</p>
                    {/* <p>{show.program.group.artists.name}</p> */}
                </div>
            </th>
            <th>
                <a className="wijzigShow" href={"/ticket/"+show.id}>Wijzig Plaatsen</a>
            </th>
        </tr>
    )
}

