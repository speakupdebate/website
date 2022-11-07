import React from "react";
import { Link } from "react-router-dom";
import Header from "../partials/Header";
import Viveka from "../images/viveka.jpg";

function Team() {
	const people = [
		{
			name: "Viveka Sinha",
			title: "President & Co-Founder",
			imageSrc: Viveka,
			link: undefined,
		},
		{
			name: "Anushka Poddar",
			title: "Co-Founder",
			imageSrc: Viveka,
			link: "https://tinu.tech",
		},
	];

	return (
		<div className="flex flex-col min-h-screen overflow-hidden">
			{/*  Site header */}
			<Header />

			{/*  Page content */}
			<main className="flex-grow">
				<section className="bg-gradient-to-b from-gray-100 to-white">
					<div className="max-w-6xl mx-auto px-4 sm:px-6">
						<div className="pt-16 pb-12 md:pt-20 md:pb-20">
							{/* Page header */}
							<div className="max-w-3xl mx-auto text-center pb-6 md:pb-10">
								<h1 className="h1" data-aos="zoom-y-out">
									Our Team
								</h1>
							</div>

							{/* Form */}
							<div className="flex flex-wrap justify-center gap-10">
								{people.map(({ name, title, imageSrc, link }, i) => (
									<div key={i}>
										{link ? (
											<a href={link} target="blank">
												<img
													src={imageSrc}
													alt={name}
													className="w-48 h-48 rounded-full transition-all duration-300 transform mx-auto hover:scale-105"
													data-aos="zoom-y-out"
													data-aos-delay={150 + 150 * i}
												/>
											</a>
										) : (
											<img
												src={imageSrc}
												alt={name}
												className="w-48 h-48 rounded-full transition-all duration-300 transform mx-auto hover:scale-105"
												data-aos="zoom-y-out"
												data-aos-delay={150 + 150 * i}
											/>
										)}
										<p
											className="font-semibold text-center pt-4 text-md"
											data-aos="zoom-y-out"
											data-aos-delay={200 + 150 * i}
										>
											{name}
										</p>
										<p
											className="font-semibold text-center text-md"
											data-aos="zoom-y-out"
											data-aos-delay={250 + 150 * i}
										>
											{title}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

export default Team;
