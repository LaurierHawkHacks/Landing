import { useState } from "react";

interface AccordionItemProps {
  question: string;
  answers: string[];
}

const AccordionItem = (props: AccordionItemProps) => {
  const [open, setOpen] = useState(false);

  const question = props.question;
  const answers = props.answers
    ? props.answers.map((answer, id) => {
        return (
          <p
            className={`${
              id === props.answers.length - 1 && "mb-8"
            } text-lg font-xlight leading-normal`}
            key={id}
          >
            {answer}
          </p>
        );
      })
    : "";

  const buttonHandler = () => {
    return setOpen((open) => !open);
  };

  return (
    <div className="first:border-t border-b">
      <h2 className="text-xl font-bold uppercase text-white leading-relaxed">
        <button
          onClick={buttonHandler}
          className="relative w-full py-5 pr-12 text-left"
          aria-expanded={open}
        >
          {question}

          <div className="absolute right-0 top-5 ">
            <div className="relative inline-block aspect-square w-8">
              <span
                className={`absolute inset-0 m-auto block h-5 w-1 bg-white transition-all duration-500 ${
                  open && "-rotate-90"
                }`}
              ></span>
              <span
                className={`absolute inset-0 m-auto block h-1 w-5 bg-white transition-all duration-500 ${
                  open && "-rotate-180 opacity-0"
                }`}
              ></span>
            </div>
          </div>
        </button>
      </h2>
      <div
        className={`grid font-light transition-[grid-template-rows] duration-500 ${
          !open ? "grid-rows-[0fr]" : "grid-rows-[1fr]"
        }`}
        role="region"
        aria-hidden={!open}
      >
        <div className="grid gap-6 overflow-hidden">{answers}</div>
      </div>
    </div>
  );
};

export { AccordionItem };
