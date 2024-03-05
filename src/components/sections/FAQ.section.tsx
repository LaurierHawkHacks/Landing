import React from 'react';
import Accordion from '../Accordion';

const FAQSection: React.FC = () => {
  const faqData = [
    { question: 'So, what exactly is a hackathon?', answer: 'Our product is...' },
    { question: 'Do I need a team?', answer: 'Our product is...' },
    { question: 'When and where is HawkHacks happening?', answer: 'Our product is...' },
    { question: 'Are there any prizes?', answer: 'Our product is...' },
    { question: 'How much does it cost?', answer: 'Our product is...' },
    { question: 'Who can attend? Do I need to be a skilled leet programmer?', answer: 'Our product is...' },
    { question: 'This is a cool FAQ but I still have questions!', answer: 'Our product is...' },
    // Add more FAQ items as needed
  ];


  return (
    <section className="bg-faq-image bg-brightUbe bg-cover">
      <div className="h-full flex flex-col justify-center items-center">
        <h2 className="mt-60 text-center text-white font-bold drop-shadow-md">
          FAQ
        </h2>
        <div className="mx-auto max-w-[66.5rem] mb-96">
          <Accordion items={faqData} />
        </div>
      </div>
    </section>
  );
};


export { FAQSection};
