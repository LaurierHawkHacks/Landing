import { Accordion, AccordionItem } from "@components";

const FAQSection = () => {
  const faqs = [
    {
      question: "🤔 So, what exactly is a hackathon?",
      answers: ["A hackathon is made up of two sections - a social coding event where programmers, designers, and developers collaborate in teams to solve a problem. You can either create that falls under a category hack, or make whatever your heart desires as a general hack.", "The second section is networking events, seminars, and presentations that happen throughout the hackathon conducted by industry and academic professionals - if you’ve been putting off learning that one programming language for a while, now might be the time to learn!"],
    },
    {
      question: "🕒 Cool! When and where is HawkHacks happening?",
      answers: ["HawkHacks will take place for 36 hours, starting on May 13th, Friday @ 6PM EDT all the way till  May 15th, Sunday @ 2PM EDT.", "HawkHacks is a fully virtual event, meaning everything will be hosted and managed through Hopin, Discord, and Twitch!"],
    },
    {
      question: "💰 That sounds good and all, but how much does it cost?",
      answers: ["Nothing! Free! Nada! Due to our amazing sponsors and support systems, attending and participating at HawkHacks is absolutely free!"],
    },
  ];

  const AccordionItems = faqs.map((faq, index) => (
    <AccordionItem
      key={index}
      id={index}
      question={faq.question}
      answers={faq.answers}
    />
  ));

  return (
    <section className="bg-slate-950 text-white">
      <h2 className="mb-10 text-center text-6xl font-bold uppercase">
        Frequently Asked <span className="text-mint">Questions</span>
      </h2>
      <Accordion>{AccordionItems}</Accordion>
    </section>
  );
};

export { FAQSection };
