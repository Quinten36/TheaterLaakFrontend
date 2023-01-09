import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export default function TicketRow({ticket}) {
    return (
        <tr>
            <td>{ticket.type}</td>
            <td>Rang {ticket.rank} - rij:{ticket.seatRow} - stoel:{ticket.seatNumber}</td>
            <td>€ {ticket.price}</td>
            <td><Button variant="warning">Verwijder</Button></td>
        </tr>
    )
}