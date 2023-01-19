import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import SeatPickerDropdowns from "./SeatPickerDropdowns";
import SeatPickerImage from "./SeatPickerImage";
import SelectedSeatInfo from "./SelectedSeatInfo";

export default function SeatPicker({show, onAddSeat}) {
    var rows = 0;
    var columns = 0;
    const [selectedSeat, setSelectedSeat] = useState(undefined);

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
        if(selectedSeat !== undefined)
            selectedSeat.seatShowStatus[0].status = "Available"
        newSelectedSeat.seatShowStatus[0].status = "Selected";
        setSelectedSeat(newSelectedSeat)
    }

    GetRowsColumnsCount();

    const seatPicker = () => {
        return <div className="seatPicker">
            <SeatPickerImage seats={show.seats} rows={rows} columns={columns}/>
            <SeatPickerDropdowns rows={rows} columns={columns} onChange={onPickerChange} seats={show.seats}/>
            <SelectedSeatInfo seat={selectedSeat} show={show}/>
            <Button className="addToShoppingListBtn" onClick={() => onAddSeat(selectedSeat)}>+ Voeg Toe</Button>
        </div>
    }

    return seatPicker()
}