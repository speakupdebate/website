import React from "react";

export default function About() {
	return (
		<div className="flex flex-col overflow-hidden">
			{/*  Page content */}
			<main className="flex-grow">
				<section className="bg-gradient-to-b from-gray-100 to-white">
					<div className="max-w-6xl mx-auto px-4 sm:px-6">
						<div className="pt-16 pb-12 md:pt-20 md:pb-20">
							{/* Page header */}
							<div className="max-w-3xl mx-auto text-center pb-6 md:pb-10">
								<h1 className="h1" data-aos="zoom-y-out">
									About Us
								</h1>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
