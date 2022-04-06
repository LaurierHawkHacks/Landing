import React from "react";
import Styled from "styled-components";

import styled, { keyframes } from "styled-components";

const dropdownAnimationDown = keyframes`
  0% { transform: translateY(0%); } /* slide the dropdown down */
  100% { transform: translateY(30%); }
`;

const dropdownAnimationUp = keyframes`
  0% { transform: translateY(30%); } /* slide the dropdown up */
  100% { transform: translateY(0%); }
`;



// const CardDiv = styled.div`
//   width: 300px;

//   :hover {
//     cursor: pointer;
//     ${ButtonDiv} {
//       animation-name: ${dropdownAnimationDown};
//       animation-duration: 0.3s;
//       animation-fill-mode: forwards;
//     }
//   }
// `;


// const Card = styled.div`
//   margin-top: 1em;
//   background-color: blue;
//   height: 80px;
// `;

// const ButtonDiv = styled.div`
//   margin-top: 1em; /* added margin-top to both the card and button so they would line-up*/

//   position: absolute; /* allows the button div to sit behind the card */
//   top: 0px;
//   z-index: -1; /* allows the button div to sit behind the card */

//   height: 80px;
//   width: inherit;
//   background-color: red;

//   animation-name: ${dropdownAnimationUp};
//   animation-duration: 0.3s;
//   animation-fill-mode: forwards;
// `;

const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
    
    // width: fit-content;
    height: fit-content;
    background: red;
    
    
`;

const Card = styled.div`
    position: relative;
    overflow: hidden;
    
    width: 300px;
    height: fit-content;
    max-height: 100px;
    top: 0;
    
    display: flex;
    flex-direction: row;
    /*   background: red; */
    z-index: 1;
`;

const Image = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: solid black 2px;
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
    width: 100%;
`;

const Role = styled.div`
    width: 100%;
`;

const Description = styled.div`
    position: relative;
    max-height: 0;
    overflow: hidden;
    width: 100%;
    
    background: yellow;
    z-index: -1;

        -moz-transition: top 1s;
        -o-transition: top 1s;
        transition: top 1s;

    // transition: top 1s ease-out; 
    transition: max-height 1s ease-out;

    ${Wrapper}:hover &{
        max-height: 500px;
        transition: max-height 1s ease-in;
    }
`;




export default function TeamMember(props) {
    return (
        // <CardDiv>
        //     <Card>{props.name}</Card>
        //     <ButtonDiv></ButtonDiv>
        // </CardDiv>
        <Wrapper>
            <Card>
                <Image></Image>
                <Header>
                    <Name>{props.name}</Name>
                    <Role>Role 1</Role>
                </Header>
            </Card>
            <Description>Lorem ipsum dipsum</Description>
        </Wrapper>

        /* <div className="wrapper">
        <div className="card"> 
          <img className="card-image" src="" alt=""></img>
          <div className="card-header">
              <div className="class-header__name">Person Name</div>
              <div className="class-header__roles">Position 1</div>
          </div>
        </div>
        
        <div className="card-hover-description">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</div>
        
        </div> */
    );
}

