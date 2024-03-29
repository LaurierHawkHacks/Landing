import { FaqBackground } from '@assets';
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
            <h3 className="mb-6 text-3xl font-bold capitalize text-white drop-shadow-md md:mb-8">
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
                            <p className="text-lg font-extrabold text-white drop-shadow-md lg:text-2xl">
                                {member.name}
                            </p>
                            <p className="text-base font-normal text-white drop-shadow-md lg:text-lg">
                                {member.title}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// the naming is confusing...
// faq section first, but the meet the team banner is within faq section...
// not separate enough...
const TeamSection = () => {
    return (
        <div className="bg-brightUbe">
            <section id="faq-section" className="stacked -mb-24 bg-cover">
                <img src={FaqBackground} alt="" className="w-full" />
                <div className="container mx-auto px-4">
                    <h2 className="mt-20 text-center font-bold text-white drop-shadow-md md:mt-32">
                        FAQ
                    </h2>

                    <div className="mx-auto max-w-6xl pb-12">
                        <Accordion items={faqData} />
                    </div>
                </div>
            </section>

            <section
                id="team-section"
                className="relative isolate p-4 md:p-8 lg:p-12 md:-translate-y-[10%] xl:-translate-y-[15%]"
            >
                {/* remove the overflow, and set negative offset works like a charm */}
                <div className="relative mx-auto mb-10 w-fit sm:mb-24 lg:mb-32">
                    <img
                        className="mx-auto w-full max-w-fit sm:hidden"
                        src="src/assets/team/meet-the-team-banner.webp"
                        alt=""
                    />
                    <img
                        className="mx-auto hidden w-full max-w-[70rem] sm:block"
                        src="src/assets/team/meet-the-team-balloon-banner.webp"
                        alt=""
                    />
                    <img
                        className="absolute bottom-0 z-10  hidden translate-y-1/2 sm:block"
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