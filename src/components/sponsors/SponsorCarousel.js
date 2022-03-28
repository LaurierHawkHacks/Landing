import React from 'react';
import { Container, Pagination, Button } from 'react-bootstrap';
import Styled from 'styled-components';
import sponsorData from '../../sponsorData.json'
import placeholder from '../../assets/placeholder_image.svg';

const SponsorCard = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-left: 1em;
    margin-right: 1em;
    margin-bottom: 1em;
    margin-top: 1em;
    padding: 1em;
    
    background: rgba(252, 252, 252, 0.3);
    border-radius: 20px;
    border: 1px solid #0FA3B1;
`;

const SponsorCardImage = Styled.img`
    width: 100%;
    max-width: 300px;
    height: auto;
    margin-bottom: 1em;
`;

const SponsorCardPaging = Styled(Pagination)`
    margin-top: 1em;
    margin-bottom: 1em;    
    display: flex;
    justify-content: center;
    `;
function SponsorCarousel(){
    const [activeCardIndex, setActiveCardIndex] = React.useState(0);

    function handleClick(event){
        event.preventDefault();

        if (event.currentTarget.id === 'prev'){
            setActiveCardIndex(activeCardIndex - 1 < 0 ? sponsorData.gold.length - 1 : activeCardIndex - 1);
        } else if (event.currentTarget.id === 'next'){
            setActiveCardIndex(activeCardIndex + 1 > sponsorData.gold.length - 1 ? 0 : activeCardIndex + 1);
        } else {
            setActiveCardIndex(event.currentTarget.id);            
        }

    }

    return (
        <Container>
            <SponsorCard>
                {sponsorData.gold[activeCardIndex].logo ?
                    <SponsorCardImage src={sponsorData.gold[activeCardIndex].logo} alt={sponsorData.gold[activeCardIndex].company} /> 
                    : <SponsorCardImage src={placeholder} alt={sponsorData.gold[activeCardIndex].name} />
                }
                {/* <h3>{sponsorData.gold[activeCardIndex].company}</h3> */}
                <p>{sponsorData.gold[activeCardIndex].description}</p>
                <Button>Learn more</Button>
            </SponsorCard>
            <SponsorCardPaging>
                <Pagination.Prev id={'prev'} onClick={handleClick}/>
                <Pagination.Item id={0} active={activeCardIndex === 0} onClick={handleClick}>1</Pagination.Item>
                <Pagination.Item id={1} active={activeCardIndex === 1} onClick={handleClick}>2</Pagination.Item>
                <Pagination.Next id={'next'} onClick={handleClick}/>
            </SponsorCardPaging>
        </Container>
    );

}

export default SponsorCarousel;