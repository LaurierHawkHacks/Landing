import { useState } from "react";

interface AccordionValue {
  id: number;
  question: string;
  answers: string[];
}

const AccordionItem = (props: AccordionValue) => {
  const [open, setOpen] = useState(false);

  const id = props.id;
  const question = props.question;
  const answers = props.answers
    ? props.answers.map((answer, id) => {
        return (
          <p
            className={`${
              id === props.answers.length - 1 && "mb-8"
            } text-3xl font-light leading-normal`}
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

  const showAnswerCSS = {
    gridTemplateRows: !open ? "0fr" : "1fr",
    transition: "grid-template-rows 500ms",
  };

  return (
    <div
      className={`accordion-item  ${
        id === props.answers.length ? "border-y" : "border-t"
      }`}
      key={id}
    >
      <h2
        className="text-3xl font-bold uppercase text-white"
      >
        <button
          onClick={buttonHandler}
          className="relative w-full py-5 pr-12 text-left"
          aria-expanded={open}
          aria-controls={`panel-content-${id}`}
        >
          {question}

          <div className="absolute right-0 top-5 ">
            <div className="relative inline-block aspect-square w-8">
              <span
                className={`absolute inset-0 m-auto block h-5 w-1 bg-white transition-all duration-300 ${
                  open && "-rotate-90"
                }`}
              ></span>
              <span
                className={`absolute inset-0 m-auto block h-1 w-5 bg-white transition-all duration-300 ${
                  open && "-rotate-180 opacity-0"
                }`}
              ></span>
            </div>
          </div>
        </button>
      </h2>
      <div
        id={`panel-content-${id}`}
        className="grid font-light"
        style={showAnswerCSS}
        role="region"
        aria-hidden={!open}
      >
        <div className="grid gap-8 overflow-hidden">{answers}</div>
      </div>
    </div>
  );
};

export { AccordionItem };
