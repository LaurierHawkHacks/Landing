import React from "react";
import Styled from "styled-components";
// import { PopupButton } from "@typeform/embed-react";
import { Button } from "react-bootstrap";

const HeroButtonPrimary = Styled(Button)`
    color: white;
    background-color: #0fa3b1;
    border-width: 0;
    font-weight: 600;
    font-size: 1rem;
`;

// const HeroButtonSponsor = Styled(Button)`
//     color: #2f4858;
//     background-color: #eddadd;
//     border-width: 0;
//     font-weight: 600;
// `;

// const HeroButtonMentor = Styled(PopupButton)`
//     color: #2f4858;
//     background-color: #eddadd;
//     border-width: 0;
//     font-weight: 600;
// `;

const HeroButtons = () => {
    return (
        <div
            id="home-buttons"
            className="d-flex flex-column flex-sm-row w-100 px-4 justify-content-center"
        >
            {/* <HeroButtonSponsor
                size="sm"
                onClick={() => window.open("https://hawkhacks.ca/sponsorships.pdf", "_blank")}
                className="my-2"
            >
                Sponsor Us!
            </HeroButtonSponsor> */}
            
            <HeroButtonPrimary 
                className="py-2 px-5 my-1 btn btn-primary btn-sm"
                onClick={() => window.open("https://hawkhacks.devpost.com/project-gallery", "_blank")}
            >
                Our Winners!
            </HeroButtonPrimary>

            {/* <HeroButtonMentor id="ZAfURzED" className="my-2 btn btn-primary btn-sm">
                Become a Mentor!
            </HeroButtonMentor> */}
        </div>
    );
};

export default HeroButtons;
