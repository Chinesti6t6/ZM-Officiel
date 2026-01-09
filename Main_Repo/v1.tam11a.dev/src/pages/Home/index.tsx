import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";

const Home: React.FC = () => {
	return (
		<>
			<Hero />
			<Projects />
			<Experiences />
			<Skills />
		</>
	);
};

export default Home;
