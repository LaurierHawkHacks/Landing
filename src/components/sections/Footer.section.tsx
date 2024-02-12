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
                <a className="underline link-hover--one" href={links.codeOfConduct}>
                    Code of Conduct
                </a>
                <a className="underline link-hover--one" href={links.becomeASponsor}>
                    Become a Sponsor
                </a>
            </div>
            <p className="mt-4 lg:mt-8 2xl:text-2xl">
                Copyright © {currentYear} HawkHacks
            </p>
        </footer>
    );
};

export { FooterSection };
