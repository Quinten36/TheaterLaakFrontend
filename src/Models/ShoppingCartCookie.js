export default class ShoppingCartCookie {
    constructor() {
        this.showSeats = []
        this.hallReservation = []
    }

    addSeat(show, seat) {
        this.showSeats.push({
            "showId": show.id,
            "seatId": seat.id
        })
    }

    addSeats(show, seats) {
        seats.forEach(seat => {
            this.addSeat(show, seat)
        });
    }
}