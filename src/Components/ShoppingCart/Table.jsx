import { useState } from "react";
import { useEffect } from "react";
import ShowRow from "./ShowRow";
import TicketRow from "./TicketRow";
import TotalsRow from "./TotalsRow";

export default function Table({shoppingCartItems}) {
    const [rows, setRows] = useState([]);
    console.log("SCI in Table")
    console.log(shoppingCartItems)
    useEffect(() => {
        let mounted = true;
        function createRows() {
            const tempRows = [];

            const lastShowId = null;
            const showRowIndex = null;
            
            console.log("Hoi")
            shoppingCartItems.seatShowItems.forEach((seatShowItem) => {
                console.log("In Loop")
                console.log(seatShowItem)
                console.log("Foreac")
                console.log(seatShowItem)
                seatShowItem.forEach((el) => console.log(el.key))
                // let show = seatShowItem.key;c
                // console.log(show)d
                
                // if(!lastShowId === show.id){
                //     lastShowId = show.id;
                //     if(!tempRows.includes(r => r.key === "SH"+show.id)){
                //         const showRow = <ShowRow
                //             key={"SH" + show.id}
                //             show={show} />;
                //         tempRows.push(showRow)
                //         console.log(tempRows.indexOf(showRow))
                //     }
                // }
                
            })
        }

        createRows();
        return () =>  mounted = false;
    }, [shoppingCartItems])

    // rows.push(
    //     <TotalsRow
    //         tickets={tickets}
    //         key={"total"}/>
    // );
    // console.log("Rows")
    // console.log(rows)
    // if (rows === []) {
    //     return;
        
    // }
    if(shoppingCartItems.seatShowItems === null) return;
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="2"></th>
                    <th>Prijs</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}