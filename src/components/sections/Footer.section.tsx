import {
    HeroIllustration,
    LinkedInIcon,
    TwitterIcon,
    InstagramIcon,
    DiscordIcon,
} from '@assets';

function FooterSection() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-midnight text-white">
            <img
                className="w-full block mx-auto"
                src={HeroIllustration}
                alt="Hero Illustration"
            />
            <div className="bg-[#01082d] flex flex-wrap gap-x-6 items-center justify-between text-xs px-6 pb-2 sm:px-8 md:px-24">
                <div className="md:text-base">© {currentYear} HawkHacks</div>
                <a
                    href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                    target="_blank"
                    className="text-xs md:text-base"
                >
                    Code of Conduct
                </a>
                <div className="space-x-4">
                    <LinkedInIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                    <DiscordIcon />
                </div>
            </div>
        </footer>
    );
}

export { FooterSection };
