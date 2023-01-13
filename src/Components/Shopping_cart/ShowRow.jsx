import "./../../Css/shoppingCart.css"

export default function ShowRow({ticket}){
    return (
        <tr className="showRow">
            <th colSpan="3" className="showInfo">
                <h4 className="showName">{ticket.show.name}</h4>
                <p>{ticket.date.toLocaleDateString() + " " + ticket.date.toLocaleTimeString()}</p>
                {/* wo 21-12-2022 20:00 */}
                <p>{ticket.show.artist}</p>
            </th>
            <th>
                <a className="wijzigShow" href="./">Wijzig Plaatsen</a>
            </th>
        </tr>
    )
}