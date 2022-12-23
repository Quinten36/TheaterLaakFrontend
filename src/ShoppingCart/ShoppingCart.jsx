import Table from "./Table.jsx"
export default function ShoppingCart({ tickets }){
    return (
        <div>
            <h2>Mijn Winkelwagentje</h2>
            <Table tickets={tickets}/>
        </div>
    )
}