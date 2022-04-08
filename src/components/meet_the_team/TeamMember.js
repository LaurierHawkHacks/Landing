import React from "react";
import styled, {
    keyframes
} from "styled-components";

const dropdownAnimationDown = keyframes `
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

const dropdownAnimationUp = keyframes `
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

const Wrapper = styled.div `
    position: relative;
    
    // width: fit-content;
    height: fit-content;
    
    
`;

const Card = styled.div `
    position: relative;
    overflow: hidden;
    
    width: 300px;
    width: 100%;
    height: fit-content;
    max-height: 100px;
    top: 0;
    padding: 5px;
    
    background: #E4EDF2;
    border: 1px solid #0FA3B1;
    border-radius: 35px;

    display: flex;
    flex-direction: row;
     
    z-index: 1;
`;

const Image = styled.div `
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: grey;
    margin-right: 10px;
`;

const Header = styled.div `
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex: 1;
`;

const Name = styled.div `
    font-size: 18px;
    width: 100%;
`;

const Role = styled.div `
    width: 100%;
`;

const Description = styled.div `
    visibility: visible;
    opacity: 0;
    
    position: absolute;
    top: 100%;

    max-height: 0;
    overflow: hidden;
    width: 300px; /* same as card */
    width: 100%; /* same as card */

    margin-top: 10px;
    padding: 10px;
    background: #E4EDF2;

    border: 1px solid #0FA3B1;
    box-sizing: border-box;
    border-radius: 14px;

    z-index: 2;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    animation-delay: 0s;
    animation-name: ${dropdownAnimationUp};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;

    ${Wrapper}:hover &{
        // max-height: 500px;
        animation-name: ${dropdownAnimationDown};
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
    }
`;

export default function TeamMember(props) {
    return ( <
        Wrapper >
        <
        Card >
        <
        Image > < /Image> <
        Header >
        <
        Name > < b > {
            props.name
        } < /b> </Name >
        <
        Role > Role X {
            props.roles.map((x) => {
                        return ( <
                            > {
                                x
                            } < br / > < />)
                        })
                }

                <
                /Role> <
                /Header> <
                /Card> <
                Description > {
                    props.bio
                } < /Description> <
                /Wrapper>
        );
    }