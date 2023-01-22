import { useEffect, useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";

export default function SeatPickerDropdowns({rows, columns, setSelectedSeatNumber, setSelectedRowNumber, selectedRowNumber, selectedSeatNumber}) {



    function GenerateOptions(num) {
        const array = Array.from({ length: num }, (_, index) => {
            return <option key={"O"+index+1} value={index+1}>{index+1}</option>;
        });
        return array
    }
    
    return <span className="dropDownContainer">
        <FloatingLabel className="dropDownItem" controlId="rowNumberSelect" label="Rij Nummer">
            <Form.Select value={selectedRowNumber} onChange={(event) => {setSelectedRowNumber(event.target.value);}} >
                <option >Selecteer</option>
                {GenerateOptions(rows)}
            </Form.Select>
        </FloatingLabel>
        <FloatingLabel className="dropDownItem" controlId="seatNumberSelect" label="Stoel Nummer">
            <Form.Select value={selectedSeatNumber} onChange={(event) => {setSelectedSeatNumber(event.target.value);}}>
                <option >Selecteer</option>
                {GenerateOptions(columns)}
            </Form.Select>
        </FloatingLabel>
    </span>
}