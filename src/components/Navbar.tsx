const Navbar = () => {
	return (
		<>
			<nav>
				<img src="./src/assets/logo.svg" alt="HawkHacks Logo" />

				<ul>
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

				<button>
					<a href="/">LIVE PORTAL</a>
				</button>

				<img src="./src/assets/mlh_banner.svg" alt="MLH Banner Logo" />
			</nav>
		</>
	);
};

export { Navbar };
