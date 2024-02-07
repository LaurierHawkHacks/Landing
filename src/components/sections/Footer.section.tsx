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
        <footer className="p-4 sm:text-center">
            <div className="sm:space-x-2 md:space-x-3">
                <MailIcon />
                <LinkedInIcon />
                <InstagramIcon />
                <TwitterIcon />
                <FacebookIcon />
                <DevpostIcon />
            </div>
            <div className="links flex flex-col sm:flex-row sm:justify-center sm:gap-3 ">
                <a href={links.codeOfConduct}>Code of Conduct</a>
                <a href={links.becomeASponsor}>Become a Sponsor</a>
            </div>
            <p className="pt-4 lg:pt-8">Copyright © {currentYear} HawkHacks</p>
        </footer>
    );
};

export { FooterSection };
