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
            <div className="border-gray/50 h-full w-1/3 rounded-md border-2 p-4 shadow-lg backdrop-blur-lg">
                <h4 className="mb-4 text-2xl font-bold text-white">
                    Categories
                </h4>
                <ul className="space-y-2">
                    {sections.map((section, index) => (
                        <li key={index} className=" cursor-pointer">
                            <button
                                className={`text-lg shadow-md  ${
                                    index === selectedCategoryIndex
                                        ? 'bg-deepMarine text-white hover:bg-deepMarine hover:text-white'
                                        : 'bg-white text-black hover:bg-gray-200'
                                }`}
                                onClick={() => selectCategory(index)}
                            >
                                {section.section}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    const activeSection = sections[selectedCategoryIndex];

    return (
        <div className="flex flex-col gap-8 pt-12">
            <div className="flex gap-8 ">
                <FAQCategories />
                <div className="h-full w-2/3 rounded-md bg-white p-4 shadow-lg">
                    <h3 className="mb-4 text-2xl font-bold">
                        {activeSection.section}
                    </h3>
                    <div className="space-y-4">
                        {activeSection.content.map((item, questionIndex) => (
                            <div key={questionIndex}>
                                <button
                                    className={`flex w-full items-center justify-between rounded-none border-b-2 border-black bg-deepMarine p-2 py-6 text-lg text-black shadow-none  ${
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
                                        className={`transition-transform ${
                                            activeIndex &&
                                            activeIndex.question ===
                                                questionIndex
                                                ? 'rotate-180'
                                                : ''
                                        }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all ${
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
                                                className="p-4 text-sm"
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
            <div className="flex w-full items-center justify-between rounded-md bg-white p-4">
                <span className="w-2/4 flex-col">
                    <h4>📧 Still have a question?</h4>
                    <p className="text-sm">
                        No worries! Reach out to us via email at
                        hello@hawkhacks.ca or on any of our socials, and we'll
                        get back to you as soon as our social media person wakes
                        up!
                    </p>
                </span>
                <button className="h-12 w-1/5">Get in Touch</button>
            </div>
        </div>
    );
};

export { Accordion };
