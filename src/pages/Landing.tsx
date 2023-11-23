import {
  HeroSection,
  InfoSection,
  FAQSection,
  Navbar,
  FooterSection,
} from "@components";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <InfoSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export { Landing };
