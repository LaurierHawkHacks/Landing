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
      <img className="-mt-2" src={HeroIllustration} alt="Hero Illustration" />
      <div className="mt-[-5.5rem] flex items-center justify-between px-24">
        <a
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          target="_blank"
        >
          Code of Conduct
        </a>
        <div className="space-x-7">
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
