import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface AccordionProps {
    items: { question: string; answer: string }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="py-20 grid md:grid-cols-2 gap-5">
            {items.map((item, index) => (
                <div key={index} className="w-full">
                    <div
                        className={`cursor-pointer flex justify-between items-center p-4 bg-white border-black rounded-xl border ${
                          activeIndex === index ? 'rounded-b-none' : ''
                        }`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <h6 className="text-black">{item.question}</h6>
                        <span
                          className={`${
                            activeIndex === index ? 'animate-rotateUp' : 'animate-rotateDown'
                          }`}
                        >
                          <IoIosArrowDown />
                        </span>
                    </div>

                    {activeIndex === index && (
                        <div className="p-5 bg-deepMarine border-black rounded-xl rounded-t-none border">
                            {item.answer.split('\\n').map((line, idx, arr) => (
                                <React.Fragment key={idx}>
                                    <p className="text-white text-sm">
                                      <span className="text-white">‣ </span>
                                      { line }
                                    </p>
                                    {idx < arr.length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export { Accordion };