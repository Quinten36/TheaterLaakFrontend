import { useState } from "react";
import { useEffect } from "react";
import { getCookie } from "../../Cookie/Cookie";
import ShoppingCartItems from "../../Models/ShoppingCartItems";
import ShowRow from "./ShowRow";
import TicketRow from "./TicketRow";
import TotalsRow from "./TotalsRow";

export default function Table({setTotalPrice, totalPrice}) {
    const [shoppingCartItems, setShoppingCartItems] = useState(getShoppingCartCookie());
    const [rows, setRows] = useState([]);
    function getShoppingCartCookie() {
        const cookie = getCookie("ShoppingCart");
        if(cookie !== "")
            return JSON.parse(cookie)
        return new ShoppingCartItems();
    }
    useEffect(() => {
        function createRows() {
            var newRows = [...rows]
            let newTotalPrice = 0;
            shoppingCartItems.seatShowItems.forEach(seatShowItem => {
                let showRow = undefined;
                newRows.forEach(show => {
                    if(show.key == "SH" + seatShowItem.show.id)
                        showRow = show;
                })
                //Create Show Row IF not exists
                if(showRow === undefined){
                    showRow = <ShowRow 
                        key={"SH" + seatShowItem.show.id} 
                        show={seatShowItem.show}
                    />;
                    newRows = [...newRows, showRow]
                }

                //Create TicketRow
                let ticketRow = <TicketRow 
                    key={"SH" + seatShowItem.show.id+"SE"+seatShowItem.seat.id} 
                    price={seatShowItem.price}
                    seat={seatShowItem.seat} 
                />
                let insertAt = newRows.indexOf(showRow) + 1
                newRows=[
                    ...newRows.slice(0, insertAt), 
                    ticketRow,
                    ...newRows.slice(insertAt)
                ]
                newTotalPrice += seatShowItem.price
            });
            
            newRows=[...newRows]

            setRows(rows.concat(newRows))
            setTotalPrice(newTotalPrice)
        }

        createRows()
    },[shoppingCartItems])
    
    
    return (
        <table hidden={totalPrice == 0}>
            <tbody>
                {rows}
                <TotalsRow totalPrice={totalPrice}/>
            </tbody>
        </table>
    )
}