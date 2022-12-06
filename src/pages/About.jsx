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
								<p
									className="text-left pt-6"
									data-aos="zoom-y-out"
									data-aos-delay={150}
								>
									In March 2022, Speak Up was created by high school debate
									students as a virtual spring break camp for 15 students in
									Maryland. Since then, Speak Up has reached 100+ elementary and
									middle school students through its summer debate programs. We
									hope to empower more students in our community through our
									coming winter, spring, and summer programs.
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
