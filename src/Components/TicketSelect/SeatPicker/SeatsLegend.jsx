import SeatIcon from "./SeatIcon";

export default function SeatsLegend() {
    return <div className="legend">
        <div className="leftLegendColumn">
            <span className="leftLegendRow">
                <SeatIcon status="Available"/>
                <h6>Beschikbaar</h6>
            </span>
            <span className="leftLegendRow">
                <SeatIcon status="Occupied"/>
                <h6>Bezet</h6>
            </span>
            <span className="leftLegendRow">
                <SeatIcon status="Selected"/>
                <h6>Geselecteerd</h6>
            </span>
        </div>
        <div className="">
            <span className="rightLegendRow">
                <h6>1e Rang</h6>
                <SeatIcon isLegend/>
            </span>
            <span className="rightLegendRow">
                <h6>2e Rang</h6>
                <SeatIcon isLegend/>
            </span>
            <span className="rightLegendRow">
                <h6>3e Rang</h6>
                <SeatIcon isLegend/>
            </span>
        </div>
    </div>
}