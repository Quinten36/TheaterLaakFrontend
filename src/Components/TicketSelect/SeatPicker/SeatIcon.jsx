export default function SeatIcon({status, onclick, isLegend}) {
    function createSeatIcon(classNames) {
        return <div className={classNames}></div>;
    }
    if(status === undefined) return;

    if((status === undefined || status === null) && isLegend===true) return createSeatIcon("seatAvailableIcon");
    if(status == "Occupied") return createSeatIcon("seatOccupiedIcon");
    if(status == "Selected") return createSeatIcon("seatSelectedIcon");
    return createSeatIcon("seatAvailableIcon");
}