import ProgramShowDatesAccordion from './ProgramShowDatesAccordion';
import './../../Css/Program.scss';


export default function ProgramShowDates({shows}) {
    return <section className='programSpeelBanner'>
        <h3>Speel data</h3>
        <p>Selecteer hier de gewenste datum voor de show</p>
        <ProgramShowDatesAccordion  shows={shows}/>
    </section>
}