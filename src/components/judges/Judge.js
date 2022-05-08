import React from "react";
import styled from "styled-components";
import * as JudgeImages from "../../assets/judges";
import placeholder from "../../assets/placeholder_headshot.svg";

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
    padding: 3px 3px 4px 3px;
    overflow: hidden;

    
    border: 1px solid rgba(255, 0, 0, 0);
    border-radius: 35px;
    transition: all 0.2s ease;
    z-index: 1;

    &:hover {
        border-color: #0fa3b1;
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


export default function Judge(props) {
    return (
        <Wrapper>
            <Card>
                <Image key={props.image} src={JudgeImages[props.image] === undefined ? placeholder : JudgeImages[props.image]} />
                <Header>
                    <Name>
                        <b> {props.name} </b>
                    </Name>
                    <Roles>
                        {props.position} |  {props.company}
                    </Roles>
                </Header>
            </Card>

        </Wrapper>
    );
}
