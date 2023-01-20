import { useState } from "react";
import { useEffect } from "react";
import ShowRow from "./ShowRow";
import TicketRow from "./TicketRow";
import TotalsRow from "./TotalsRow";

export default function Table({shoppingCartItems}) {
  console.count()
    const [rows, setRows] = useState([]);
    const [seatItems, setSeatItems] = useState([]);
    console.log("SCI in Table")
    console.log(shoppingCartItems)

    if (seatItems != []) {
      if (seatItems.length != 0) {
        console.log(seatItems)

      }
    }

    useEffect(() => {
      
        let mounted = true;
        function createRows() {
            const tempRows = [];

            const lastShowId = null;
            const showRowIndex = null;
            
            if (shoppingCartItems.seatShowItems.length != 0) {
              console.log("Hoi")
              for (var i = 0; i < shoppingCartItems.seatShowItems.length; i++) {
                console.log(shoppingCartItems.seatShowItems[i])
                seatItems.push(shoppingCartItems.seatShowItems[i])
              }
              setSeatItems(seatItems);
              // setSeatItems(shoppingCartItems.seatShowItems)
            // shoppingCartItems.seatShowItems.forEach((seatShowItem) => {
            //     console.log("In Loop")
            //     console.log(seatShowItem)
            //     console.log("Foreac")
            //     console.log(seatShowItem.length)
            //     seatShowItem.forEach((el) => console.log(el.key))
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
                
            // })
          }
        }

        createRows();
        return () =>  mounted = false;
    }, [])

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

    // useEffect(() => { 
    //   setSeatItems(seatItems);
    // }, [])
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