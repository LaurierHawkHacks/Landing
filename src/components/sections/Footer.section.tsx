import {
    MailIcon,
    LinkedInIcon,
    InstagramIcon,
    TwitterIcon,
    FacebookIcon,
    DevpostIcon,
} from '@assets';

const FooterSection = () => {
    const currentYear = new Date().getFullYear();
    const links = {
        codeOfConduct: '#',
        becomeASponsor: '#',
    };

    return (
        <footer>
            <div className="socials">
                <MailIcon />
                <LinkedInIcon />
                <InstagramIcon />
                <TwitterIcon />
                <FacebookIcon />
                <DevpostIcon />
            </div>
            <div className="links">
                <a href={links.codeOfConduct}>Code of Conduct</a>
                <a href={links.becomeASponsor}>Become a Sponsor</a>
            </div>
            <p>Copyright © {currentYear} HawkHacks</p>
        </footer>
    );
};

export { FooterSection };
