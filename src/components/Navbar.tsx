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
		<>
			<nav
				className={`flex w-full items-center gap-2 bg-midnight text-white sticky top-0 p-4 z-50 px-16 justify-between ${
					scrollPos > 100 && "shadow-xl"
				} `}
			>
				<div className="flex items-center gap-5">
					<img src="./src/assets/logo.svg" alt="HawkHacks Logo" width="35px" />

					<ul className="flex w-full items-center justify-evenly gap-5">
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
						className={`tracking-widest border-2 rounded-md p-1 hover:bg-white hover:text-black transition-all duration-500 ease-in-out ${
							scrollPos < 100 ? "mr-48" : "mr-0"
						}`}
					>
						LIVE PORTAL
					</a>
					<img
						src="./src/assets/mlh_banner.svg"
						alt="MLH Banner Logo"
						className="absolute right-0 -top-5 shadow-2xl"
						style={{
							opacity: bannerOpacity,
							transition: "opacity 0.8s ease-out",
						}}
						width={scrollPos < 100 ? "150px" : "0px"}
					/>
				</div>
			</nav>
		</>
	);
};

export { Navbar };
