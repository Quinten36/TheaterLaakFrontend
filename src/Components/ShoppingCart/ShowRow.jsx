import "./../../Css/shoppingCart.css"

export default function ShowRow({show}){
    return (
        <tr className="showRow">
            <th colSpan="3" className="showInfo">
                <div>
                    <h4 className="showName">{show.program.title}</h4>
                    <p>{new Date(show.start).toLocaleDateString() + " " + new Date(show.start).toLocaleTimeString()}</p>
                    {/* <p>{show.program.group.artists.name}</p> */}
                </div>
            </th>
            <th>
                <a className="wijzigShow" href={"/ticket/"+show.id}>Wijzig Plaatsen</a>
            </th>
        </tr>
    )
}

