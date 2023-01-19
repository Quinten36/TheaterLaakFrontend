import SeatPrice from "../../Util/ShowFunctions"
import "./../../Css/shoppingCart.css"

export default function TicketRow({seat, show}) {
    return (
        <tr className='ticketRow'>
            <td>Standaard</td>
            <td>Rang {seat.seatClass} - rij:{seat.row} - stoel:{seat.seatNumber}</td>
            <td className="ticketPrice">€ {SeatPrice(seat, show)}</td>
            <td><a className='verwijderTicket'>Verwijder</a></td>
        </tr>
    )
}