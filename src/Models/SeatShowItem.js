export default class SeatShowItem {
    constructor(seat, show) {
        const key = "SH" + show.id + "SE" + seat.id;
        this.key = key;
        this.seat = seat;
        this.show = show;
    }
}
