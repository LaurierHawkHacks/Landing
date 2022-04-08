import React from "react";
import styled, { keyframes } from "styled-components";
import TeamMember from "./TeamMember";
import teamBios from "../../teamBios.json";

const TeamsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const TeamName = styled.div`
    width: 100%;
    font-size: 22px;
    // color: red;
`;

const Team = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    padding-bottom: 7vh;
`;

const MeetTheTeam = () => {
    return (
        <div>
            <div className="col-md-9 col-lg-10 col-xl-8 mx-auto">
                <h2 className="font-weight-bold text-center">Meet The Team</h2>
                <TeamsContainer>
                    {Object.keys(teamBios).map((teamKey, i) => {
                        return (
                            <>
                                <TeamName>
                                    <b>{teamKey}</b>
                                </TeamName>
                                <Team>
                                    {teamBios[teamKey].map((memberObject, i) => {
                                        return (
                                            <TeamMember
                                                name={memberObject.name}
                                                bio={memberObject.bio}
                                                roles={memberObject.roles}
                                            />
                                        );
                                    })}
                                </Team>
                            </>
                        );
                    })}
                </TeamsContainer>
            </div>
        </div>
    );
};

{
    /* <TeamName> Development Team </TeamName>
    <Team>
        <TeamMember name="GongKong" />
        <TeamMember name="GongKong" />
        <TeamMember name="GongKong" />
        <TeamMember name="GongKong" />
    </Team> */
}

export default MeetTheTeam;
