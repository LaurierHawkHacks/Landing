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
    {
        title: 'design',
        members: [
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
        // ?width can be fixed (84 when small, 128 when big or large viewport) (done)
        <li className="flex items-center gap-x-4">
            <img
                className="aspect-square w-20 rounded-full object-cover lg:w-32"
                src={profile}
                alt={title}
            />

            <div>
                <p className="text-lg font-extrabold">{name}</p>
                <p className="text-base font-normal">{title}</p>
            </div>
        </li>
    );
};

const Department: React.FC<DepartmentProps> = ({ title, members }) => {
    return (
        <div className="department">
            <h3 className="mb-6 text-3xl font-bold capitalize md:mb-8">
                {title}
            </h3>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
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
        // should have decide the consistent padding
        // or right now, i can focus on the section and increase the padding
        <section
            id="team-section"
            className="relative isolate overflow-hidden bg-[#9f7eca] p-4 md:p-6 lg:p-12"
        >
            {/* image at the top */}
            <div className="mx-auto mb-10 w-fit lg:mb-12">
                {/* keep the banner only in mobile view */}
                {/* keep the balloon after mobile view */}
                <img
                    className="mx-auto w-full max-w-fit scale-110 sm:scale-100"
                    src="src/assets/team/meet-the-team-balloon-banner.webp"
                    alt=""
                />
                <img
                    className="relative z-10"
                    src="src/assets/team/clouds.svg"
                    alt=""
                />
            </div>

            {/* right building image */}
            <img
                className="absolute right-0 -z-10 hidden translate-x-1/3 lg:block 2xl:translate-x-32"
                src="src/assets/team/meet-the-team-building-right.svg"
                alt=""
            />
            {/* left building image */}
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
