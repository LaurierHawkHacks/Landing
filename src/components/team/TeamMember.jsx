import React from "react";
import styled from "styled-components";
import * as TeamImages from "../../assets/team";

const Wrapper = styled.div`
    position: relative;
    height: fit-content;
    border-radius: 35px;
    // &:hover {
    //     background: #0fa3b1;
    // }
`;

const Card = styled.div`
    position: relative;
    top: 0;
    display: flex;
    flex-direction: row;

    width: 100%;
    height: fit-content;
    padding: 5px;
    overflow: hidden;

    border: 1px solid rgba(255, 0, 0, 0);
    border-radius: 35px;
    transition: all 0.3s ease;
    z-index: 1;

    ${Wrapper}:hover &{
        background: #0fa3b1;
    }
`;

const Image = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: grey;
    margin-right: 10px;
    object-fit: cover;
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    flex: 1;
    z-index: 1;
`;

const Name = styled.div`
    font-size: 16px;
    width: 100%;
    line-height: 20px;
`;

const Roles = styled.div`
    font-size: 14px;
    width: 100%;
`;

const Description = styled.div`

    box-sizing: border-box;
    display: block;
    position: absolute;
    top: 0;
    padding: 10px;
    width: 100%; /* same as card */

    font-size: 14px;
    background: #D2E6EF;
    color: white;
    border-bottom: 2px solid #0fa3b1;
    z-index: -1;
    opacity: 0;


    ${Wrapper}:hover & {
        display: block;
        top: 100%;
        opacity: 100%;
        z-index: 2;

        transition: opacity 0.4s ease;
    }
`;

export default function TeamMember(props) {
    return (
        <Wrapper>
            <Card>
                <Image key={props.image} src={TeamImages[props.image]} />
                <Header>
                    <Name>
                        <b> {props.name} </b>
                    </Name>
                    <Roles>
                        {props.roles.map((x) => {
                            return (
                                <>
                                    <em>{x}</em><br />
                                </>
                            );
                        })}
                    </Roles>
                </Header>
            </Card>
            <Description>
                {<a href={props.linkedin}
                    target="_blank"
                    style={{ wordWrap: "break-Word" }}
                    rel="noreferrer"
                >
                    {"LinkedIn"}
                </a>
                }

                {props.instagram ? " | " : ""}
                {props.instagram ? <a
                    href={props.instagram}
                    target="_blank"
                    style={{ wordWrap: "break-Word" }}
                    rel="noreferrer"
                >
                    {"Instagram"}
                </a> : ""
                }

                {props.otherLink ? " | " : ""}
                {props.otherLink ? <a
                    href={props.otherLink}
                    target="_blank"
                    style={{ wordWrap: "break-Word" }}
                    rel="noreferrer"
                >
                    {"Website"}
                </a> : ""
                }

                <p style={{ marginBottom: "8px" }}>{props.bio}</p>
            </Description>
        </Wrapper>
    );
}
