import { HeroIllustration } from '@assets';

const Loader = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-midnight">
            <img
                className="absolute bottom-0"
                src={HeroIllustration}
                alt="Hero Illustration"
            />
            <div className=" mb-60 loader z-10"></div>
        </div>
    );
};

export { Loader };
