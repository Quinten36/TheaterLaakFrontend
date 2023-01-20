import "./../../Css/shoppingCart.css"

export default function TicketRow({price, seat}) {
    console.log("Seat in Ticket")
    console.log(seat)
    return (
        <tr className='ticketRow'>
            <td colSpan={3}>Rang {seat.seatClass} - rij:{seat.row} - stoel:{seat.seatNumber}</td>
            <td className="ticketPrice">€ {price.toFixed(2)}</td>
        </tr>
    )
}