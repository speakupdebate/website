import React from "react";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { heads } from "../lib/team";

export default function ChapterHeads() {
	return (
		<div className="flex flex-col min-h-screen overflow-hidden">
			{/*  Page content */}
			<main className="flex-grow">
				<section className="bg-gradient-to-b from-gray-100 to-white">
					<div className="max-w-6xl mx-auto px-4 sm:px-6">
						<div className="pt-16 pb-12 md:pt-20 md:pb-20">
							{/* Page header */}
							<div className="max-w-3xl mx-auto text-center pb-6 md:pb-10 flex items-center flex-col">
								<h1 className="h1 pb-4" data-aos="zoom-y-out">
									Chapter Heads
								</h1>
							</div>

							{/* Form */}
							{/* Form */}
							<div className="flex flex-wrap justify-center gap-10">
								{heads.map(({ name, title, imageSrc, link }, i) => (
									<div key={i} className="w-48">
										<div className="transition-all duration-300 hover:scale-105 mx-auto">
											{link ? (
												<a href={link} target="blank">
													<img
														src={imageSrc}
														alt={name}
														className="w-48 h-48 rounded-full object-cover"
														data-aos="zoom-y-out"
														data-aos-delay={300 + 150 * i}
													/>
												</a>
											) : (
												<img
													src={imageSrc}
													alt={name}
													className="w-48 h-48 rounded-full object-cover"
													data-aos="zoom-y-out"
													data-aos-delay={150 + 150 * i}
												/>
											)}
										</div>
										<p
											className="font-semibold text-center pt-4 text-md"
											data-aos="zoom-y-out"
											data-aos-delay={200 + 150 * i}
										>
											{name}
										</p>
										<p
											className="font-semibold text-center text-md text-overflow-ellipsis"
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
