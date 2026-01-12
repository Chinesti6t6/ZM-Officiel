import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, ChevronDown, Download, ArrowRight } from "lucide-react";
import { useTheme } from "../../../../hooks/useTheme";

const Hero: React.FC = () => {
	const [dpLoading, setDpLoading] = useState(true);
	const [avatarHover, setAvatarHover] = useState(false);
	const [downloadMenuOpen, setDownloadMenuOpen] = useState(false);
	const downloadMenuRef = useRef<HTMLDivElement>(null);
	const { isDark } = useTheme();

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (downloadMenuRef.current && !downloadMenuRef.current.contains(event.target as Node)) {
				setDownloadMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<>
			<div className="px-4 sm:px-6 flex flex-col items-center text-center justify-center gap-8 min-h-[85vh] relative">
				{/* Glassmorphism card behind hero content - visible in light mode */}
				{!isDark && (
					<div className="absolute inset-0 -z-10 backdrop-blur-xl bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl opacity-80 transition-opacity duration-[400ms]" />
				)}

				{/* Animated Avatar with Halo */}
				<motion.div
					className="relative mb-4"
					onMouseEnter={() => setAvatarHover(true)}
					onMouseLeave={() => setAvatarHover(false)}
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ type: "spring", stiffness: 100, damping: 15 }}
				>
					{/* Animated Halo */}
					<motion.div
						className="absolute inset-0 rounded-full"
						style={{
							background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
							opacity: 0.3,
							filter: "blur(20px)",
						}}
						animate={{
							scale: avatarHover ? [1, 1.15, 1] : [1, 1.1, 1],
							opacity: avatarHover ? [0.3, 0.5, 0.3] : [0.2, 0.4, 0.2],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>
					
					{/* Avatar Container with Border */}
					<motion.div
						className="relative overflow-hidden rounded-full border-[6px] border-[var(--accent)]"
						style={{
							width: "clamp(180px, 220px, 95vw)",
							height: "clamp(180px, 220px, 95vw)",
							transformStyle: "preserve-3d",
							perspective: "600px",
						}}
						animate={{
							rotateX: avatarHover ? 5 : 0,
							rotateY: avatarHover ? -5 : 0,
						}}
						transition={{ type: "spring", stiffness: 300, damping: 20 }}
					>
						<motion.img
							src="/assets/MyProfile_pic.jpeg"
							alt="Zakaria Mirinioui"
							className="w-full h-full object-cover rounded-full"
							style={{
								objectPosition: "center 15%",
							}}
							initial={{
								height: "10px",
							}}
							animate={{
								height: dpLoading ? "10px" : "auto",
							}}
							onLoad={() => setDpLoading(false)}
							transition={{ type: "spring", stiffness: 50 }}
						/>
					</motion.div>
				</motion.div>

				{/* Headline */}
				<motion.h1
					className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-4xl"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
				>
					I'm Zakaria —{" "}
					<span className="text-[var(--accent)]">Senior Full-Stack Developer</span> &{" "}
					<span className="text-[var(--accent)]">IT Project Analyst</span>
				</motion.h1>

				{/* Subheading */}
				<motion.p
					className="text-lg sm:text-xl text-[var(--text-muted)] max-w-2xl leading-relaxed"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
				>
					I build secure, scalable web apps for fintech & public sector — bridging business needs with technical reality.
				</motion.p>

				{/* Credibility Chips */}
				<motion.div
					className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-2"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
				>
					<span className="px-4 py-2 bg-[var(--muted)] text-[var(--text)] rounded-full text-sm font-medium border border-[var(--card-border)]">
						4+ yrs production
					</span>
					<span className="px-4 py-2 bg-[var(--muted)] text-[var(--text)] rounded-full text-sm font-medium border border-[var(--card-border)]">
						API & Backend Specialist
					</span>
					<span className="px-4 py-2 bg-[var(--muted)] text-[var(--text)] rounded-full text-sm font-medium border border-[var(--card-border)]">
						Casablanca, Morocco
					</span>
				</motion.div>

				{/* CTAs */}
				<motion.div
					className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
				>
					{/* Download Button with Dropdown */}
					<div className="relative" ref={downloadMenuRef}>
						<button
							onClick={() => setDownloadMenuOpen(!downloadMenuOpen)}
							className="group px-6 py-3 bg-[var(--accent)] text-white rounded-full font-semibold tracking-wide hover:bg-[var(--accent-hover)] transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
							aria-label="Download Resume PDF"
							aria-expanded={downloadMenuOpen}
						>
							<Download size={18} />
							Download Resume
							<ChevronDown 
								size={16} 
								className={`transition-transform duration-300 ${downloadMenuOpen ? 'rotate-180' : ''}`}
							/>
						</button>
						
						<AnimatePresence>
							{downloadMenuOpen && (
								<motion.div
									initial={{ opacity: 0, y: -10, scale: 0.95 }}
									animate={{ opacity: 1, y: 0, scale: 1 }}
									exit={{ opacity: 0, y: -10, scale: 0.95 }}
									transition={{ duration: 0.2 }}
									className="absolute top-full left-0 mt-2 w-48 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl shadow-xl overflow-hidden z-50 backdrop-blur-sm"
								>
									<a
										href="/MiriniouiZakaria-EN.pdf"
										download="MiriniouiZakaria-EN.pdf"
										onClick={() => setDownloadMenuOpen(false)}
										className="block px-4 py-3 text-[var(--text)] hover:bg-[var(--accent)] hover:text-white transition-all duration-200 font-medium text-sm border-b border-[var(--card-border)]"
									>
										English Version
									</a>
									<a
										href="/MiriniouiZakaria-FR.pdf"
										download="MiriniouiZakaria-FR.pdf"
										onClick={() => setDownloadMenuOpen(false)}
										className="block px-4 py-3 text-[var(--text)] hover:bg-[var(--accent)] hover:text-white transition-all duration-200 font-medium text-sm"
									>
										French Version
									</a>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
					<a
						href="mailto:zakmirinioui@gmail.com"
						className="group px-6 py-3 border-2 border-[var(--accent)] text-[var(--accent)] rounded-full font-semibold tracking-wide hover:bg-[var(--accent)] hover:text-white transition-all duration-300 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
					>
						Contact me
						<ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
					</a>
				</motion.div>

				{/* Social Links */}
				<motion.div
					className="flex items-center justify-center gap-6 mt-4"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6 }}
				>
					<a
						href="https://github.com/BITIZE5776s"
						target="_blank"
						rel="noopener noreferrer"
						className="p-3 rounded-full bg-[var(--muted)] text-[var(--text)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
						aria-label="GitHub Profile"
					>
						<Github size={20} />
					</a>
					<a
						href="https://www.linkedin.com/in/zakaria-mirinioui/"
						target="_blank"
						rel="noopener noreferrer"
						className="p-3 rounded-full bg-[var(--muted)] text-[var(--text)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
						aria-label="LinkedIn Profile"
					>
						<Linkedin size={20} />
					</a>
				</motion.div>

				{/* Available for hire badge */}
				<motion.div
					className="mt-4"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.7 }}
				>
					<span className="text-xs text-[var(--text-muted)] font-medium">
						Available for hire — open to remote & hybrid
					</span>
				</motion.div>
			</div>

			{/* Featured Project Card */}
			<motion.div
				className="max-w-2xl mx-auto px-4 sm:px-6 mb-16"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-50px" }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				<div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:border-[var(--accent)] transition-all duration-300">
					<div className="flex items-start justify-between gap-4 mb-3">
						<div className="flex-1">
							<h3 className="text-xl sm:text-2xl font-bold text-[var(--text)] mb-2">
								Featured Project
							</h3>
							<p className="text-[var(--text-muted)] text-sm sm:text-base mb-4">
								Secure, scalable fintech platform with real-time transaction processing and advanced security protocols.
							</p>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<span className="text-sm font-medium text-[var(--accent)]">View Case Study →</span>
						<span className="text-xs text-[var(--text-muted)]">99% uptime • 10k+ users</span>
					</div>
				</div>
			</motion.div>

			{/* Scroll Hint */}
			<motion.div
				className="flex justify-center mb-8"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1 }}
			>
				<motion.div
					animate={{
						y: [0, 10, 0],
					}}
					transition={{
						duration: 2,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					className="flex flex-col items-center gap-2 cursor-pointer"
					onClick={() => {
						window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
					}}
				>
					<span className="text-xs text-[var(--text-muted)] font-medium">Scroll to explore</span>
					<ChevronDown size={24} className="text-[var(--accent)]" />
				</motion.div>
			</motion.div>
		</>
	);
};

export default Hero;
