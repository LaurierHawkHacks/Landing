import React from "react";
import Styled from "styled-components";
import { PlaceholderHeadshot } from "../../assets";

const MemberCardContainer = Styled.div`
    display: flex;
    align-items: center;
    
    background-color: rgb(0, 0, 0, 0.0);
    height: auto;

    :hover {
        background-color: #ffffff;
        border: 1px solid #0FA3B1;
        box-sizing: border-box;
        border-radius: 86px;
        cursor: pointer;
    }
`;

const MemberCardImage = Styled.img`

    width: 70px;
    height: 70px;
    boarder-radius: 50%;

    margin-left: 5px;
    margin-right: 1em;
    margin-top: 5px;
    margin-bottom: 5px;
`;

const MemberCardContent = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

`;

const MemberName = Styled.p`
    margin-top: 0;
    margin-bottom: 0;
    font-weight: bold;
`;

const MemberPosition = Styled.p`
    margin-top: 0;
    margin-bottom: 0;
`;

const BioCardContainer = Styled.div`

`;

const CardContainer = Styled.div`
    max-width: 450px;
`;

const CardButton = Styled.div`

`;

function TeamMember({ name, position, image, bio, linkedin }) {

    function handleClick() {
        
    }

    return(
        <CardContainer>
            <MemberCardContainer onClick={handleClick}>
                <MemberCardImage src={image ? image : PlaceholderHeadshot}/>
                <MemberCardContent>
                    <MemberName>{name}</MemberName>
                    <MemberPosition>{position}</MemberPosition>
                </MemberCardContent>
            </MemberCardContainer>
        
            {/* <BioCardContainer>
                <p>{bio}</p>
            </BioCardContainer> */}
        </CardContainer>
    );
} 

export default TeamMember;