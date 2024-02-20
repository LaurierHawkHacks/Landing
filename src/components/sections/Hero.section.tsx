const HeroSection = () => {
    return (
        <div className="relative isolate">
            <div className="-z-10">
                <img
                    className="sm:hidden"
                    src="src/assets/hero/smaller.svg"
                    alt=""
                />
                <img
                    className="hidden sm:block"
                    src="src/assets/hero/hero.svg"
                    alt=""
                />
            </div>
            <div className="relative -mt-72 space-y-4 text-center sm:hidden ">
                <img
                    className="mx-auto aspect-square w-24 md:w-36 lg:w-[18.75rem]"
                    src="src/assets/logo.svg"
                    alt="Hawkhack logo"
                />
                <h1 className="hero-title-gradient text-4xl font-extrabold md:text-5.5xl lg:text-8.5xl">
                    HawkHack 2024
                </h1>
                <p className="text-2xl font-bold">April 5th - 7th</p>
                <p className="text-2xl font-bold">In Person</p>
            </div>
        </div>
    );
};

export { HeroSection };
