import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface Item {
    question: string;
    answer: string;
}

interface Section {
    section: string;
    content: Item[];
}

interface AccordionProps {
    sections: Section[];
}

const Accordion: React.FC<AccordionProps> = ({ sections }) => {
    const [activeIndex, setActiveIndex] = useState<{
        section: number;
        question: number;
    } | null>(null);

    const toggleAccordion = (sectionIndex: number, questionIndex: number) => {
        setActiveIndex((prevIndex) =>
            prevIndex &&
            prevIndex.section === sectionIndex &&
            prevIndex.question === questionIndex
                ? null
                : { section: sectionIndex, question: questionIndex }
        );
    };

    return (
        <div className="py-20">
            {sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-8">
                    <h3 className="mb-4 text-2xl font-bold">
                        {section.section}
                    </h3>
                    <div className="grid gap-5 md:grid-cols-2">
                        {section.content.map((item, questionIndex) => (
                            <div key={questionIndex} className="w-full">
                                <div
                                    className={`flex cursor-pointer select-none items-center justify-between rounded-xl border border-black bg-white p-4 hover:bg-accordionHover ${
                                        activeIndex &&
                                        activeIndex.section === sectionIndex &&
                                        activeIndex.question === questionIndex
                                            ? 'rounded-b-none '
                                            : 'transition-all duration-1000'
                                    }`}
                                    onClick={() =>
                                        toggleAccordion(
                                            sectionIndex,
                                            questionIndex
                                        )
                                    }
                                    role="button"
                                >
                                    <h6 className="text-black">
                                        {item.question}
                                    </h6>
                                    <IoIosArrowDown
                                        className={`transition-transform duration-300 ${
                                            activeIndex &&
                                            activeIndex.section ===
                                                sectionIndex &&
                                            activeIndex.question ===
                                                questionIndex
                                                ? 'rotate-180'
                                                : 'rotate-0'
                                        }`}
                                    />
                                </div>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ${
                                        activeIndex &&
                                        activeIndex.section === sectionIndex &&
                                        activeIndex.question === questionIndex
                                            ? 'max-h-96'
                                            : 'max-h-0 border-none'
                                    } rounded-xl rounded-t-none border border-black bg-deepMarine`}
                                >
                                    {item.answer
                                        .split('\\n')
                                        .map((line, idx, arr) => (
                                            <React.Fragment key={idx}>
                                                <p className="p-2 text-sm text-white">
                                                    {line}
                                                </p>
                                                {idx < arr.length - 1 && <br />}
                                            </React.Fragment>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export { Accordion };
