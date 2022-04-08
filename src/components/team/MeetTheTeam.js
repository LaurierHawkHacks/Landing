import React from "react";
import styled from "styled-components";
import TeamMember from "./TeamMember";
import teamBios from "../../teamData.json";

const TeamsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const TeamName = styled.div`
    width: 100%;
    font-size: 22px;
`;

const Team = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    padding: 15px 0 5vh 0;
`;

const MeetTheTeam = () => {
    return (
        <div>
            <div className="col-md-9 col-lg-10 col-xl-8 mx-auto">
                <h2 className="font-weight-bold text-center">{"<Meet The Team/>"}</h2>
                <TeamsContainer>
                    {Object.keys(teamBios).map((teamKey) => {
                        return (
                            <>
                                <TeamName key={teamKey}>
                                    <b>{teamKey}</b>
                                </TeamName>
                                <Team>
                                    {teamBios[teamKey].map((memberObject) => {
                                        return (
                                            <TeamMember
                                                key={memberObject.name}
                                                name={memberObject.name}
                                                linkedin={memberObject.linkedin}
                                                instagram={memberObject.ig}
                                                bio={memberObject.bio}
                                                roles={memberObject.roles}
                                                image={memberObject.image}
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

export default MeetTheTeam;
