import { HeroBackgroundMobile, HeroBackgroundDesktop } from '@assets';

const HeroSection = () => {
    return (
        <div className="relative isolate">
            <div className="-z-10">
                <HeroBackgroundMobile className={'block sm:hidden'} />
                <HeroBackgroundDesktop className={'hidden sm:block'} />
            </div>
            <div className="relative -mt-72 space-y-4 text-center sm:absolute sm:left-0 sm:top-0 sm:mt-0 sm:p-10 lg:p-14 sm:space-y-2 sm:text-left lg:space-y-7">
                <img
                    className="mx-auto aspect-square w-24 sm:mx-0 lg:w-28 xl:w-32"
                    src="src/assets/logo.svg"
                    alt="Hawkhack logo"
                />
                <h1 className="bg-gradient-to-b from-[#2B6469] to-[#00CEDB] bg-clip-text text-transparent text-4xl font-extrabold lg:text-5.5xl xl:text-7xl">
                    HawkHack 2024
                </h1>
                <p className="text-2xl font-bold sm:hidden">April 5th - 7th</p>
                <p className="text-2xl font-bold sm:hidden">In Person</p>
            </div>
        </div>
    );
};

export { HeroSection };
