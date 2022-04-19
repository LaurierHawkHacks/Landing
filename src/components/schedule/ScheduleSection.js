import React from "react";
import Styled from "styled-components";
import { Container } from "react-bootstrap";
import ScheduleEvent from "./ScheduleEvent";
import scheduleData from "../../data/scheduleData.json";

const DayButtonTitle = Styled.h3`
    margin: 0.1em;
    font-size: 1.5em;
    color: inherit;
`;
const DayButtonSubtitle = Styled.p`
    margin: 0.1em;
    color: inherit;
`;

const DayButton = Styled.button`
    
    width: 100%;
    min-width: 200px;
    height: 100px;

    padding-top: 0.1em;
    padding-bottom: 0.1em;
    
    margin: 0.5em;

    background: ${props => props.active ? "#0FA3B1;": "rgba(255, 255, 255, 0.3)"};
    border: ${props => props.active ? "3px solid #FCFCFC;": "1px solid #0FA3B1"};
    box-sizing: border-box;
    border-radius: 20px;

    color: ${props => props.active ? "white": "#2F4858"};

    @media (hover: hover) {
        :hover {
            transition: all 0.2s ease-in-out;
            color: #2F4858;
            background: rgba(255, 255, 255, 0.7);
        }
    }
`;

const EventsList = Styled.div`
    margin-left: 3em;
    margin-top: 1em;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    @media (max-width: 650px) {
        margin-left: 1em;
    }
`;

const ButtonContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media (max-width: 650px) {
        flex-direction: column;
    }
`;

function ScheduleSection(){
    const [activeDayIndex, setActiveDayIndex] = React.useState(0);

    function handleDayButtonClick(index){
        setActiveDayIndex(index);
    }


    return(
        <Container>
            <div style={{ display:"flex", alignItems: "center", flexDirection: "column" ,width: "100%" }}>
                <h2>{"<Schedule/>"}</h2>
                <p>Don&apos;t miss out on all the awesome events we have planned!</p>
            </div>
            <ButtonContainer style={{ display:"flex", justifyContent: "center", width: "100%" }}>
                <DayButton active={activeDayIndex === 0 && true} onClick={() => handleDayButtonClick(0)}>
                    <DayButtonTitle>Day 1</DayButtonTitle>
                    <DayButtonSubtitle>[date]</DayButtonSubtitle>
                </DayButton>
                <DayButton active={activeDayIndex === 1 && true} onClick={() => handleDayButtonClick(1)}>
                    <DayButtonTitle>Day 2</DayButtonTitle>
                    <DayButtonSubtitle>[date]</DayButtonSubtitle>
                </DayButton>
                <DayButton active={activeDayIndex === 2 && true} onClick={() => handleDayButtonClick(2)}>
                    <DayButtonTitle>Day 3</DayButtonTitle>
                    <DayButtonSubtitle>[date]</DayButtonSubtitle>
                </DayButton>
            </ButtonContainer>
            <EventsList>
                {scheduleData[activeDayIndex].map((event, index) => {
                    return(
                        <ScheduleEvent key={index} timeStr={event.time} title={event.title} subtitle={event.subtitle} tagText={event.tag}/>
                    );
                })}
            </EventsList>
        </Container>
    );
}

export default ScheduleSection;