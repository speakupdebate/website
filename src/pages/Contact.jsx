import React from "react";
import webhook from "webhook-discord";

export default function Contact() {
	const Hook = new webhook.Webhook(
		"https://discord.com/api/webhooks/1045071381353738260/wBFk3_ItLR7i5Of1IWsXcosTcYkw9ylEpGnzWXIg-V51rmyk6HCnr2Usr42YvKNyL06A"
	);

	const submitForm = async (e) => {
		e.preventDefault();
		let data = {
			name: e.target[0].value,
			email: e.target[1].value,
			message: e.target[2].value,
		};

		console.log(data);
		let msg = await new webhook.MessageBuilder()
			.setName(data.name)
			.setColor("#10b981")
			.setTitle(`Contact Submission By ${data.name}`)
			.addField("Email", data.email)
			.addField("Message", data.message);

		await Hook.send(msg)
			.then(() => {
				console.log("Message Sent!");
				e.target.reset();
			})
			.catch((err) => {
				alert("Error Sending Message!");
				console.log(err);
			});
	};

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
									Contact Us
								</h1>
								{/* Form */}
								<div className="max-w-2xl mx-auto text-left pt-8">
									<form onSubmit={submitForm}>
										<div className="flex flex-wrap gap-3">
											<div className="flex-1 flex flex-wrap mb-4">
												<div className="w-full">
													<label
														className="block text-gray-800 text-sm font-medium mb-1"
														htmlFor="name"
													>
														Name
													</label>
													<input
														id="name"
														type="text"
														className="form-input w-full text-gray-800"
														placeholder="Enter your name"
														required
													/>
												</div>
											</div>
											<div className="flex-1 flex flex-wrap mb-4">
												<div className="w-full">
													<label
														className="block text-gray-800 text-sm font-medium mb-1"
														htmlFor="email"
													>
														Email
													</label>
													<input
														id="email"
														type="email"
														className="form-input w-full text-gray-800"
														placeholder="Enter your email address"
														required
													/>
												</div>
											</div>
										</div>
										<div className="flex flex-wrap -mx-3 mb-4">
											<div className="w-full px-3">
												<label
													className="block text-gray-800 text-sm font-medium mb-1"
													htmlFor="password"
												>
													Message
												</label>
												<textarea
													id="message"
													type="text"
													className="form-input w-full text-gray-800"
													placeholder="Enter your message"
													required
												/>
											</div>
										</div>
										<div className="flex flex-wrap -mx-3 mt-6">
											<div className="w-full px-3">
												<button className="btn text-white bg-emerald-500 hover:bg-emerald-600 w-full">
													Send
												</button>
											</div>
										</div>
									</form>
								</div>
								<p className="text-neutral-500 text-sm pt-3">
									Or contact us at{" "}
									<a href="mailto:team@speakupdebate.org">
										team@speakupdebate.org
									</a>
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
