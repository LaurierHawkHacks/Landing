const StatSection = () => {
    return (
        <>
            <section className="relative h-screen flex items-center justify-center text-center text-[#CEDFFF] bg-midnight">
            <img src="./src/assets/moon-and-stars.png" className="absolute inset-0 object-cover"></img>
                <div className="flex flex-col items-center justify-center relative bottom-28 left-12 ml-96">
                    <h2 className="drop-shadow-sm font-bold text-[58px]">650 Hackers</h2>
                    <h2 className="drop-shadow-sm font-bold text-[58px]">208 Schools</h2>
                    <h2 className="drop-shadow-sm font-bold text-[58px]">208 Prizes</h2>
                </div>
            </section>
        </>
    );
};

export { StatSection };