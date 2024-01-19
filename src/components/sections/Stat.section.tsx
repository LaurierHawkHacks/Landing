const StatSection = () => {
    return (
        <section className="relative h-screen flex items-center justify-center text-center text-[#CEDFFF] bg-midnight">
            <img src="./src/assets/moon-and-stars.png" className="absolute inset-0 w-full h-full object-cover" alt="Background"></img>
            <div className="z-10 px-4 ml-64">
                <h2 className="drop-shadow-sm font-bold text-5xl md:text-6xl">650 Hackers</h2>
                <h2 className="drop-shadow-sm font-bold text-5xl md:text-6xl">208 Schools</h2>
                <h2 className="drop-shadow-sm font-bold text-5xl md:text-6xl">208 Prizes</h2>
            </div>
        </section>
    );
};

export { StatSection };
