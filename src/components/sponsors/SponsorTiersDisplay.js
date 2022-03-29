import React from 'react';
import {Container, OverlayTrigger, Tooltip} from 'react-bootstrap';
import Styled from 'styled-components';
import sponsorData from '../../sponsorData.json';
import placeholder from '../../assets/placeholder_image.svg';

const SponsorSection = Styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;


`;

const GoldSponsorLogo = Styled.img`
    max-width: 300px;
    margin: 0.5em 0.5em 0.5em 0.5em;
`;

const SilverSponsorLogo = Styled.img`
    max-width: 150px;    
    margin: 0.5em 0.5em 0.5em 0.5em;
`;
const BronzeSponsorLogo = Styled.img`
    max-width: 100px;
    margin: 0.5em 0.5em 0.5em 0.5em;
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
                                <Tooltip id={`tooltip-${index}`}>
                                    {sponsor.company}
                                </Tooltip>
                            }
                            >
                                {sponsor.logo 
                                ? <GoldSponsorLogo src={sponsor.logo} alt={sponsor.company}/> 
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
                                {sponsor.logo 
                                ? <SilverSponsorLogo src={sponsor.logo} alt={sponsor.company}/> 
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
                                {sponsor.logo 
                                ? <BronzeSponsorLogo src={sponsor.logo} alt={sponsor.company}/> 
                                : <BronzeSponsorLogo src={placeholder} alt={sponsor.company}/>}
                            </OverlayTrigger>
                        )}
                    )}
             
            </SponsorSection>

        </ Container>
    );
}

export default SponsorTiersDisplay;