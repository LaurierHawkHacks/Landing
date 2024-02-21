import {
    MailIcon,
    LinkedInIcon,
    InstagramIcon,
    TwitterIcon,
    FacebookIcon,
    DevpostIcon,
} from '@assets';

const FooterSection = () => {
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
                <a
                    className="underline hover:text-[#0FA3B1] focus:text-[#1D7882]"
                    href="#"
                >
                    Code of Conduct
                </a>
                <a
                    className="underline hover:text-[#0FA3B1] focus:text-[#1D7882]"
                    href="#"
                >
                    Become a Sponsor
                </a>
            </div>
            <p className="mt-4 lg:mt-8 2xl:text-2xl">
                Copyright © 2024 HawkHacks
            </p>
        </footer>
    );
};

export { FooterSection };
