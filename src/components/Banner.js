import React from "react";
import Styled from "styled-components";


const BannerContainer = Styled.div`
    padding-left: 20%;
    padding-right: 20%;
    padding-top: 1em;
    padding-bottom: 1em;

    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0FA3B1;

    @media (max-width: 850px) {
        padding-left: 10%;
        padding-right: 10%;
    }

    
`;
const BannerItem = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

const BannerH2 = Styled.h2`
    height: 70px;
    font-weight: 700;
    font-size: 64px;
    line-height: 77px;

    color: #EBE3E6;
    margin-top: 0;
    margin-bottom: 0;

    @media (max-width: 800px) {
        font-size: 6vw;
    }
`;

const BannerP = Styled.p`
    margin-bottom: 0;
    margin-top: 0;

    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;

    color: #FFFFFF;

    @media (max-width: 800px) {
        font-size: 3vw;
    }

`;

function Banner() {
    return(
        <BannerContainer>
            <BannerItem>
                <BannerH2>$20K+</BannerH2>
                <BannerP>In Prizes</BannerP>
            </BannerItem>
            <BannerItem>
                <BannerH2>36 Hours</BannerH2>
                <BannerP>Of Hacking</BannerP>
            </BannerItem>
            <BannerItem>
                <BannerH2>300+</BannerH2>
                <BannerP>Hackers</BannerP>
            </BannerItem>
        </BannerContainer>
    );
}

export default Banner;