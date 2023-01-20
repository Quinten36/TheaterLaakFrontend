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
        console.log("OnPickerChange")
        console.log(newSelectedSeat)
        if(selectedSeat !== undefined)
            selectedSeat.seatShowStatus[0].status = "Available"

        if(shoppingList.seats.includes(newSelectedSeat)){
                setIsButtonDisabled(true)
                console.log("Seat Zit in list")
                return;
        }

        if(newSelectedSeat.seatShowStatus[0].status == "Occupied") {
            setSelectedSeat(undefined)
            setIsButtonDisabled(true)
        }
        
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