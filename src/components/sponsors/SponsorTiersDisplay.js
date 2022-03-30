import React from 'react';
import {Container, OverlayTrigger, Tooltip} from 'react-bootstrap';
import Styled from 'styled-components';
import sponsorData from '../../sponsorData.json';
import placeholder from '../../assets/placeholder_image.svg';

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
`;

const SilverSponsorLogo = Styled.img`
    max-width: 200px;    
    margin: 0.5em 0.5em 0.5em 0.5em;
`;

const BronzeSponsorLogo = Styled.img`
    max-width: 150px;
    margin: 0.5em 0.5em 0.5em 0.5em;
`;

function SponsorTiersDisplay() {
// TODO: Fix the logos to be found using the sponsorData.json file.
    return (
        <Container>
            <SponsorSection>
                    {sponsorData.gold.map((sponsor, index) => {
                        return (
                            <OverlayTrigger 
                            key={index} 
                            placement="bottom"
                            overlay={
                                <Tooltip id={`tooltip-${index}`}>
                                    {sponsor.company}
                                </Tooltip>
                            }
                            >
                                {sponsor.logoName 
                                ? <SilverSponsorLogo src={`${SponsorImages[sponsor.logoName]}`} alt={sponsor.company}/> 
                                : <GoldSponsorLogo src={placeholder} alt={sponsor.company}/>}
                            </OverlayTrigger>
                        )}
                        )}
                
            </SponsorSection>
            <SponsorSection>
                    
                    {sponsorData.silver.map((sponsor, index) => {
                        return (
                            <OverlayTrigger 
                            key={index} 
                            placement="bottom"
                            overlay={
                                <Tooltip id={`tooltip-${index}`}>
                                    {sponsor.company}
                                </Tooltip>
                            }
                            >
                                {sponsor.logoName 
                                ? <SilverSponsorLogo src={`${SponsorImages[sponsor.logoName]}`} alt={sponsor.company}/> 
                                : <SilverSponsorLogo src={placeholder} alt={sponsor.company}/>}
                            </OverlayTrigger>
                        )}
                    )}
                
            </SponsorSection>
            <SponsorSection>
                    {sponsorData.bronze.map((sponsor, index) => {
                        return (
                            <OverlayTrigger 
                            key={index} 
                            placement="bottom"
                            overlay={
                                <Tooltip id={`tooltip-${index}`}>
                                    {sponsor.company}
                                </Tooltip>
                            }
                            >
                                {sponsor.logoName 
                                ? <SilverSponsorLogo src={`${SponsorImages[sponsor.logoName]}`} alt={sponsor.company}/> 
                                : <BronzeSponsorLogo src={placeholder} alt={sponsor.company}/>}
                            </OverlayTrigger>
                        )}
                    )}
             
            </SponsorSection>

        </ Container>
    );
}

export default SponsorTiersDisplay;