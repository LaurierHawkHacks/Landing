const InfoSection = () => {
    return (
        <>
            <section className="flex flex-col pb-20 text-center text-white bg-gradient-to-b from-[#000a32] to-midnight">
                <div className="mx-auto flex flex-col">
                    <h2 className="mb-10 pt-12 text-center font-bold uppercase">
                        What is{' '}
                        <span className="text-mint text-5xl font-bold">
                            HawkHacks?
                        </span>
                    </h2>
                    <p className="text-xl max-w-[50rem]">
                        HawkHacks came out of a desire to give everyone an equal
                        opportunity to get into tech, whether that be
                        programming, networking, researching, learning, or
                        teaching. Join hundreds of students across Canada (and
                        across the world) in a 36 hour period of exploration,
                        creativity, and learning!
                    </p>
                    <p className="text-xl max-w-[50rem] mt-6 ">
                        Remember, you do not have to be a pro to participate -
                        show up with ten years or ten minutes of experience (oh
                        yeah, and a great attitude as well!)
                    </p>
                </div>
                <div className="flex flex-col mx-auto mt-16 py-8 px-10 text-center rounded-lg bg-gradient-to-b from-[#D9D9D9]/[0.15]">
                    <h2 className="uppercase text-4xl ">Our Goals</h2>
                    <p className="text-xl max-w-[50rem] mt-6">
                        Our goal with HawkHacks is to showcase the amazing
                        talent on display at our university. Often, smaller
                        universities are outshun by bigger ones - we would like
                        to change that, by showing how awesome of a community
                        exists here too!
                    </p>
                </div>
            </section>
        </>
    );
};

export { InfoSection };
