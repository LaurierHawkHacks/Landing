import { Accordion } from "@components";

const FAQSection = () => {
  return (
    <section className="bg-midnight text-white">
      <h2 className="mb-10 text-center font-bold uppercase">
        Frequently Asked
        <span className="text-5xl font-bold text-mint"> Questions</span>
      </h2>
      <div className="mx-auto max-w-[62.5rem]">
        <Accordion />
      </div>
    </section>
  );
};

export { FAQSection };
