import { useState } from "react"
import { useEffect } from "react"
import { post } from "../Api/Api"
import createTickets from "../Api/Ticket"
import { getCookie, setCookie } from "../Cookie/Cookie"

export default function CompleteOrder(){
    const [orderCompleted, setOrderCompleted] = useState(false)

    useEffect(() => {
        var mounted = true;
        function PutOrderInDatabase() {
            var shoppingCart = getCookie("ShoppingCart")
            if(shoppingCart !== "") {
                shoppingCart = JSON.parse(shoppingCart)

                post("Order", {
                    "hasPaid": true,
                })
                .then(order => createTickets(shoppingCart.seatShowItems, null, order.id))

                setCookie("ShoppingCart", "")
                setOrderCompleted(true)
            }
        }
        PutOrderInDatabase()

        return () => mounted = false
    }, [])
    
    
    return <>{orderCompleted ? <p>De bestelling is succesvol afgerond</p>:<p>Oopsie er ging iets mis met de bestelling...</p>}</>
}