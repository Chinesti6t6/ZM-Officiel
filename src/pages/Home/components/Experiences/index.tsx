import React from "react";
import { motion } from "framer-motion";
import data from "./data.json";
import Card, { CardType } from "./components/Card";

const Experiences: React.FC = () => {
	// Animation variants for scroll-triggered fades
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	return (
		<motion.div
			className="relative"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			variants={containerVariants}
		>
			{data?.jobs?.map((job: CardType, index: number) => {
				return (
					<motion.div
						key={index}
						variants={itemVariants}
						className={`
						relative flex flex-col md:flex-row items-start justify-evenly  max-w-5xl mx-auto px-3 gap-7 my-16
					`}
					>
						<Card
							job={job}
							rtl={!(index % 2)}
						/>
					</motion.div>
				);
			})}
		</motion.div>
	);
};

export default Experiences;
