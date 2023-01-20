import { useState } from "react";
import { useEffect } from "react";
import { getCookie } from "../../Cookie/Cookie";
import ShowRow from "./ShowRow";
import TicketRow from "./TicketRow";
import TotalsRow from "./TotalsRow";

export default function Table({setTotalPrice, totalPrice}) {
    const [shoppingCartItems, setShoppingCartItems] = useState(JSON.parse(getCookie("ShoppingCart")));
    const [rows, setRows] = useState([]);
    console.log("SCI in Table")
    console.log(shoppingCartItems)
    
    useEffect(() => {
        function createRows() {
            var newRows = [...rows]
            let newTotalPrice = 0;
            shoppingCartItems.seatShowItems.forEach(seatShowItem => {
                console.log("Loop")
                console.log(seatShowItem)
                console.log("New Shows")
                console.log(newRows)
                var includes = false;
                let showRow = undefined;
                newRows.forEach(show => {
                    if(show.key == "SH" + seatShowItem.show.id)
                        showRow = show;
                })
                let addSeat
                console.log("Includes: "+includes)
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
    
    
    console.log(rows)
    return (
        <table>
            <tbody>
                {rows}
                <TotalsRow totalPrice={totalPrice}/>
            </tbody>
        </table>
    )
}