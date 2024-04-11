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
                    <h3 className="mb-6 text-3xl font-bold capitalize text-white drop-shadow-md md:mb-8">
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
                                            : 'transition-all duration-300'
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
                                    className={`overflow-hidden transition-all duration-300 ${
                                        activeIndex &&
                                        activeIndex.section === sectionIndex &&
                                        activeIndex.question === questionIndex
                                            ? 'max-h-full'
                                            : 'max-h-0 border-none'
                                    } rounded-xl rounded-t-none border border-black bg-deepMarine`}
                                >
                                    {item.answer
                                        .split('\\n')
                                        .map((line, idx, arr) => (
                                            <React.Fragment key={idx}>
                                                {line.includes('<a ') ? (
                                                    <p className="px-4 py-2 text-sm text-white">
                                                        <span
                                                            dangerouslySetInnerHTML={{
                                                                __html: line.replace(
                                                                    '<a ',
                                                                    `<a style="font-size: 0.875rem; text-decoration: underline;" target="_blank" rel="noopener noreferrer" `
                                                                ),
                                                            }}
                                                            className="text-sm"
                                                        />
                                                    </p>
                                                ) : (
                                                    <p className="px-4 py-2 text-sm text-white">
                                                        {line}
                                                    </p>
                                                )}
                                                {idx < arr.length - 1}{' '}
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
