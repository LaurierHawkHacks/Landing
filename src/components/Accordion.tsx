import { Button } from '@components';
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

    const [selectedCategoryIndex, setSelectedCategoryIndex] =
        useState<number>(0);

    const toggleAccordion = (sectionIndex: number, questionIndex: number) => {
        setActiveIndex((prevIndex) =>
            prevIndex &&
            prevIndex.section === sectionIndex &&
            prevIndex.question === questionIndex
                ? null
                : { section: sectionIndex, question: questionIndex }
        );
    };

    const selectCategory = (index: number) => {
        setSelectedCategoryIndex(index);
        setActiveIndex(null);
    };

    const FAQCategories = () => {
        return (
            <div className="border-gray/50 flex h-full w-full flex-col justify-start gap-4 rounded-md md:w-1/3 md:items-stretch md:justify-center md:border-2 md:p-4 md:shadow-lg md:backdrop-blur-lg">
                <h3 className="hidden text-center text-3xl font-bold capitalize text-white drop-shadow-md md:block ">
                    Categories
                </h3>

                <div className="flex flex-wrap items-start gap-2 md:flex-col ">
                    {sections.map((section, index) => (
                        <button
                            key={index}
                            className={`text-md flex w-[145px] items-center justify-center p-1 shadow-md transition-all duration-100 md:w-full md:p-2  ${
                                index === selectedCategoryIndex
                                    ? '!hover:bg-deepMarine bg-deepMarine text-white hover:text-white'
                                    : 'bg-white text-black hover:bg-gray-200'
                            }`}
                            onClick={() => selectCategory(index)}
                        >
                            {section.section}
                        </button>
                    ))}{' '}
                </div>
            </div>
        );
    };

    const activeSection = sections[selectedCategoryIndex];

    return (
        <div className="mb-12 flex flex-col gap-8 pt-12">
            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
                <FAQCategories />
                <div className="h-full rounded-md bg-white p-4 shadow-lg md:w-2/3">
                    <h3 className="mb-4 hidden text-2xl font-bold md:block">
                        {activeSection.section}
                    </h3>
                    <div className="space-y-4">
                        {activeSection.content.map((item, questionIndex) => (
                            <div key={questionIndex}>
                                <button
                                    className={`flex w-full items-center justify-between rounded-none border-b-2 border-black bg-deepMarine p-2 text-left text-lg text-black shadow-none transition-all duration-100 md:py-6  ${
                                        activeIndex &&
                                        activeIndex.question === questionIndex
                                            ? 'bg-deepMarine text-white hover:text-white'
                                            : 'bg-white text-black hover:bg-gray-200'
                                    }`}
                                    onClick={() =>
                                        toggleAccordion(
                                            selectedCategoryIndex,
                                            questionIndex
                                        )
                                    }
                                >
                                    <p className="text-sm">{item.question}</p>
                                    <IoIosArrowDown
                                        className={`min-h-[20px] min-w-[20px] transition-transform ${
                                            activeIndex &&
                                            activeIndex.question ===
                                                questionIndex
                                                ? 'rotate-180'
                                                : ''
                                        }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-100 ${
                                        activeIndex &&
                                        activeIndex.question === questionIndex
                                            ? 'max-h-96'
                                            : 'max-h-0'
                                    }`}
                                >
                                    {item.answer
                                        .split('\\n')
                                        .map((line, idx) => (
                                            <p
                                                key={idx}
                                                className="p-4 text-left text-sm"
                                            >
                                                {line}
                                            </p>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-col items-center justify-between gap-4 rounded-md bg-white p-4 shadow-lg md:flex-row md:gap-0">
                <span className="flex flex-col gap-2 text-center md:w-2/4 md:text-left">
                    <h4 className="font-bold">Still have a question?</h4>
                    <p className="text-sm">
                        No worries! Reach out to us via email at
                        hello@hawkhacks.ca or on any of our socials, and we'll
                        get back to you as soon as our social media person wakes
                        up!
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
