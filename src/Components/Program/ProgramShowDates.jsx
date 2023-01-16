import ProgramShowDatesAccordion from './ProgramShowDatesAccordion';
import './../../Css/Program.scss';


export default function ProgramShowDates({shows}) {
    function GetProgramShowDatesContent() {
        return shows === undefined || shows.length <=0 ? <p>Het lijkt erop dat er momenteel geen shows gepland staan.</p>:
        <>
            <p>Selecteer hieronder het gewenste speelmoment</p>
            <ProgramShowDatesAccordion  shows={shows}/>
        </>
    }
    return <section className='programSpeelBanner'>
        <h3>Speel data</h3>
        {GetProgramShowDatesContent()}
    </section>
}
