import {
  HeroIllustration,
  LinkedInIcon,
  TwitterIcon,
  InstagramIcon,
  DiscordIcon,
} from "@assets";

function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight text-white">
      <img 
        className="w-full block mx-auto"
        src={HeroIllustration} 
        alt="Hero Illustration" 
      />
      <div className="mt-[-5.5rem] flex flex-col md:flex-row items-center justify-between px-4 md:px-24">
        <a
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          target="_blank"
          className="mb-4 md:mb-0" // Adjust margin for mobile view
        >
          Code of Conduct
        </a>
        <div className="flex space-x-7 mb-4 md:mb-0">
          <LinkedInIcon />
          <TwitterIcon />
          <InstagramIcon />
          <DiscordIcon />
        </div>
        <div>Copyright © {currentYear} HawkHacks</div>
      </div>
    </footer>
  );
}

export { FooterSection };
