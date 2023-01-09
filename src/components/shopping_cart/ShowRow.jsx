export default function ShowRow({ticket}){
    return (
        <tr>
            <th>
                <h4>{ticket.show.name}</h4>
                <p>{ticket.date.toLocaleDateString({weekday: "short", hour: "numeric"})}</p>
                <p>{ticket.show.artist}</p>
                <a href="./">Wijzig Plaatsen</a>
            </th>
        </tr>
    )
}