import { Accordion } from "react-bootstrap"
import ProgramShowDatesAccordionItem from "./ProgramShowDatesAccordionItem";
import './../../Css/Program.scss';


export default function ProgramShowDatesAccordion({shows}) {
    const accordionItems = [];
    const monthYearList = []
    if(shows === undefined) return;
    shows.sort((s1, s2) => {return new Date(s1.start) - new Date(s2.start)})
    .forEach((show, index) => {
        var currentShowDate = new Date(show.start)
        var currentMonthYear = {
            "month": currentShowDate.toLocaleString("nl-NL", {month: "long"}), //Format to jan, feb..
            "year": currentShowDate.getFullYear()
        }

        //Find the monthYearObject from monthYearList that corresponds to currentShow month and year.
        //If not found return undefined
        var fromList = monthYearList.find(monthYear => 
            monthYear.monthYear.month == currentMonthYear.month && monthYear.monthYear.year ==  currentMonthYear.year)
        if(fromList === undefined){
            //Create a new monthYear object.
            const newMonthYear = { "monthYear": currentMonthYear, "shows": [] };
            monthYearList.push(newMonthYear)
            fromList = newMonthYear;    //Set fromList to newMonthYear for next step in code
        }
        //Add the show to dateMonth object
        fromList.shows.push(show);
    });

    //Map complete monthYearList to items for in the Accordion
    monthYearList.map((element, index) => {
        accordionItems.push(<ProgramShowDatesAccordionItem 
            key={"PSAI"+index} 
            eventkey={index} 
            monthYearItem={element
        }/>)
    })

    return <Accordion defaultActiveKey={[0]} className="showDatesAccordion" alwaysOpen>
        {accordionItems}
    </Accordion>
}