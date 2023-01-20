import Table from "./Table.jsx"
import "./../../Css/shoppingCart.css"

export default function ShoppingCart({setTotalPrice, totalPrice}){
    return (
        <div className="shoppingCart">
            <h2 className="center">Mijn Winkelwagentje</h2>
            <p hidden={!totalPrice == 0} className="center">Er zijn geen items toegevoegd aan het winkelwagentje</p>
            <Table setTotalPrice={setTotalPrice} totalPrice={totalPrice}/>
        </div>
    )
}