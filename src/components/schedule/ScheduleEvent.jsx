import React from "react";
import Styled from "styled-components";


const EventTitle = Styled.h3`
    color: #0A6972;
    margin-bottom: 0em;
    font-size: 1em;

    @media (max-width: 650px) {
        font-size: 1em;
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
    border-radius: 50px;

    ${props => props.tagStyle === "Hopin" && "background: #DB8E58;"}
    ${props => props.tagStyle === "Discord" && "background: #8C6DC5;"}
    ${props => props.tagStyle === "Important Deadline" && "background: #3CC580;"}

    ${props => props.tagStyle === "Mandatory" && "background: #FF312E;"}
    ${props => props.tagStyle === "Mandatory / Hopin" && "background: #FF312E;"}
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
            <EventTag tagStyle={tagText}>{tagText}</EventTag>
        </EventContainer>
    );
}

export default ScheduleEvent;