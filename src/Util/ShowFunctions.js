export default function SeatPrice(seat, show) {
    var price = undefined
    switch(seat.seatClass) {
        case 1:
            price = show.firstClassPrice;
            break;
        case 2:
            price = show.secondClassPrice;
            break;
        case 3:
            price = show.thirdClassPrice;
            break;
    }
    return price;
}