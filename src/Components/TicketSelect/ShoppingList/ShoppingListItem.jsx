import SeatPrice from "../../../Util/ShowFunctions";

export default function ShoppingListItem({seat, show, removeItem}) {
    return<span className="shoppingListRow">
        <p className="gridCol1 shoppingListItem red" onClick={() => removeItem(seat)}>X</p>
        <p className="gridCol2 shoppingListItem">R{seat.row} S{seat.seatNumber}</p>
        <p className="gridCol3 shoppingListItem">{seat.seatClass}e</p>
        <p className="gridCol4 shoppingListItem">€ {SeatPrice(seat, show).toFixed(2)}</p>
    </span>
}