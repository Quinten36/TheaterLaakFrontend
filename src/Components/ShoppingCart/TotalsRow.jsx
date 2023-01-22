export default function TotalsRow({totalPrice}) {
    return (
        <tr>
            <td>Totaal: </td>
            <td colSpan="2"></td>
            <td colSpan="1">€ {totalPrice.toFixed(2)}</td>
        </tr>
    )
}