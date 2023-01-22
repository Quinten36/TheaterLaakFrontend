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
    const [selectedRowNumber, setSelectedRowNumber] = useState(undefined);
    const [selectedSeatNumber, setSelectedSeatNumber] = useState(undefined);

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
        if(shoppingList.seats.length >= 25) {
            window.alert("Je hebt het limiet van 25 stoelen bereikt")
            return
        }
        //Set old seat icon to Available if not in shoppingcart
        if(selectedSeat !==undefined)
            if(!shoppingList.seats.includes(selectedSeat)){
                selectedSeat.seatShowStatus[0].status = "Available"
            }
        //Return if already in shoppingcart
        if(shoppingList.seats.includes(newSelectedSeat)){
            setIsButtonDisabled(true)
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

    
    useEffect(() => {
        function changed() {
            // if(selectedRowNumber === undefined || selectedSeatNumber === undefined) return;
            const newSelectedSeat = show.seats.find(seat => seat.row == selectedRowNumber && seat.seatNumber == selectedSeatNumber)
            if(newSelectedSeat === undefined || newSelectedSeat === null) return;
            onPickerChange(newSelectedSeat);
        }
        changed()
    }, [selectedRowNumber, selectedSeatNumber])

    GetRowsColumnsCount();

    const seatPicker = () => {
        return <div className="seatPicker">
            <SeatPickerImage 
                seats={show.seats} 
                rows={rows} columns={columns} 
                setSelectedSeatNumber={setSelectedSeatNumber} 
                setSelectedRowNumber={setSelectedRowNumber}
            />
            <SeatPickerDropdowns 
                rows={rows} 
                columns={columns} 
                setSelectedSeatNumber={setSelectedSeatNumber} 
                setSelectedRowNumber={setSelectedRowNumber} 
                selectedRowNumber={selectedRowNumber} 
                selectedSeatNumber={selectedSeatNumber}
            />
            <SelectedSeatInfo 
                seat={selectedSeat} 
                show={show} 
                setSelectedSeatNumber={setSelectedSeatNumber} 
                setSelectedRowNumber={setSelectedRowNumber}
            />
            <Button 
                className="addToShoppingListBtn" 
                disabled={isButtonDisabled}
                onClick={() => {
                    setIsButtonDisabled(true);
                    onAddSeat(selectedSeat)
                }} 
            >+ Voeg Toe</Button>
        </div>
    }

    return seatPicker()
}