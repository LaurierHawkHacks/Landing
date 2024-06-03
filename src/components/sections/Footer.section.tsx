import { SocialIcons } from "@components";

/*
 *
 * @description Footer section
 * @props {void}
 * 
 */
const FooterSection: React.FC = () => {
    return (
        <footer className="px-4 text-center bg-footerBg py-20">
            <div className="flex justify-center items-center pb-10">
                <SocialIcons color="white"/>
            </div>

            <div className="links flex flex-col items-center gap-3 sm:flex-row sm:justify-center pb-5">
                <a
                    className="underline text-white hover:text-[#0FA3B1] focus:text-[#1D7882] mb-2 sm:mb-0"
                    href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                    target="_blank"
                    rel="noreferrer"
                >
                    Code of Conduct
                </a>

                <a
                    className="underline text-white hover:text-[#0FA3B1] focus:text-[#1D7882]"
                    href="https://hawkhacks.ca/sponsorships.pdf"
                    target="_blank"
                    rel="noreferrer"
                >
                    Become a Sponsor
                </a>
            </div>
            
            <p className="mt-4 lg:mt-8 2xl:text-2xl text-white">
                Copyright © 2024 HawkHacks
            </p>
        </footer>
    );
};

export { FooterSection };