import { Accordion } from "@components";

const FAQSection = () => {
  return (
    <section className="bg-midnight text-white ">
      <h2 className="mb-10 pt-12 text-center font-bold uppercase">
        Frequently Asked <span className="text-mint text-5xl font-bold">Questions</span>
      </h2>
      <div className="max-w-[62.5rem] mx-auto">
        <Accordion />
      </div>
    </section>
  );
};

export { FAQSection };
