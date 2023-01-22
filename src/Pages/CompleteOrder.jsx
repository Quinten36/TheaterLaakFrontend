import { useState } from "react"
import { useEffect } from "react"
import { post } from "../Api/Api"
import createTickets from "../Api/Ticket"
import { getCookie, setCookie } from "../Cookie/Cookie"
import { checkJWTToken, GetJWTToken } from "../JWT/JWT"

export default function CompleteOrder(){
    const [orderCompleted, setOrderCompleted] = useState(false)

    useEffect(() => {
        var mounted = true;
        function PutOrderInDatabase() {
            var shoppingCart = getCookie("ShoppingCart")
            if(shoppingCart !== "") {
                shoppingCart = JSON.parse(shoppingCart)

                const OrderBody = {
                    "hasPaid": true,
                }
                if(checkJWTToken()) {
                    OrderBody.AccountId = GetJWTToken().Id
                }
                post("Order", OrderBody)
                .then(order => createTickets(shoppingCart.seatShowItems, checkJWTToken() ?  GetJWTToken().Id : null, order.id))

                setCookie("ShoppingCart", "")
                setOrderCompleted(true)
            }
        }
        PutOrderInDatabase()

        return () => mounted = false
    }, [])
    
    
    return <>{orderCompleted ? <p>De bestelling is succesvol afgerond</p>:<p>Oopsie er ging iets mis met de bestelling...</p>}</>
}