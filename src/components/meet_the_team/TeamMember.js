import React from "react";
import styled, { keyframes } from "styled-components";

const dropdownAnimationDown = keyframes`
  0% { 
        visablility: visable;
        opacity: 0;
        max-height: 0;
        transform: translateY(-50%); /* slide the dropdown down */
    } 
  100% { 
        transform: translateY(0%); 
        opacity: 1;
        max-height: 500px;
        visibility: visible;
    }
`;

const dropdownAnimationUp = keyframes`
  0% {
        transform: translateY(0%); 
        opacity: 1;
        max-height: 500px;
        visibility: visible;;
    } 
  100% { 
        visablility: visable;
        opacity: 0;
        max-height: 0;
        transform: translateY(-50%); /* slide the dropdown down */
      
    }
`;

const Wrapper = styled.div`
    position: relative;

    height: fit-content;
    border-radius: 35px;
`;

const Card = styled.div`
    position: relative;
    top: 0;
    display: flex;
    flex-direction: row;

    width: 100%;
    height: fit-content;
    max-height: 100px;
    padding: 3px;
    overflow: hidden;

    border: 2px solid rgba(255, 0, 0, 0);
    border-radius: 35px;
    transition: all 0.2s ease;
    z-index: 1;

    &:hover {
        background: #e4edf2;
        border: 2px solid #0FA3B1;
    }
`;

const Image = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: grey;
    margin-right: 10px;
`;

const Header = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex: 1;
`;

const Name = styled.div`
    font-size: 18px;
    width: 100%;
`;

const Roles = styled.div`
    font-size: 16px;
    width: 100%;
`;

const Description = styled.div`
    position: absolute;
    top: 100%;
    margin-top: 10px;
    padding: 10px;
    max-height: 0;
    overflow: hidden;
    width: 100%; /* same as card */

    font-size: 18px;
    background: #e4edf2;
    border: 1px solid #0fa3b1;
    box-sizing: border-box;
    border-radius: 14px;

    visibility: visible;
    opacity: 0;
    z-index: 2;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    animation-delay: 0s;
    animation-name: ${dropdownAnimationUp};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;

    ${Wrapper}:hover & {
        animation-name: ${dropdownAnimationDown};
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
    }
`;

export default function TeamMember(props) {
    return (
        <Wrapper>
            <Card>
                <Image> </Image>
                <Header>
                    <Name>
                        <b> {props.name} </b>
                    </Name>
                    <Roles>
                        Role X
                        {props.roles.map((x) => {
                            return (
                                <>
                                    {" "}
                                    {x} <br />{" "}
                                </>
                            );
                        })}
                    </Roles>
                </Header>
            </Card>
            <Description> {props.bio} </Description>
        </Wrapper>
    );
}
