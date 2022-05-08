import React from "react";
import styled from "styled-components";
import Judge from "./Judge.js";
import judgeBios from "../../data/judgeData.json";

const JudgeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Team = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    padding: 15px 0 5vh 0;
`;

const MeetTheJudges = () => {
    return (
        <div>
            <div className="col-md-9 col-lg-10 col-xl-8 mx-auto">
                <h2 className="font-weight-bold text-center">{"<Our Judges/>"}</h2>
                <JudgeContainer>
                    <Team>
                        {judgeBios.map((judgeObject) => {
                            return (
                                <Judge
                                    key={judgeObject.name}
                                    name={judgeObject.name}
                                    position={judgeObject.position}
                                    company={judgeObject.company}
                                    image={judgeObject.image}
                                />
                            );
                        })}
                    </Team>

                </JudgeContainer>
            </div>
        </div>
    );
};

export default MeetTheJudges;
