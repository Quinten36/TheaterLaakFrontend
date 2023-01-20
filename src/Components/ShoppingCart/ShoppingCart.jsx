import Table from "./Table.jsx"
import "./../../Css/shoppingCart.css"
export default function ShoppingCart({shoppingCartItems}){
  console.log(shoppingCartItems)
    return (
        <div className="shoppingCart">
            <h2 className="center">Mijn Winkelwagentje</h2>
              <Table shoppingCartItems={shoppingCartItems}/>
        </div>
    )
}