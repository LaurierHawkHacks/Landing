import React, { useState } from 'react';
import { Button } from '@components';
import { LuPlus, LuMinus } from 'react-icons/lu';

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
            <div className="mb-12 grid gap-[20px] md:grid-cols-2">
                {sections.map((section, sectionIndex) => (
                    <div
                        key={sectionIndex}
                        className="flex flex-col gap-2 rounded-xl border border-black bg-white p-4 shadow-lg"
                    >
                        <h3 className="font-raleway text-[#404040] drop-shadow-lg mb-2 text-3xl font-bold capitalize">
                            {section.section}
                        </h3>
                        {section.content.map((item, questionIndex) => (
                            <div key={questionIndex} className="w-full">
                                <div
                                    className={`flex justify-between items-center cursor-pointer select-none rounded-lg border border-black/20 bg-white p-4 hover:bg-gray-100 ${
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
                                    <h4 className="flex-1 text-black">
                                        {item.question}
                                    </h4>
                                    
                                    <div className="flex-shrink-0">
                                        {activeIndex &&
                                        activeIndex.section === sectionIndex &&
                                        activeIndex.question === questionIndex ? (
                                            <LuMinus />
                                        ) : (
                                            <LuPlus />
                                        )}
                                    </div>
                                </div>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        activeIndex &&
                                        activeIndex.section === sectionIndex &&
                                        activeIndex.question === questionIndex
                                            ? 'max-h-full rounded-b-lg translate-y-0'
                                            : 'max-h-0'
                                    }  bg-accordionHover/50`}
                                >
                                    {item.answer
                                        .split('\\n')
                                        .map((line, idx, arr) => (
                                            <React.Fragment key={idx}>
                                                {line.includes('<a ') ? (
                                                    <p className="px-4 py-2 text-sm text-black">
                                                        <span
                                                            dangerouslySetInnerHTML={{
                                                                __html: line.replace(
                                                                    /<a /g,
                                                                    `<a style="font-size: 0.875rem; text-decoration: underline;" target="_blank" rel="noopener noreferrer" `
                                                                ),
                                                            }}
                                                            className="text-sm"
                                                        />
                                                    </p>
                                                ) : (
                                                    <p className="px-4 py-2 text-sm text-black">
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
                ))}
            </div>

            <div className="flex w-full flex-col items-center justify-between gap-4 rounded-xl bg-white p-4 border border-black shadow-lg md:flex-row md:gap-0">
                <span className="flex flex-col gap-2 text-center md:w-2/4 md:text-left">
                    <h3 className="font-bold font-raleway text-[#404040]"> Still have a question? </h3>
                    <p className="text-md">
                        No worries! Reach out to us via email at{' '}
                        <a
                            href="mailto:hello@hawkhacks.ca"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-md underline"
                        >
                            hello@hawkhacks.ca
                        </a>{' '}
                        or on any of our{' '}
                        <a
                            href="https://linktr.ee/hawkhacks"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-md underline"
                        >
                            socials
                        </a>
                        , and we'll get back to you as soon as our social media
                        person wakes up!
                    </p>
                </span>
                <Button
                    className="block w-fit bg-gradient-to-b from-tbrand to-tbrand-hover p-0 before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition before:duration-100 before:hover:opacity-10"
                    tabIndex={-1}
                    type="button"
                    onClick={() => {
                        window.location.href = 'mailto:hello@hawkhacks.ca';
                    }}
                >
                    <p className="px-12 py-3 text-base font-medium md:text-lg">
                        Get in Touch
                    </p>
                </Button>
            </div>
        </div>
    );
};

export { Accordion };
