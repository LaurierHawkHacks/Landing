const StatSection = () => {
    return (
        <section className="relative h-screen flex items-center justify-center text-center text-[#CEDFFF] bg-midnight">
            <img src="./src/assets/moon-and-stars.png" className="absolute inset-0 w-full h-full object-cover" alt="Background"></img>
            <div className="z-10 px-4 pl-20">
                <div className="flex flex-col items-center space-y-4">
                    <div className="stat-item">
                        <span className="drop-shadow-sm font-bold text-4xl sm:text-5xl md:text-6xl pr-2">650</span>
                        <span className="label text-3xl sm:text-4xl md:text-5xl drop-shadow-sm font-bold">Hackers</span>
                    </div>
                    <div className="stat-item">
                        <span className="drop-shadow-sm font-bold text-4xl sm:text-5xl md:text-6xl pr-2">208</span>
                        <span className="label text-3xl sm:text-4xl md:text-5xl drop-shadow-sm font-bold">Schools</span>
                    </div>
                    <div className="stat-item">
                        <span className="drop-shadow-sm font-bold text-4xl sm:text-5xl md:text-6xl pr-2">208</span>
                        <span className="label text-3xl sm:text-4xl md:text-5xl drop-shadow-sm font-bold">Prizes</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { StatSection };
