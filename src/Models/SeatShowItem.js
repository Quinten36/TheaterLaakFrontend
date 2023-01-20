import SeatPrice from "../Util/ShowFunctions";

export default class SeatShowItem {
    constructor(seat, show) {
        this.key = "SH" + show.id + "SE" + seat.id;
        this.price = SeatPrice(seat, show)
        this.seat = {
            "id": seat.id,
            "row": seat.row,
            "seatNumber": seat.seatNumber,
            "seatClass": seat.seatClass,
        }

        this.show = {
            "id": show.id,
            "start": show.start,
            "end": show.end,
            "program": {
                "id": show.programId,
                "title": show.program.title,
            }
        }
    }
}
