import { FaEnvelope, FaLinkedin, FaDiscord, FaTiktok } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { useState, useEffect } from "react";

interface SocialIconsProps {
    color?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ color = "currentColor" }) => {
    const [iconSize, setIconSize] = useState(40);

    useEffect(() => {
        const handleResize = () => {
            setIconSize(window.innerWidth < 640 ? 32 : 40);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex justify-center items-center space-x-7">
            <a href="mailto:hello@hawkhawks.ca">
                <FaEnvelope size={iconSize} color={color} />
            </a>
            <a href="https://www.linkedin.com/company/hawkhacks/">
                <FaLinkedin size={iconSize} color={color} />
            </a>
            <a href="https://discord.gg/CwQ7mGg98N">
                <FaDiscord size={iconSize} color={color} />
            </a>
            <a href="https://tiktok.com/@hawkhacks">
                <FaTiktok size={iconSize} color={color} />
            </a>
            <a href="https://www.instagram.com/wluhawkhacks/">
                <RiInstagramFill size={iconSize} color={color} />
            </a>
            <a href="https://hawkhacks.devpost.com/">
                <SiDevpost size={iconSize} color={color} />
            </a>
        </div>
    );
};

export { SocialIcons };