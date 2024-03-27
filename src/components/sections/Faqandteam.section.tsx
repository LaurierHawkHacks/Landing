import React from "react";
import Accordion from "../Accordion";

interface Member {
  name: string;
  title: string;
  profile: string;
}

interface MemberProps extends Member {}

interface DepartmentProps {
  title: string;
  members: Member[];
}

const departments = [
  // Department data...
  {
    title: 'design',
    members: [
        {
            name: 'John Doe John Doe John Doe',
            title: 'Designer',
            profile: 'https://placehold.co/600x400/png',
        },
        {
            name: 'Jane Smith',
            title: 'Senior Designer',
            profile: 'https://placehold.co/600x400/png',
        },
        {
            name: 'John Doe',
            title: 'Designer',
            profile: 'https://placehold.co/600x400/png',
        },
        {
            name: 'Jane Smith',
            title: 'Senior Designer',
            profile: 'https://placehold.co/600x400/png',
        },
    ],
},
{
    title: 'development',
    members: [
        {
            name: 'David Davis',
            title: 'Software Engineer',
            profile: 'https://placehold.co/600x400/png',
        },
        {
            name: 'Eva Evans',
            title: 'Frontend Developer',
            profile: 'https://placehold.co/600x400/png',
        },
        {
            name: 'Frank Franklin',
            title: 'Backend Developer',
            profile: 'https://placehold.co/600x400/png',
        },
        {
            name: 'Grace Gray',
            title: 'Full Stack Developer',
            profile: 'https://placehold.co/600x400/png',
        },
        {
            name: 'Henry White',
            title: 'DevOps Engineer',
            profile: 'https://placehold.co/600x400/png',
        },
    ],
},
{
    title: 'operation',
    members: [
        {
            name: 'Oliver Black',
            title: 'Operations Manager',
            profile: 'https://placehold.co/600x400/png',
        },
        {
            name: 'Patricia Green',
            title: 'Operations Coordinator',
            profile: 'https://placehold.co/600x400/png',
        },
        {
            name: 'Quincy Grey',
            title: 'Logistics Specialist',
            profile: 'https://placehold.co/600x400/png',
        },
        {
            name: 'Rachel Red',
            title: 'Facilities Manager',
            profile: 'https://placehold.co/600x400/png',
        },
        {
            name: 'Samuel Yellow',
            title: 'IT Support',
            profile: 'https://placehold.co/600x400/png',
        },
    ],
},
{
    title: 'logistic',
    members: [
        {
            name: 'Logistic Member 1',
            title: 'Logistic Specialist',
            profile: 'https://placehold.co/600x400/png',
        },
        {
            name: 'Logistic Member 2',
            title: 'Logistic Coordinator',
            profile: 'https://placehold.co/600x400/png',
        },
        {
            name: 'Logistic Member 3',
            title: 'Logistic Analyst',
            profile: 'https://placehold.co/600x400/png',
        },
        {
            name: 'Logistic Member 4',
            title: 'Logistic Supervisor',
            profile: 'https://placehold.co/600x400/png',
        },
        {
            name: 'Logistic Member 5',
            title: 'Logistic Manager',
            profile: 'https://placehold.co/600x400/png',
        },
        {
            name: 'Logistic Member 3',
            title: 'Logistic Analyst',
            profile: 'https://placehold.co/600x400/png',
        },
        {
            name: 'Logistic Member 4',
            title: 'Logistic Supervisor',
            profile: 'https://placehold.co/600x400/png',
        },
        {
            name: 'Logistic Member 5',
            title: 'Logistic Manager',
            profile: 'https://placehold.co/600x400/png',
        },
    ],
},
];

const Member: React.FC<MemberProps> = ({ name, title, profile }) => {
  return (
    <li className="grid lg:grid-cols-5 lg:space-x-4">
      <img
        className="aspect-square w-full rounded-full object-cover lg:col-span-2"
        src={profile}
        alt={title}
      />

      <div className="lg:col-span-3">
        <p className="text-center text-lg font-extrabold lg:text-left">
          {name}
        </p>
        <p className="text-center text-base font-normal lg:text-left">
          {title}
        </p>
      </div>
    </li>
  );
};

const Department: React.FC<DepartmentProps> = ({ title, members }) => {
  return (
    <div>
      <h3 className="text-2xl mb-6 text-2xl font-semibold capitalize md:mb-8">
        {title}
      </h3>
      <ul className="grid-auto-md lg:grid-auto-xl">
        {members.map((member, index) => (
          <Member
            {...member}
            key={`${index}-${member.name}-${member.title}`}
          />
        ))}
      </ul>
    </div>
  );
};

const SponsorFAQAndTeamSection: React.FC = () => {
    const faqData = [
      {
        question: "So, what exactly is a hackathon?",
        answer: "Our product is...",
      },
      { question: "Do I need a team?", answer: "Our product is..." },
      {
        question: "When and where is HawkHacks happening?",
        answer: "Our product is...",
      },
      { question: "Are there any prizes?", answer: "Our product is..." },
      { question: "How much does it cost?", answer: "Our product is..." },
      {
        question: "Who can attend? Do I need to be a skilled leet programmer?",
        answer: "Our product is...",
      },
      {
        question: "This is a cool FAQ but I still have questions!",
        answer: "Our product is...",
      },
      // Add more FAQ items as needed
    ];

  return (
    <div>
      <section
        id="faq-section"
        className="py-16 lg:py-24 bg-brightUbe bg-faq-image bg-cover"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="mt-60 text-center text-white font-bold drop-shadow-md">FAQ</h2>
          </div>
          <div className="max-w-6xl mx-auto pb-60">
            <Accordion items={faqData} />
          </div>
          <div className="mx-auto mt-60 mb-10 w-fit lg:mb-12">
                <img
                    className="mx-auto w-full max-w-fit scale-110 sm:scale-100"
                    src="src/assets/team/meet-the-team-balloon-banner.webp"
                    alt=""
                />
                <img
                    className="relative z-10 sm:-translate-y-8  md:-translate-y-12 lg:-translate-y-16 "
                    src="src/assets/team/clouds.svg"
                    alt=""
                />
            </div>
       
        </div>
      </section>




      <section
        id="team-section"
        className="relative isolate overflow-hidden bg-brightUbe  p-4 md:p-6 lg:p-12"
      >

        <img
          className="absolute right-0 -z-10 hidden translate-x-1/3 lg:block 2xl:translate-x-32"
          src="src/assets/team/meet-the-team-building-right.svg"
          alt=""
        />

        <img
          className="absolute bottom-0 left-0 -z-10 hidden -translate-x-1/3 translate-y-1/2 lg:block 2xl:translate-y-[30%]"
          src="src/assets/team/meet-the-team-building-left.svg"
          alt=""
        />

        <div className="mx-auto max-w-[1328px] space-y-12 pb-64 lg:pb-80 ">
          {departments.map((department) => (
            <Department {...department} key={department.title} />
          ))}
        </div>
      </section>
    </div>
  );
};

export { SponsorFAQAndTeamSection };
