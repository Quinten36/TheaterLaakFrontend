import { useEffect } from "react";
import SeatIcon from "./SeatIcon";
import SeatsLegend from "./SeatsLegend";

export default function SeatPickerImage({seats, rows, columns}) {

    
    // var r = document.querySelector(":root")
    // console.log(r)
    // var rs = getComputedStyle(r)
    // console.log(rs)
    // rs.CSSStyleDeclaration
    

    function Init() {
        SetContainerStyle();
    }


    function SetContainerStyle() {
        const style = document.documentElement.style;
        style.setProperty('--seatColumns', columns)
    }

    function GenerateSeatIcons() {
        return seats.map((seat, index) => <SeatIcon
            key={seat.id}
            onclick={() => {console.log("Hoi")}}
            status={seat.seatShowStatus[0].status}
            />
        );
    }
    
    if(seats === null || seats === undefined) return;
    const seatIcons = GenerateSeatIcons();


    Init();

    return <div className="seatPickerImageContainer">
        <h5>Selecteer Plekken</h5>
        <div className="seatsImageContainer">
            {seatIcons}
        </div>
        <div className="podium"><h4>Podium</h4></div>
        <SeatsLegend/>
    </div>
}