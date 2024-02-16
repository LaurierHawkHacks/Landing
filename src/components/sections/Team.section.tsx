interface Member {
    name: string;
    title: string;
    profile: string;
}

interface Department {
    title: string;
    members: Member[];
}

const departments = [
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

const Member: React.FC<Member> = ({ name, title, profile }) => {
    return (
        <li className="grid lg:grid-cols-5 lg:space-x-4">
            <img
                className="w-full object-cover lg:col-span-2 lg:aspect-square lg:rounded-full"
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

const Department: React.FC<Department> = ({ title, members }) => {
    return (
        <div key={title}>
            <h3 className="mb-4 text-xl font-semibold capitalize md:mb-6 lg:mb-8 lg:text-2xl">
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

const TeamSection = () => {
    return (
        <section className="relative isolate overflow-hidden bg-[#9f7eca] p-4 md:p-6 lg:p-12">
            <div className="mx-auto mb-10 w-fit lg:mb-12">
                <img
                    className="mx-auto w-full max-w-fit scale-110 sm:scale-100"
                    src="src/assets/team/meet-the-team-balloon-banner.svg"
                    alt=""
                />
                <img
                    className="relative z-10 -translate-y-10 md:-translate-y-12 lg:-translate-y-16"
                    src="src/assets/team/clouds.svg"
                    alt=""
                />
            </div>

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

            <div className="mx-auto max-w-[1328px] space-y-12 pb-80">
                {departments.map((department) => (
                    <Department {...department} key={department.title} />
                ))}
            </div>
        </section>
    );
};

export { TeamSection };
