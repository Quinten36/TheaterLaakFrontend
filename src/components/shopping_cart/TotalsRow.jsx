export default function TotalsRow({tickets}) {
    let total = 0.00;
    tickets.forEach(ticket => {
        total += parseFloat(ticket.price);
    });
    return (
        <tr>
            <td colSpan="1"></td>
            <td>Totaal: </td>
            <td colSpan="2">€ {total.toFixed(2)}</td>
        </tr>
    )
}