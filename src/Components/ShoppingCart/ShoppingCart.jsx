import Table from "./Table.jsx"
import "./../../Css/shoppingCart.css"

export default function ShoppingCart({setTotalPrice, totalPrice}){
    return (
        <div className="shoppingCart">
            <h2 className="center">Mijn Winkelwagentje</h2>
            {totalPrice.toFixed(2)<=0.0 ?
            <p className="center">Er zijn geen items toegevoegd aan het winkelwagentje</p>:
            <Table setTotalPrice={setTotalPrice} totalPrice={totalPrice}/>
            }
        </div>
    )
}