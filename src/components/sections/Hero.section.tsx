import { HeroBackgroundMobile, HeroBackgroundDesktop } from '@assets';

const HeroSection = () => {
    return (
        <div className="stacked place-items-end-center sm:place-items-start">
            <HeroBackgroundMobile
                className={'media block pb-16 sm:hidden xl:translate-y-20'}
            />
            <HeroBackgroundDesktop
                className={'media hidden sm:block xl:translate-y-20'}
            />

            <div className="space-y-1 pb-4 text-center sm:pl-24 sm:pt-12 sm:text-left lg:pl-16 lg:pt-16 2xl:pl-60 2xl:pt-24">
                <img
                    className="inline-block aspect-square w-20 sm:mx-0 lg:w-28 xl:w-32 2xl:w-52"
                    src="src/assets/logo.svg"
                    alt="Hawkhack logo"
                />
                <div className="sm:space-y-2">
                    <h1 className="bg-gradient-to-b from-[#2B6469] to-[#00CEDB] bg-clip-text text-5.5xl font-extrabold text-transparent lg:text-7xl xl:text-8.5xl">
                        HawkHacks 2024
                    </h1>
                    <p className="text-base font-semibold text-[#2B6469] lg:text-xl xl:text-3.5xl">
                        Hosted at Wilfrid Laurier University
                    </p>
                </div>
                <div>
                    <p className="text-2xl font-bold text-[#2B6469] sm:hidden">
                        April 5th - 7th
                    </p>
                    <p className="text-2xl font-bold text-[#2B6469] sm:hidden">
                        In Person
                    </p>
                </div>
            </div>
        </div>
    );
};

export { HeroSection };
