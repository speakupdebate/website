import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/speak.png";
import Instagram from "../images/instagram.svg";

function Footer() {
	return (
		<footer>
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				{/* Top area: Blocks */}
				<div className="flex flex-col md:flex-row gap-4 md:gap-24 md:items-center md:justify-center py-8 md:py-12 border-t border-gray-200">
					{/* 1st block */}
					<div className="">
						<div className="mb-2">
							{/* Logo */}
							<Link to="/" className="inline-block" aria-label="Cruip">
								<img src={Logo} className="w-10 h-10" />
							</Link>
						</div>
						<div className="text-sm text-gray-600">© 2022 Speak Up Debate</div>
					</div>

					<div>
						<ul className="text-sm">
							<li className="mb-2">
								<Link
									to="/"
									className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
								>
									Home
								</Link>
							</li>
							<li className="mb-2">
								<Link
									to="/about"
									className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
								>
									About us
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<ul className="text-sm">
							<li className="mb-2">
								<Link
									to="/team"
									className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
								>
									Team
								</Link>
							</li>
							<li className="mb-2">
								<Link
									to="/contact"
									className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
						<Link
							to="/signup"
							className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800"
						>
							<span>Sign up Today</span>
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
				</div>

				{/* Bottom area */}
				<div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
					{/* Social links */}
					<ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
						<li className="ml-4">
							<a
								href="https://www.instagram.com/speakup.camp/"
								target="blank"
								className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
								aria-label="Instagram"
							>
								<img className="w-4 h-4 m-2" src={Instagram} alt="Instagram" />
							</a>
						</li>
						<li className="ml-4">
							<a
								href="https://github.com/speakupdebate"
								target="blank"
								className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
								aria-label="Github"
							>
								<svg
									className="w-8 h-8 fill-current"
									viewBox="0 0 32 32"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
								</svg>
							</a>
						</li>
					</ul>

					{/* Copyrights note */}
					<div className="text-sm text-gray-600 mr-4">
						Speak Up Debate. All rights reserved.
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
