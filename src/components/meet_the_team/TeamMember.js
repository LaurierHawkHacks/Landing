import React from "react";
import Styled from "styled-components";


const MemberCardContainer = Styled.div`

`;

const MemberCardImage = Styled.div`
border
`;

const MemberCardContent = Styled.p1`

`;


function TeamMember({ name, position, image, bio, linkedin }) {

    return(
        <MemberCardContainer>
            <MemberCardImage src={image}/>
            <MemberCardContent>
                <p>{name}</p>
                <p>{position}</p>
            </MemberCardContent>
        </MemberCardContainer>
    );
} 

export default TeamMember;