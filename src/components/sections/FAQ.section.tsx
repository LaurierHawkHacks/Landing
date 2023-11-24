import { Accordion } from "@components";

const FAQSection = () => {
  return (
    <section className="bg-slate-950 text-white">
      <h2 className="mb-10 text-center text-6xl font-bold uppercase">
        Frequently Asked <span className="text-mint">Questions</span>
      </h2>
      <div className="max-w-[62.5rem]">
        <Accordion />
      </div>
    </section>
  );
};

export { FAQSection };
