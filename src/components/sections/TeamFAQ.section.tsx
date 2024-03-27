import { departments, faqData } from './data';
import { Accordion } from '@components';

interface Member {
    name: string;
    title: string;
    profile: string;
}

interface DepartmentProps {
    title: string;
    members: Member[];
}

const Department: React.FC<DepartmentProps> = ({ title, members }) => {
    return (
        <div className="department">
            <h3 className="mb-6 text-3xl text-white drop-shadow-md font-bold capitalize md:mb-8">
                {title}
            </h3>
            <ul className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
                {members.map((member, index) => (
                    <li key={index} className="flex items-center gap-x-4">
                        <img
                            className="aspect-square w-20 rounded-full object-cover lg:w-32"
                            src={member.profile}
                            alt={title}
                        />

                        <div>
                            <p className="text-lg text-white drop-shadow-md font-extrabold lg:text-2xl">
                                {member.name}
                            </p>
                            <p className="text-base drop-shadow-md text-white font-normal lg:text-lg">
                                {member.title}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const TeamSection = () => {
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
                className="relative isolate overflow-hidden bg-brightUbe p-4 md:p-8 lg:p-12"
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

                <div className="mx-auto max-w-7xl space-y-12 pb-52 md:pb-80 lg:pb-96">
                    {departments.map((department) => (
                        <Department {...department} key={department.title} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export { TeamSection };
