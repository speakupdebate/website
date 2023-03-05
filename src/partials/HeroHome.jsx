import React, { useState } from "react";
import { Link } from "react-router-dom";
import Instagram from "../images/instagram.svg";
import HeroImage from "../images/zoom.png";
import { FiExternalLink } from "react-icons/fi";

function HeroHome() {
	const [videoModalOpen, setVideoModalOpen] = useState(false);

	return (
		<section className="relative">
			{/* Illustration behind hero content */}
			<div
				className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
				aria-hidden="true"
			>
				<svg
					width="1360"
					height="578"
					viewBox="0 0 1360 578"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<linearGradient
							x1="50%"
							y1="0%"
							x2="50%"
							y2="100%"
							id="illustration-01"
						>
							<stop stopColor="#FFF" offset="0%" />
							<stop stopColor="#EAEAEA" offset="77.402%" />
							<stop stopColor="#DFDFDF" offset="100%" />
						</linearGradient>
					</defs>
					<g fill="url(#illustration-01)" fillRule="evenodd">
						<circle cx="1232" cy="128" r="128" />
						<circle cx="155" cy="443" r="64" />
					</g>
				</svg>
			</div>

			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				{/* Hero content */}
				<div className="pt-32 pb-12 md:pt-40 md:pb-20">
					{/* Section header */}
					<div className="text-center pb-12 md:pb-16">
						<h1
							className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
							data-aos="zoom-y-out"
						>
							Speak Up{" "}
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-emerald-400">
								Debate
							</span>
						</h1>
						<div className="max-w-3xl mx-auto">
							<p
								className="text-2xl text-gray-600 mb-8 mx-2"
								data-aos="zoom-y-out"
								data-aos-delay="150"
							>
								Empowering young children to find their voice and learn skills
								crtical in today's world.
							</p>
							<div
								className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
								data-aos="zoom-y-out"
								data-aos-delay="300"
							>
								<div>
									<Link
										className="btn text-white bg-emerald-500 hover:bg-emerald-600 w-full mb-4 sm:w-auto sm:mb-0"
										to="/signup"
									>
										Sign Up Today
									</Link>
								</div>
							</div>
						</div>
					</div>

					{/* Hero image */}
					<div>
						<div
							className="relative flex justify-center mb-8"
							data-aos="zoom-y-out"
							data-aos-delay="450"
						>
							<div className="flex flex-col justify-center">
								<div className="mx-auto relative">
									<img
										className="mx-auto rounded-sm"
										src={HeroImage}
										width="768"
										height="432"
										alt="Hero"
									/>
									<a href="https://instagram.com/speakup.camp" target="_blank">
										<p className="z-10 absolute bg-emerald-500 hover:bg-emerald-600 text-white rounded-sm p-2 font-semibold top-2 right-2 flex gap-2 items-center">
											View more pics on Instagram <FiExternalLink />
										</p>
									</a>
								</div>
								<svg
									className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto"
									width="768"
									height="432"
									viewBox="0 0 768 432"
									xmlns="http://www.w3.org/2000/svg"
									xmlnsXlink="http://www.w3.org/1999/xlink"
								>
									<g fill="none" fillRule="evenodd">
										<circle
											fillOpacity=".04"
											fill="url(#hero-ill-a)"
											cx="384"
											cy="216"
											r="128"
										/>
										<circle
											fillOpacity=".16"
											fill="url(#hero-ill-b)"
											cx="384"
											cy="216"
											r="96"
										/>
										<g fillRule="nonzero">
											<use fill="#000" xlinkHref="#hero-ill-d" />
											<use fill="url(#hero-ill-e)" xlinkHref="#hero-ill-d" />
										</g>
									</g>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroHome;
