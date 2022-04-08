import React from 'react';
import { Container, Pagination, Button } from 'react-bootstrap';
import Styled from 'styled-components';
import sponsorData from '../../sponsorData.json'
import placeholder from '../../assets/placeholder_image.svg';

import * as SponsorImages from "../../assets/sponsors/";

const SponsorCard = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin-bottom: 1em;
    margin-top: 1em;
    padding: 1em;
    
    background: rgba(252, 252, 252, 0.3);
    border-radius: 20px;
    border: 1px solid #0FA3B1;

    @media (min-width: 768px) {
        width: 75%;
        margin-left: auto;
        margin-right: auto;
        height: auto;
    }

    @media (min-width: 992px) {
        width: 66.666666%;
        margin-left: auto;
        margin-right: auto;
    }

    @media (min-width: 1200px) {
        width: 58.33333%;
        margin-left: auto;
        margin-right: auto;
    }

`;

const SponsorCardImage = Styled.img`
    width: 100%;
    max-width: 300px;
    height: auto;
    margin-bottom: 1em;
    margin-top: 1em;
`;

const SponsorCardPaging = Styled(Pagination)`
    margin-top: 1em;
    margin-bottom: 1em;    
    display: flex;
    justify-content: center;

    `;

const SponsorCardButton = Styled(Button)`
    margin-left: 0;
    margin-right: 0;
    align-self: flex-start;

    background-color: rgba(0, 0, 0, 0.0);
    border-color: rgba(0, 0, 0, 0.0);
    text-decoration: underline;
    color: #0FA3B1;

    :hover {
        background-color: rgba(0, 0, 0, 0.0);
        border-color: rgba(0, 0, 0, 0.0);
        text-decoration: underline;
        color: var(--color-dark);
    }
`;

const SponsorCardContent = Styled.p`
    margin-top: 1em;
    margin-left: 2em;
    margin-right: 2em;
`;
function SponsorCarousel(){
    // TODO: Fix the logos to be found using the sponsorData.json file.

    const [activeCardIndex, setActiveCardIndex] = React.useState(0);

    function handleClick(event){
        event.preventDefault();

        console.log("id: ", event.target.id);
        console.log("Current active index: ", activeCardIndex);
        console.log("gold arrray len: ", sponsorData.gold.length)

        if (event.currentTarget.id === 'prev'){
            setActiveCardIndex(activeCardIndex - 1 < 0 ? sponsorData.gold.length - 1 : activeCardIndex - 1);
        } else if (event.currentTarget.id === 'next'){
            
            setActiveCardIndex(activeCardIndex + 1 > sponsorData.gold.length - 1 ? 0 : activeCardIndex + 1);
            
            console.log("result: ", activeCardIndex + 1 > sponsorData.gold.length - 1 ? 0 : activeCardIndex + 1);
            console.log("Next hit, new index: ", activeCardIndex);
        } else {
            setActiveCardIndex(Number(event.currentTarget.id));            
        }

    }

    return (
        <Container>
            <SponsorCard>
                {sponsorData.gold[activeCardIndex].logoName ?
                    <SponsorCardImage src={SponsorImages[sponsorData.gold[activeCardIndex].logoName]} alt={sponsorData.gold[activeCardIndex].company} /> 
                    : <SponsorCardImage src={placeholder} />
                }
                <SponsorCardContent>{sponsorData.gold[activeCardIndex].description}</SponsorCardContent>
                <SponsorCardButton target="_blank" href={sponsorData.gold[activeCardIndex].url}>Learn more</SponsorCardButton>
            </SponsorCard>
            <SponsorCardPaging>
                <Pagination.Prev id={'prev'} onClick={handleClick}/>
                {sponsorData.gold.length > 0 ? <Pagination.Item id={0} active={activeCardIndex === 0 ? true : false} onClick={handleClick}>1</Pagination.Item> : null}
                {sponsorData.gold.length > 1 ? <Pagination.Item id={1} active={activeCardIndex === 1 ? true : false} onClick={handleClick}>2</Pagination.Item> : null}
                {sponsorData.gold.length > 2 ? <Pagination.Item id={2} active={activeCardIndex === 2 ? true : false} onClick={handleClick}>3</Pagination.Item> : null}
                <Pagination.Next id={'next'} onClick={handleClick}/>
            </SponsorCardPaging>
        </Container>
    );

}

export default SponsorCarousel;