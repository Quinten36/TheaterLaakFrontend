import "./../../css/shoppingCart.css"

export default function TicketRow({ticket}) {
    return (
        <tr className='ticketRow'>
            <td>{ticket.type}</td>
            <td>Rang {ticket.rank} - rij:{ticket.seatRow} - stoel:{ticket.seatNumber}</td>
            <td>€ {ticket.price}</td>
            <td><a className='verwijderTicket'>Verwijder</a></td>
        </tr>
    )
}