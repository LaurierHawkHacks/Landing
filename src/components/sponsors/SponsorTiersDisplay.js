import React from "react";
import Styled from "styled-components";
import { Container, OverlayTrigger, Tooltip } from "react-bootstrap";

import sponsorData from "../../data/sponsorData.json";
import placeholder from "../../assets/placeholder_image.svg";
import * as SponsorImages from "../../assets/sponsors/";

const SponsorSection = Styled.div`
    width: 100%;
    height: auto;

    margin-top: 2em;
    margin-bottom: 2em;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

`;

const GoldSponsorLogo = Styled.img`
    width: 100%;
    max-width: 400px;
    margin: 0.5em 0.5em 0.5em 0.5em;

    :hover {
        cursor: pointer;
    }
`;

const SilverSponsorLogo = Styled.img`
    max-width: 300px;    
    margin: 1.5em;

    :hover {
        cursor: pointer;
    }
`;

const BronzeSponsorLogo = Styled.img`
    max-width: 150px;
    margin: 1.5em;

    :hover {
        cursor: pointer;
    }
`;

function SponsorTiersDisplay() {
    return (
        <Container>
            <SponsorSection>
                {sponsorData.gold.map((sponsor, index) => {
                    return (
                       
                        <OverlayTrigger 
                            key={index} 
                            placement="bottom"
                            overlay={
                                <Tooltip id={`tooltip-gold-${index}`}>
                                    {sponsor.company}
                                </Tooltip>
                            }
                        >
                            {sponsor.logoName 
                                ? <GoldSponsorLogo onClick={() => handleClick(sponsor.url)} src={`${SponsorImages[sponsor.logoName]}`} alt={sponsor.company}/> 
                                : <GoldSponsorLogo src={placeholder} alt={sponsor.company}/>}
                        </OverlayTrigger>
                        
                    );}
                )}
                
            </SponsorSection>
            <SponsorSection>
                {sponsorData.silver.map((sponsor, index) => {
                    return (
                        <OverlayTrigger 
                            key={index} 
                            placement="bottom"
                            overlay={
                                <Tooltip id={`tooltip-silver-${index}`}>
                                    {sponsor.company}
                                </Tooltip>
                            }
                        >
                            {sponsor.logoName 
                                ? <SilverSponsorLogo onClick={() => handleClick(sponsor.url)} src={`${SponsorImages[sponsor.logoName]}`} alt={sponsor.company}/> 
                                : <SilverSponsorLogo src={placeholder} alt={sponsor.company}/>}
                        </OverlayTrigger>
                    );}
                )}
                
            </SponsorSection>
            <SponsorSection>
                {sponsorData.bronze.map((sponsor, index) => {
                    return (
                        <OverlayTrigger 
                            key={index} 
                            placement="bottom"
                            overlay={
                                <Tooltip id={`tooltip-bronze-${index}`}>
                                    {sponsor.company}
                                </Tooltip>
                            }
                        >
                            {sponsor.logoName 
                                ? <BronzeSponsorLogo onClick={() => handleClick(sponsor.url)} src={`${SponsorImages[sponsor.logoName]}`} alt={sponsor.company}/> 
                                : <BronzeSponsorLogo src={placeholder} alt={sponsor.company}/>}
                        </OverlayTrigger>
                        
                    );}
                )}
             
            </SponsorSection>
        </Container>
    );
}

const handleClick = (url) => {
    window.open(url, "_blank");
};

export default SponsorTiersDisplay;