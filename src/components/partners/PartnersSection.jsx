import React from "react";
import Styled from "styled-components";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import partnerData from "../../data/partnerData.json";
import placeholder from "../../assets/placeholder_image.svg";

import * as PartnerImages from "../../assets/partners";

const PartnerLogoContainer = Styled.div`
    width: 100%;
    height: auto;

    margin-top: 0.5em;
    margin-bottom: 2em;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

`;

const PartnerLogo = Styled.img`
    max-width: 250px;    
    margin: 0.5em 0.5em 0.5em 0.5em;

    :hover {
        cursor: pointer;
    }
`;

const TextContainer = Styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = Styled.h2`
    text-align: center;
`;
const SubHeading = Styled.p`
    max-width: 700px;
    text-align: center;
`;

function PartnersSection(){
    return(
        <>
            <TextContainer>
                <Heading>{"<Our Partners/>"}</Heading>
                <SubHeading>
                Our team is made up of and supported by all these amazing organisations. Check out all the amazing talent on display!
                </SubHeading>
            </TextContainer>
            <PartnerLogoContainer>
                {partnerData.partners.map((partner, index) => {
                    return(
                        <OverlayTrigger 
                            key={index} 
                            placement="bottom"
                            overlay={
                                <Tooltip id={`tooltip-${index}`}>
                                    {partner.name}
                                </Tooltip>
                            }
                        >
                            {partner.logoName 
                                ? <PartnerLogo onClick={() => handleClick(partner.url)} src={`${PartnerImages[partner.logoName]}`} alt={partner.company}/> 
                                : <PartnerLogo src={placeholder} alt={partner.name}/>}
                        </OverlayTrigger>
                    );
                })}
            </PartnerLogoContainer>
        </>
    );
}

const handleClick = (url) => {
    window.open(url, "_blank");
};

export default PartnersSection;