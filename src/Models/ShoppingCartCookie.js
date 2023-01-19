export default class ShoppingCartCookie {
    constructor() {
        this.showSeats = []
        this.hallReservation = []
    }

    addSeat(show, seat) {
        var showInCookie = this.showSeats.find(ss => ss.showId === show.id)
        if(showInCookie === null || showInCookie === undefined) {
            showInCookie = {
                "showId": show.id,
                "seats": []
            }
            this.showSeats.push(showInCookie)
        }

        showInCookie.seats.push({
            "seatId": seat.id
        })
    }

    addSeats(show, seats) {
        seats.forEach(seat => {
            this.addSeat(show, seat)
        });
    }
}