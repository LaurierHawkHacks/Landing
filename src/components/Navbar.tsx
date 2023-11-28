import { useEffect, useState } from "react";

const useScrollPosition = () => {
	const [scrollPos, setScrollPos] = useState(0);

	const handleScroll = () => {
		setScrollPos(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return scrollPos;
};

const Navbar = () => {
	const scrollPos = useScrollPosition();
	const bannerOpacity = Math.max(1 - scrollPos / 100, 0);
	return (
		<nav
			className={`flex w-full items-center gap-2  text-white fixed top-0 z-50 px-24 justify-between ${
				scrollPos > 100
					? "shadow-lg p-4 transition-all duration-500 ease-in-out bg-midnight"
					: "p-8 transition-all duration-500 ease-in-out "
			} `}
		>
			<div className="flex items-center gap-8">
				<img src="./src/assets/logo.svg" alt="HawkHacks Logo" width="35px" />

				<ul className="flex w-full items-center justify-evenly gap-6">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/sponsors">Sponsors</a>
					</li>
					<li>
						<a href="/faq">FAQ</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
				</ul>
			</div>

			<div className="relative">
				<a
					href="/"
					className={`tracking-widest border-2 rounded-md p-2 px-4 font-bold hover:bg-white hover:text-black transition-all duration-500 ease-in-out ${
						scrollPos < 100 ? "mr-40" : "mr-0"
					}`}
				>
					LIVE PORTAL
				</a>
				<a
					id="mlh-trust-badge"
					href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"
						alt="Major League Hacking 2024 Hackathon Season"
						className="absolute right-0 -top-10 shadow-2xl"
						style={{
							opacity: bannerOpacity,
							transition: "opacity 0.8s ease-out",
						}}
						width={scrollPos < 100 ? "100px" : "0px"}
					/>
				</a>
			</div>
		</nav>
	);
};

export { Navbar };
