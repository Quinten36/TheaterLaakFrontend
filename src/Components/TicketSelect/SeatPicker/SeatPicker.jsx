import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import SeatPickerDropdowns from "./SeatPickerDropdowns";
import SeatPickerImage from "./SeatPickerImage";
import SelectedSeatInfo from "./SelectedSeatInfo";

export default function SeatPicker({show, onAddSeat, shoppingList}) {
    var rows = 0;
    var columns = 0;
    const [selectedSeat, setSelectedSeat] = useState(undefined);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)

    useEffect(()=> {
        seatPicker()
    },[selectedSeat])

    function GetRowsColumnsCount() {
        show.seats.forEach(seat => {
            if(seat.row > rows) rows = seat.row;
            if(seat.seatNumber > columns) columns = seat.seatNumber;
        });
    }

    function onPickerChange(newSelectedSeat) {
        console.log("ShoppingList", shoppingList)
        console.log("oldSelectedSeat", selectedSeat)
        console.log("newSelectedSeat", newSelectedSeat)
        //Set old seat icon to Available if not in shoppingcart
        if(selectedSeat !==undefined)
            if(!shoppingList.seats.includes(selectedSeat)){
                console.log("Selected Seat", selectedSeat)
                selectedSeat.seatShowStatus[0].status = "Available"
            }
        //Return if already in shoppingcart
        if(shoppingList.seats.includes(newSelectedSeat)){
            console.log("hoi")
            setIsButtonDisabled(true)
            console.log("Seat Zit in list")
            return;
        }

        //If new seat is occupied disable "+ voeg toe" button
        if(newSelectedSeat.seatShowStatus[0].status == "Occupied") {
            setSelectedSeat(undefined)
            setIsButtonDisabled(true)
        }
        
        //If new seat available set selected and enable button
        if(newSelectedSeat.seatShowStatus[0].status == "Available"){
            newSelectedSeat.seatShowStatus[0].status = "Selected";
            setSelectedSeat(newSelectedSeat)
            setIsButtonDisabled(false)
        }
    }

    GetRowsColumnsCount();

    const seatPicker = () => {
        return <div className="seatPicker">
            <SeatPickerImage seats={show.seats} rows={rows} columns={columns}/>
            <SeatPickerDropdowns rows={rows} columns={columns} onChange={onPickerChange} seats={show.seats}/>
            <SelectedSeatInfo seat={selectedSeat} show={show}/>
            <Button className="addToShoppingListBtn" onClick={() => {setIsButtonDisabled(true);onAddSeat(selectedSeat)}} disabled={isButtonDisabled}>+ Voeg Toe</Button>
        </div>
    }

    return seatPicker()
}