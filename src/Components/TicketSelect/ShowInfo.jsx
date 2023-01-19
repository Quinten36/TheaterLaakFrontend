export default function ShowInfo({show}) {
    function GetShowDate() {
        const showDate = new Date(show.start);
        const weekString = showDate.toLocaleDateString("nl-NL", { weekday: "short", day: "numeric", month: "short", year: "numeric" }); // di 7 jan.
        const timeString = showDate.toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" }); //  09:50
        const dateString = <>{weekString}<br/>{timeString}</> // di 7 jan. 09:50
        return dateString;
    }
    return <div className="showInfo">
        <h1>{show.program.title}</h1>
        <h4 className="datum">{GetShowDate()}</h4>
    </div>
}