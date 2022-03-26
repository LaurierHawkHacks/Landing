import React from 'react';
import {Container, OverlayTrigger, Tooltip} from 'react-bootstrap';
import Styled from 'styled-components';
import sponsorData from '../../sponsorData.json';

const SponsorSection = Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 3em;
    margin-right: 3em;

`;

const GoldSponsorLogo = Styled.div`
    margin-right: 1em;
    margin-left: 1em;
`;

const SilverSponsorLogo = Styled.div`
    margin-right: 1em;
    margin-left: 1em;
`;
const BronzeSponsorLogo = Styled.div`
    margin-right: 1em;
    margin-left: 1em;
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
                                <GoldSponsorLogo >
                                    <p>{sponsor.Company}</p>
                                    <img src={sponsor.logo} alt={sponsor.company} />
                                </GoldSponsorLogo>
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
                                <SilverSponsorLogo>
                                    <img src={sponsor.logo} alt={sponsor.company} />
                                </SilverSponsorLogo>
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
                                <BronzeSponsorLogo key={index}>
                                    <img src={sponsor.logo} alt={sponsor.company} />
                                </BronzeSponsorLogo>
                            </OverlayTrigger>
                        )}
                    )}
             
            </SponsorSection>

        </ Container>
    );
}

export default SponsorTiersDisplay;