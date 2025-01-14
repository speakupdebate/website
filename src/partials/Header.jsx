import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import Logo from "../images/speak.png";

function Header() {
	const [top, setTop] = useState(true);
	const [isOpen, setOpen] = useState(false);

	// detect whether user has scrolled the page down by 10px
	useEffect(() => {
		const scrollHandler = () => {
			window.pageYOffset > 10 ? setTop(false) : setTop(true);
		};
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, [top]);

	return (
		<header
			className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
				!top && "bg-white backdrop-blur-sm shadow-lg"
			}`}
		>
			<div className="max-w-6xl mx-auto px-5 sm:px-6">
				<div className="flex items-center justify-between h-16 md:h-20">
					{/* Site branding */}
					<div className="flex-shrink-0 mr-4">
						{/* Logo */}
						<Link to="/" className="block" aria-label="speak-up-debate">
							<img src={Logo} alt="Speak Up Debate" className="w-12 h-12" />
						</Link>
					</div>

					{/* Site navigation */}
					<nav>
						<ul className="hidden md:flex flex-grow justify-end flex-wrap items-center">
							<li>
								<Link
									to="/"
									className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									to="/about"
									className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									to="/team"
									className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
								>
									Team
								</Link>
							</li>
							<li>
								<Link
									to="/contact"
									className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
								>
									Contact
								</Link>
							</li>
							<li>
								<Link
									to="/signup"
									className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
								>
									<span>Sign up</span>
									<svg
										className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
										viewBox="0 0 12 12"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
											fillRule="nonzero"
										/>
									</svg>
								</Link>
							</li>
						</ul>
						<div className="md:hidden">
							<Hamburger toggled={isOpen} toggle={setOpen} />
							{isOpen && (
								<div className="fixed left-0 top-16 w-full flex flex-col gap-3 items-center bg-white backdrop-blur-sm shadow-lg py-5">
									<Link
										to="/"
										onClick={() => setOpen(false)}
										className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
									>
										Home
									</Link>
									<Link
										to="/about"
										onClick={() => setOpen(false)}
										className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
									>
										About
									</Link>
									<Link
										to="/team"
										onClick={() => setOpen(false)}
										className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
									>
										Team
									</Link>
									<Link
										to="/contact"
										onClick={() => setOpen(false)}
										className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
									>
										Contact
									</Link>
									<Link
										to="/signup"
										onClick={() => setOpen(false)}
										className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
									>
										<span>Sign up</span>
										<svg
											className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
											viewBox="0 0 12 12"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
												fillRule="nonzero"
											/>
										</svg>
									</Link>
								</div>
							)}
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;
