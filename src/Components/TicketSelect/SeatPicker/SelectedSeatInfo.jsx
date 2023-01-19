import SeatPrice from "../../../Util/ShowFunctions";

export default function SelectedSeatInfo({seat, show}) {

    if(seat === undefined || seat === null) return;
    return <div className="selectedSeatInfo">
        <h4>Geselecteerde stoel:<br/>
        {seat.seatClass}e Rang<br/>
        € {SeatPrice(seat, show).toFixed(2)}</h4>
    </div>
}