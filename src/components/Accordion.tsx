// components/Accordion.tsx
import React, { useState } from 'react';

interface AccordionProps {
  items: { question: string; answer: string }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="py-20 flex flex-wrap">
      {items.map((item, index) => (
        <div key={index} className="px-3 w-full md:w-1/2 mb-5">
          <div
            className={`cursor-pointer flex justify-between items-center p-2 bg-white border-black rounded-xl border ${
              activeIndex === index ? 'rounded-b-none' : ''
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <h6 className="text-black">{item.question}</h6>
            <span>{activeIndex === index ? '^' : '⌄'}</span>
          </div>
          {activeIndex === index && (
            <div className="p-2 bg-deepMarine border-black rounded-xl rounded-t-none border">
              <h6 className="text-white">{item.answer}</h6>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;



