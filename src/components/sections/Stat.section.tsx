const StatSection = () => {
    return (
        <section className="relative h-screen flex items-center justify-center text-center text-[#CEDFFF] bg-midnight">
            <img src="./src/assets/moon-and-stars.png" className="absolute inset-0 w-full h-full object-cover" alt="Background"></img>
            <div className="z-10 px-4 ml-28">
                <div className="flex flex-col items-center">
                    <p className="drop-shadow-sm font-bold text-4xl sm:text-5xl md:text-6xl">650 Hackers</p>
                    <p className="drop-shadow-sm font-bold text-4xl sm:text-5xl md:text-6xl">208 Schools</p>
                    <p className="drop-shadow-sm font-bold text-4xl sm:text-5xl md:text-6xl">208 Prizes</p>
                </div>
            </div>
        </section>
    );
};

export { StatSection };
