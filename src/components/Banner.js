import React from "react";
import Styled from "styled-components";
import CountUp from "react-countup";

const BannerContainer = Styled.div`
    padding-left: 20%;
    padding-right: 20%;
    padding-top: 1em;
    padding-bottom: 1em;

    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0FA3B1;

    padding-left: 10%;
    padding-right: 10%;


    
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
    font-size: 3vw;
    line-height: 77px;

    color: #EBE3E6;
    margin-top: 0;
    margin-bottom: 0;


`;

const BannerP = Styled.p`
    margin-bottom: 0;
    margin-top: 0;

    font-style: normal;
    font-weight: 400;
    font-size: 1.5vw;
    line-height: 30px;

    color: #FFFFFF;


`;

function Banner() {
    return(
        <BannerContainer>
            <BannerItem>
                <BannerH2>${<CountUp end={20} duration={1.0} />}K+</BannerH2>
                <BannerP>In Prizes</BannerP>
            </BannerItem>
            <BannerItem>
                <BannerH2>{<CountUp end={36} duration={1.5}/>} Hours</BannerH2>
                <BannerP>Of Hacking</BannerP>
            </BannerItem>
            <BannerItem>
                <BannerH2>{<CountUp end={650} duration={2.0}/>}+</BannerH2>
                <BannerP>Hackers</BannerP>
            </BannerItem>
        </BannerContainer>
    );
}

export default Banner;