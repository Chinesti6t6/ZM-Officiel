import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Card: React.FC<{ job: CardType; rtl?: boolean }> = ({
	job,
	rtl = true,
}) => {
	const [expanded, setExpanded] = React.useState(false);

	const Showcase = () => (
		job.showcase.image ? (
			<div className="border border-primary p-2 bg-primary bg-opacity-5 rounded-xl">
				<img
					src={job.showcase.image}
					alt={job.company}
					className="w-[95vw] md:max-w-sm max-h-[270px] object-cover object-top rounded mb-2"
				/>
			</div>
		) : null
	);
	const Details = () => (
		<div className="flex-1 flex flex-col items-center md:items-start justify-start">
			<h3 className="font-extrabold tracking-wider underline-offset-4 mb-2 text-2xl text-primary">
				{job.company}
			</h3>
			<h4 className="font-semibold text-slate-400 text-sm">
				{job.company_location}
			</h4>
			<p className="text-justify text-sm mt-2 mb-6">{job.description}</p>
			<AnimatePresence>
				{expanded && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="overflow-hidden"
					>
						<div className="mb-4">
							<h4 className="font-semibold text-primary mb-2">Technical Stack:</h4>
							<div className="flex flex-wrap gap-2">
								{job.stack.map((tech, idx) => (
									<span key={idx} className="bg-primary bg-opacity-10 text-primary px-2 py-1 rounded text-xs">
										{tech}
									</span>
								))}
							</div>
						</div>
						<div className="mb-4">
							<h4 className="font-semibold text-primary mb-2">Key Highlights:</h4>
							<ul className="list-disc list-inside text-sm text-slate-200">
								{job.highlights.map((highlight, idx) => (
									<li key={idx}>{highlight}</li>
								))}
							</ul>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<button
				onClick={() => setExpanded(!expanded)}
				className="px-4 py-2 bg-primary bg-opacity-10 text-primary rounded-full font-semibold tracking-widest hover:bg-opacity-20 transition-colors duration-300"
			>
				{expanded ? 'Show Less' : 'Learn More'}
			</button>
		</div>
	);

	return (
		<>
			{rtl ? (
				<>
					{job.showcase.image && (
						<div className="inline-flex md:hidden">
							<Showcase />
						</div>
					)}
					<Details />
					{job.showcase.image && (
						<div className="hidden md:inline-flex">
							<Showcase />
						</div>
					)}
				</>
			) : (
				<>
					{job.showcase.image && <Showcase />}
					<Details />
				</>
			)}
		</>
	);
};

export interface CardType {
	company: string;
	company_url: string;
	company_location: string;
	description: string;
	positions: Position[];
	showcase: Showcase;
	stack: string[];
	highlights: string[];
}

export interface Position {
	title: string;
	start_date: string;
	end_date: string;
	duration: string;
	location_type: string;
	job_type: string;
}

export interface Showcase {
	image: string;
	url: string;
}

export default Card;
