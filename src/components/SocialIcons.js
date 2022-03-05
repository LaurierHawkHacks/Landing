import React from 'react';
import {
  AiOutlineTwitter as Twitter,
  AiFillInstagram as Instagram,
  AiOutlineGithub as Github,
} from 'react-icons/ai';
import { FaFacebookSquare as Facebook } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="d-flex align-items-center my-2">
      <Facebook
        className="mx-2 social-icon"
        size="24px"
        alt="Facebook social icon"
      />
      <Twitter
        className="mx-2 social-icon"
        size="24px"
        alt="Twitter social icon"
      />
      <Instagram
        className="mx-2 social-icon"
        size="24px"
        alt="Instagram social icon"
      />
      <Github
        className="mx-2 social-icon"
        size="24px"
        alt="Github social icon"
      />
    </div>
  );
};

export default SocialIcons;
