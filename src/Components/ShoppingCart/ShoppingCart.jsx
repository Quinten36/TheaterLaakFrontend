import Table from "./Table.jsx"
import "./../../Css/shoppingCart.css"
export default function ShoppingCart({setTotalPrice, totalPrice}){
    return (
        <div className="shoppingCart">
            <h2 className="center">Mijn Winkelwagentje</h2>
            <Table setTotalPrice={setTotalPrice} totalPrice={totalPrice}/>
        </div>
    )
}