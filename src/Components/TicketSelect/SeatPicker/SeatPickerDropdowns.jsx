import { useEffect, useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";

export default function SeatPickerDropdowns({rows, columns, onChange, seats}) {
    const [selectedRowNumber, setSelectedRowNumber] = useState(undefined);
    const [selectedSeatNumber, setSelectedSeatNumber] = useState(undefined);

    useEffect(() => {
        function changed() {
            // if(selectedRowNumber === undefined || selectedSeatNumber === undefined) return;
            const newSelectedSeat = seats.find(seat => seat.row == selectedRowNumber && seat.seatNumber == selectedSeatNumber)
            if(newSelectedSeat === undefined || newSelectedSeat === null) return;
            onChange(newSelectedSeat);
        }
        changed()
    }, [selectedRowNumber, selectedSeatNumber])

    function GenerateOptions(num) {
        const array = Array.from({ length: num }, (_, index) => {
            return <option key={"O"+index+1} value={index+1}>{index+1}</option>;
        });
        return array
    }
    
    return <span className="dropDownContainer">
        <FloatingLabel className="dropDownItem" controlId="rowNumberSelect" label="Rij Nummer">
            <Form.Select onChange={(event) => {setSelectedRowNumber(event.target.value);}} >
                <option >Selecteer</option>
                {GenerateOptions(rows)}
            </Form.Select>
        </FloatingLabel>
        <FloatingLabel className="dropDownItem" controlId="seatNumberSelect" label="Stoel Nummer">
            <Form.Select onChange={(event) => {setSelectedSeatNumber(event.target.value);}}>
                <option >Selecteer</option>
                {GenerateOptions(columns)}
            </Form.Select>
        </FloatingLabel>
    </span>
}