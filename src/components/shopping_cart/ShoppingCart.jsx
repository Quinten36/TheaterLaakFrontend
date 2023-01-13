import Table from "./Table.jsx"
import "./../../Css/shoppingCart.css"
export default function ShoppingCart({ tickets }){
    return (
        <div className="shoppingCart">
            <h2 className="center">Mijn Winkelwagentje</h2>
            <Table tickets={tickets}/>
        </div>
    )
}