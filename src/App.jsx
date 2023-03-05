import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "aos/dist/aos.css";
import "./css/style.css";

import AOS from "aos";

import Home from "./pages/Home";
import Team from "./pages/Team";
import ChapterHeads from "./pages/ChapterHeads";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import Contact from "./pages/Contact";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import About from "./pages/About";

function App() {
	const location = useLocation();

	useEffect(() => {
		AOS.init({
			once: true,
			disable: "phone",
			duration: 700,
			easing: "ease-out-cubic",
		});
	});

	useEffect(() => {
		document.querySelector("html").style.scrollBehavior = "auto";
		window.scroll({ top: 0 });
		document.querySelector("html").style.scrollBehavior = "";
	}, [location.pathname]); // triggered on route change

	return (
		<>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/team" element={<Team />} />
				<Route path="/team/chapter-heads" element={<ChapterHeads />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/reset-password" element={<ResetPassword />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
