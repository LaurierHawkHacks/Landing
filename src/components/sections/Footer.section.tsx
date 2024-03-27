import { SocialIcons } from "@components";

const FooterSection = () => {
    return (
        <footer className="px-4 text-center bg-darkViolet py-20">
            <div className="flex justify-center items-center pb-6">
                <SocialIcons />
            </div>
            <div className="links flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a
                    className="underline text-weirdViolet hover:text-[#0FA3B1] focus:text-[#1D7882] mb-2 sm:mb-0" // Added mb-2 for spacing between links on mobile
                    href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                >
                    Code of Conduct
                </a>
                <a
                    className="underline text-weirdViolet hover:text-[#0FA3B1] focus:text-[#1D7882]"
                    href=""
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