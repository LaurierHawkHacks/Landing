import React from "react";
import styled, { keyframes } from "styled-components";
import TeamMember from "./TeamMember";


const TeamsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const TeamName = styled.div`
    width: 100%;
    font-size: 20px;
    color: red;
`;

const Team = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    
`;


const MeetTheTeam = () => {
    return (

        <div>
            <div className="col-md-9 col-lg-8 col-xl-7 mx-auto">
                <h2 className="font-weight-bold text-center">Meet The Team</h2>
                <div>Subtitle</div>
                <TeamsContainer>
                    <TeamName> Development Team </TeamName>
                    <Team>
                        <TeamMember name="GongKong" />
                        <TeamMember name="GongKong" />
                        <TeamMember name="GongKong" />
                        <TeamMember name="GongKong" />
                        <TeamMember name="GongKong" />
                        <TeamMember name="GongKong" />
                        <TeamMember name="GongKong" />
                        <TeamMember name="GongKong" />
                    </Team>
                </TeamsContainer>
            </div>
        </div>
        // <div>
        //     <div className="col-md-9 col-lg-8 col-xl-7 mx-auto">
        //         <h2 className="font-weight-bold text-center">Meet The Team</h2>
        //         <div>Subtitle</div>
        //         <div className="teams-container">
        //             <div className="team-name"></div>
        //             <div className="team">
        //                 <TeamMember />
        //                 <div className="team-member"></div>
        //                 <div className="team-member"></div>
        //                 <div className="team-member"></div>
        //             </div>

        //             <div className="team-name"></div>
        //             <div className="team">
        //                 <div className="team-member"></div>
        //                 <div className="team-member"></div>
        //                 <div className="team-member"></div>
        //             </div>

        //         </div>

        //     </div>
        // </div>
    );

}

export default MeetTheTeam;