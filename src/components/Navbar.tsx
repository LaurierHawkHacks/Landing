const Navbar = () => {
	return (
		<>
			<nav className="flex w-screen items-center gap-2 bg-midnight text-white sticky top-0 z-50 p-4 px-16 justify-between">
				<div className="flex items-center gap-5 w-3/4">
					<img src="./src/assets/logo.svg" alt="HawkHacks Logo" />

					<ul className="flex w-1/3 items-center justify-evenly">
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

				<div className="w-1/5 mr-5">
					<a
						href="/"
						className="tracking-widest border rounded-md p-2 hover:bg-white hover:text-black transition-colors"
					>
						LIVE PORTAL
					</a>

					<img
						src="./src/assets/mlh_banner.svg"
						alt="MLH Banner Logo"
						className="w-[200px] absolute right-10 top-0"
					/>
				</div>
			</nav>
		</>
	);
};

export { Navbar };
