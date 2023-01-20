import SeatPrice from "../../../Util/ShowFunctions";
import ShoppingListItem from "./ShoppingListItem";

export default function ShoppingListInfo({shoppingList, show, removeItem}) {
    return <div className="shoppingListInfo">
        <span className="shoppingListRow shoppingListHeader">
            <span className="gridCol1"></span>
            <h4 className="gridCol2">Stoel</h4>
            <h4 className="gridCol3">Rang</h4>
            <h4 className="gridCol4">Prijs</h4>
        </span>
        {shoppingList.seats.map((seat) => <ShoppingListItem key={"SLI"+seat.id} seat={seat} show={show} removeItem={removeItem}/>)}
        <h4 className="gridCol3 shoppingTotals">Totaal: </h4>
        <h4 className="gridCol4 shoppingTotals">€ {shoppingList.seats.reduce((sum, seat) => sum + parseFloat(SeatPrice(seat, show).toFixed(2)), 0).toFixed(2)}</h4>
    </div>
}