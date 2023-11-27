import {
  HeroIllustration,
  LinkedInIcon,
  TwitterIcon,
  InstagramIcon,
  DiscordIcon,
} from "@assets";

function FooterSection() {
  return (
    <footer className="bg-midnight text-white">
      <img className="-mt-2" src={HeroIllustration} alt="Hero Illustration" />
      <div className="mt-[-5.5rem] flex justify-center space-x-7">
        <LinkedInIcon />
        <TwitterIcon />
        <InstagramIcon />
        <DiscordIcon />
      </div>
    </footer>
  );
}

export { FooterSection };
