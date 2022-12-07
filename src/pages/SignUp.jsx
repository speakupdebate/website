import React from "react";
import { Link } from "react-router-dom";

import Header from "../partials/Header";

function SignUp() {
	return (
		<div className="flex flex-col min-h-screen overflow-hidden">
			{/*  Page content */}
			<main className="flex-grow">
				<section className="bg-gradient-to-b from-gray-100 to-white">
					<div className="max-w-6xl mx-auto px-4 sm:px-6">
						<div className="pt-16 pb-12 md:pt-20 md:pb-20">
							{/* Page header */}
							<div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
								<h1 className="h1" data-aos="zoom-y-out">
									Sign Up Today
								</h1>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

export default SignUp;
