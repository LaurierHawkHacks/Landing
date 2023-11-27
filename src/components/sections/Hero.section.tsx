import React, { useState, useEffect, useCallback } from "react";
import {
	HeroIllustration
} from "@assets";

const HeroSection: React.FC = () => {
	const [countdown, setCountdown] = useState<string>("");

	const calculateCountdown = useCallback(() => {
		const targetDate = new Date("2024-04-06T00:00:00");
		const currentDate = new Date();
		const difference = targetDate.getTime() - currentDate.getTime();

		const days = Math.floor(difference / (1000 * 60 * 60 * 24));
		const hours = Math.floor(
			(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((difference % (1000 * 60)) / 1000);

		setCountdown(`${days} ${hours} ${minutes} ${seconds}`);
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			calculateCountdown();
		}, 1000);
		return () => clearInterval(interval);
	}, [calculateCountdown]);

	return (
		<div className="bg-midnight text-white py-32">
			<div className="text-center">
				<h1 className=" mb-2 font-bold text-mint text-7xl">
					&lt;HawkHacks 2024/&gt;
				</h1>
				<p className="pb-2 text-2xl">
					Wilfrid Laurier’s first large-scale global hackathon!
				</p>
				<p className="pb-3 text-base font-thin [word-spacing:5px]">
					Waterloo, ON | April 5th - 7th | In-Person
				</p>
				<p className="mx-5 space-x-8 text-lg font-bold [word-spacing:45px]">
					{countdown}
				</p>
				<p className="pb-3 text-base mb-2 font-thin [word-spacing:35px] -mr-2">
					Days Hrs Mins Secs
				</p>
				<button className="bg-mint text-white mb-3 px-4 py-2 rounded font-bold [letter-spacing:2px]">
					REGISTER
				</button>
				<img className="-mt-2" src={HeroIllustration} alt="Hero Illustration" />
			</div>
		</div>
	);
};

export { HeroSection };
