import { post } from "./Api";


export default function createTickets(seatShowItems, accountId, orderId) {
    seatShowItems.forEach((seatShowItem, index) => {
        const ticket = {
            "orderId": orderId,
            "seatId": seatShowItem.seat.id,
            "showId": seatShowItem.show.id,
            "accountId": accountId
        };
        post("Ticket", ticket)
    });
}