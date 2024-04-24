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

    const parseAnswer = (answer: string) => {
        const lines = answer.split('\\n');

        return lines.map((line, index) => {
            if (line.includes('<a ')) {
                const parts = line.split(/<a |<\/a>/g);
                return (
                    <p key={index} className="px-4 py-2 text-sm text-black">
                        {parts.map((part, partIndex) => {
                            const match = part.match(/href="([^"]+)"/);
                            if (match) {
                                const href = match[1];
                                return (
                                    <a
                                        key={partIndex}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            fontSize: '0.875rem',
                                            textDecoration: 'underline',
                                        }}
                                    >
                                        {part.split('>')[1]}
                                    </a>
                                );
                            }
                            return part;
                        })}
                    </p>
                );
            }

            return (
                <p key={index} className="px-4 py-2 text-sm text-black">
                    {line}
                </p>
            );
        });
    };

    return (
        <div className="py-20">
            {/* !remember to add back the md:grid-cols-2 here */}
            <div className="mb-12 grid gap-[20px] md:grid-cols-2">
                {/* for each section */}
                {/* render the title and the content */}
                {sections.map((section, sectionIndex) => (
                    <div
                        key={sectionIndex}
                        className="flex flex-col gap-2 rounded-xl border border-black bg-white p-4 shadow-lg"
                    >
                        <h3 className="font-raleway mb-2 text-3xl font-bold capitalize text-[#404040] drop-shadow-lg">
                            {section.section}
                        </h3>

                        {/* contents of accordion item */}
                        {section.content.map((item, questionIndex) => (
                            <div
                                key={questionIndex}
                                className="accordion-panel w-full"
                            >
                                {/* the accordion question */}
                                <div
                                    className={`accordion-panel__question flex cursor-pointer select-none items-center justify-between gap-2 rounded-lg border border-black/20 bg-white p-4 transition-all hover:bg-gray-100 motion-reduce:transition-none ${
                                        activeIndex &&
                                        activeIndex.section === sectionIndex &&
                                        activeIndex.question === questionIndex
                                            ? 'rounded-b-none'
                                            : ''
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
                                        activeIndex.question ===
                                            questionIndex ? (
                                            <LuMinus />
                                        ) : (
                                            <LuPlus />
                                        )}
                                    </div>
                                </div>

                                {/* the accordion answer */}
                                <div
                                    className={`accordion-panel__content grid grid-rows-[0fr] rounded-b-lg bg-accordionHover/50 transition-[grid-template-rows]  will-change-[grid-template-rows] motion-reduce:transition-none ${
                                        activeIndex &&
                                        activeIndex.section === sectionIndex &&
                                        activeIndex.question === questionIndex
                                            ? 'grid-rows-[1fr]'
                                            : ''
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        {parseAnswer(item.answer)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="flex w-full flex-col items-center justify-between gap-4 rounded-xl border border-black bg-white p-4 shadow-lg md:flex-row md:gap-0">
                <span className="flex flex-col gap-2 text-center md:w-2/4 md:text-left">
                    <h3 className="font-raleway font-bold text-[#404040]">
                        {' '}
                        Still have a question?{' '}
                    </h3>
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
