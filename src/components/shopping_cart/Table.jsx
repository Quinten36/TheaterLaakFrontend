import ShowRow from "./ShowRow";
import TicketRow from "./TicketRow";
import TotalsRow from "./TotalsRow";

export default function Table({tickets}) {
    const rows = [];
    let lastShow = null;

    tickets.forEach((ticket) => {
        if (ticket.show.name !== lastShow) {
            rows.push(
                <ShowRow
                    ticket={ticket}
                    key={ticket.show.name}/>
            );
        }
        rows.push(
            <TicketRow
                ticket={ticket}
                key={ticket.id}/>
        );
        lastShow = ticket.show.name;
    });

    rows.push(
        <TotalsRow
            tickets={tickets}
            key={"total"}/>
    );
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="2"></th>
                    <th>Prijs</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}