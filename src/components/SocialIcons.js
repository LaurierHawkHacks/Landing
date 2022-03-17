import React from "react";
import {
  AiOutlineTwitter as Twitter,
  AiFillInstagram as Instagram,
  AiOutlineGithub as Github,
} from 'react-icons/ai';
// eslint-disable-next-line
import { FaFacebookSquare as Facebook } from 'react-icons/fa';

const SocialIcons = () => {
    return (
        <div className="d-flex align-items-center my-2 px-0 w-auto">
            {/* <a href="https://hawkhacks.ca/" target="_blank" rel="noreferrer">
        <Facebook
          className="mx-2 social-icon"
          size="24px"
          alt="Facebook social icon"
        />
      </a> */}
            <a
                href="https://twitter.com/wluhawkhacks"
                target="_blank"
                rel="noreferrer"
            >
                <Twitter
                    className="mx-2 social-icon"
                    size="24px"
                    alt="Twitter social icon"
                />
            </a>
            <a
                href="https://www.instagram.com/wluhawkhacks/"
                target="_blank"
                rel="noreferrer"
            >
                <Instagram
                    className="mx-2 social-icon"
                    size="24px"
                    alt="Instagram social icon"
                />
            </a>

            <a
                href="https://github.com/LaurierHawkHacks"
                target="_blank"
                rel="noreferrer"
            >
                <Github
                    className="mx-2 social-icon"
                    size="24px"
                    alt="Github social icon"
                />
            </a>
        </div>
    );
};

export default SocialIcons;
