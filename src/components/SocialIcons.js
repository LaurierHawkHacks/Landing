import React from "react";
import { MdEmail as Email } from "react-icons/md";
import {
    AiOutlineTwitter as Twitter,
    AiFillInstagram as Instagram,
    AiFillLinkedin as LinkedIn
} from "react-icons/ai";

import {
    SiDevpost as Devpost,
    SiDiscord as Discord,
} from "react-icons/si";

const SocialIcons = ({ size = "24px" }) => {
    return (
        <div className="d-flex align-items-center my-2 px-0 w-auto">
            <a
                href="https://hawkhacks.devpost.com"
                target="_blank"
                rel="noreferrer"
            >
                <Devpost
                    className="mx-2 social-icon"
                    size={size}
                    alt="Devpost social icon"
                />
            </a>

            <a
                href="https://discord.gg/cXn65c6VZ7"
                target="_blank"
                rel="noreferrer"
            >
                <Discord
                    className="mx-2 social-icon"
                    size={size}
                    alt="Discord social icon"
                />
            </a>

            <a
                href="https://instagram.com/wluhawkhacks/"
                target="_blank"
                rel="noreferrer"
            >
                <Instagram
                    className="mx-2 social-icon"
                    size={size}
                    alt="Instagram social icon"
                />
            </a>

            <a
                href="https://twitter.com/wluhawkhacks"
                target="_blank"
                rel="noreferrer"
            >
                <Twitter
                    className="mx-2 social-icon"
                    size={size}
                    alt="Twitter social icon"
                />
            </a>

            <a
                href="https://linkedin.com/company/hawkhacks"
                target="_blank"
                rel="noreferrer"
            >
                <LinkedIn
                    className="mx-2 social-icon"
                    size={size}
                    alt=": social icon"
                />
            </a>

            <a 
                href="mailto:hello@hawkhacks.ca"
                target="_blank"
                rel="noreferrer"
            >
                <Email
                    className="mx-2 social-icon"
                    size={size}
                    alt="Email social icon"
                />
            </a>
        </div>
    );
};

export default SocialIcons;
