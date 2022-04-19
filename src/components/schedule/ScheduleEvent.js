import React from "react";
import Styled from "styled-components";


const EventTitle = Styled.h3`
    color: #0A6972;
    margin-bottom: 0em;

    @media (max-width: 650px) {
        font-size: 1.5em;
    }
`;

const EventSubtitle = Styled.p`
    font-style: italic;
    margin-top: 0.1em;
    margin-bottom: 0.1em; 
    
    @media (max-width: 650px) {
        font-size: 0.8em;
    }
`;

const EventTime = Styled.p`
    margin-top: 0.1em;
    margin-bottom: 0em;

    color: #2F4858;
`;

const EventTag = Styled.p`
    color: white;
    font-weight: 600;
    font-size: 14px;

    padding-left: 1em;
    padding-right: 1em;

    background: #0FA3B1;
    border-radius: 50px;
`;

const EventContainer = Styled.div`
    margin-top: 0.5em;
    margin-bottom: 0.5em;

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;



function ScheduleEvent({timeStr, title, subtitle, tagText}){
    return(
        <EventContainer>
            <EventTime>{timeStr}</EventTime>
            <EventTitle>{title}</EventTitle>
            <EventSubtitle>{subtitle}</EventSubtitle>
            <EventTag>{tagText}</EventTag>
        </EventContainer>
    );
}

export default ScheduleEvent;