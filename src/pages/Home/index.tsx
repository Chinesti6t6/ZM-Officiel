import React from "react";
import Hero from "./components/Hero";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";

const Home: React.FC = () => {
	return (
		<>
			<Hero />
			<Experiences />
			<Skills />
		</>
	);
};

export default Home;
